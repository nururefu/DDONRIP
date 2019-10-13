"use strict";
var dpr = window.devicePixelRatio || 1;
var fontHeight = 50 * dpr;
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
    carvedTextCanvasContext.shadowBlur = 2 * dpr;
    carvedTextCanvasContext.shadowOffsetX = 100 + (1 * dpr);
    carvedTextCanvasContext.shadowOffsetY = 1 * dpr;
    carvedTextCanvasContext.strokeText(text, -100, 0);
    carvedTextCanvasContext.globalCompositeOperation = 'destination-in';
    carvedTextCanvasContext.shadowColor = "transparent";
    carvedTextCanvasContext.fillText(text, 0, 0);
    ctx.drawImage(carvedTextCanvas, x, y);
    ctx.drawImage(carvedTextCanvas, x, y);
}
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1920 * dpr;
canvas.height = 1080 * dpr;
var textInput = document.getElementById("text-input");
textInput.oninput = function () {
    updateCanvas();
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
    updateCanvas();
};
function updateCanvas() {
    ctx.drawImage(img, 0, 0, 1920 * dpr, 1080 * dpr);
    var startX = 1259 * dpr;
    var startY = 580 * dpr;
    var maxWidth = 242 * dpr;
    //ctx.strokeStyle = "red"
    //ctx.strokeRect(1259, 602, 242, 223)
    //ctx.filter = "blur(1px)"
    var str = textInput.value;
    var offsetX = 0;
    var offsetY = 0;
    for (var i = 0; i < str.length; i++) {
        var text = str.substr(i, 1);
        var metrics = carvedTextCanvasContext.measureText(text);
        if (offsetX + metrics.width > maxWidth) {
            offsetX = 0;
            offsetY += fontHeight;
        }
        //console.log(text, startX + offsetX, startY + offsetY)
        drawCarvedText(ctx, text, startX + offsetX, startY + offsetY);
        offsetX += metrics.width;
    }
}
