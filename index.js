"use strict";
var dpr = window.devicePixelRatio || 1;
var fontHeight = 50;
var carvedTextCanvas = document.createElement("canvas");
carvedTextCanvas.width = 200;
carvedTextCanvas.height = 200;
var carvedTextCanvasContext = carvedTextCanvas.getContext("2d");
carvedTextCanvasContext.fillStyle = "black";
carvedTextCanvasContext.globalAlpha = 1;
carvedTextCanvasContext.font = fontHeight + "px lestania";
carvedTextCanvasContext.textBaseline = "top";
function drawCarvedText(ctx, text, x, y) {
    carvedTextCanvasContext.clearRect(0, 0, carvedTextCanvas.width, carvedTextCanvas.height);
    carvedTextCanvasContext.globalCompositeOperation = 'source-over';
    carvedTextCanvasContext.shadowColor = "black";
    carvedTextCanvasContext.shadowBlur = 2;
    carvedTextCanvasContext.shadowOffsetX = 100 + 1;
    carvedTextCanvasContext.shadowOffsetY = 1;
    carvedTextCanvasContext.strokeText(text, -100, 0);
    carvedTextCanvasContext.globalCompositeOperation = 'destination-in';
    carvedTextCanvasContext.shadowColor = "transparent";
    carvedTextCanvasContext.fillText(text, 0, 0);
    var width = carvedTextCanvasContext.measureText(text).width;
    ctx.drawImage(carvedTextCanvas, 0, 0, width, fontHeight, x, y, width * dpr, fontHeight * dpr);
    ctx.drawImage(carvedTextCanvas, 0, 0, width, fontHeight, x, y, width * dpr, fontHeight * dpr);
}
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1920 * dpr;
canvas.height = 1080 * dpr;
var textInput = document.getElementById("text-input");
textInput.oninput = function () {
    requestUpdate();
};
var downloadButton = document.getElementById("download-button");
downloadButton.onclick = function () {
    var link = document.createElement("a");
    link.href = canvas.toDataURL("image/jpeg", 0.90);
    link.download = "DDONRIP.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
var img = document.createElement("img");
img.src = "image.jpg";
img.onload = function () {
    requestUpdate();
};
var requested = false;
var requesting = false;
function requestUpdate() {
    requested = true;
    onUpdate();
}
function onUpdate() {
    if (requesting)
        return;
    if (requested) {
        requested = false;
        requesting = true;
        setTimeout(function () {
            requesting = false;
            onUpdate();
        }, 500);
    }
    else {
        updateCanvas();
    }
}
function updateCanvas() {
    ctx.filter = "none";
    ctx.drawImage(img, 0, 0, 1920 * dpr, 1080 * dpr);
    var startX = 1259 * dpr;
    var startY = 580 * dpr;
    var maxWidth = 242 * dpr;
    //ctx.strokeStyle = "red"
    //ctx.strokeRect(1259, 602, 242, 223)
    ctx.filter = "blur(1px)";
    var str = textInput.value;
    var offsetX = 0;
    var offsetY = 0;
    for (var i = 0; i < str.length; i++) {
        var text = str.substr(i, 1);
        var width = carvedTextCanvasContext.measureText(text).width * dpr;
        if (offsetX + width > maxWidth) {
            offsetX = 0;
            offsetY += fontHeight * dpr;
        }
        //console.log(text, startX + offsetX, startY + offsetY)
        drawCarvedText(ctx, text, startX + offsetX, startY + offsetY);
        offsetX += width;
    }
    ctx.filter = "none";
    ctx.fillStyle = "gray";
    ctx.font = "20px sans-serif";
    ctx.textBaseline = "top";
    ctx.fillText("DDON R.I.P. @nururefu", 10 * dpr, (1080 - 30) * dpr);
}
