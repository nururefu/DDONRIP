"use strict";
var carvedTextCanvas = document.createElement("canvas");
carvedTextCanvas.width = 200;
carvedTextCanvas.height = 200;
var carvedTextCanvasContext = carvedTextCanvas.getContext("2d");
carvedTextCanvasContext.fillStyle = "black";
carvedTextCanvasContext.globalAlpha = 1;
carvedTextCanvasContext.font = "50px lestania";
carvedTextCanvasContext.textBaseline = "top";
function drawCarvedText(ctx, text, x, y) {
    carvedTextCanvasContext.clearRect(0, 0, carvedTextCanvas.width, carvedTextCanvas.height);
    carvedTextCanvasContext.globalCompositeOperation = 'source-over';
    carvedTextCanvasContext.shadowColor = "black";
    carvedTextCanvasContext.shadowBlur = 5;
    carvedTextCanvasContext.shadowOffsetX = 100;
    carvedTextCanvasContext.strokeText(text, -100, 0);
    carvedTextCanvasContext.globalCompositeOperation = 'destination-in';
    carvedTextCanvasContext.shadowColor = "transparent";
    carvedTextCanvasContext.fillText(text, 0, 0);
    ctx.drawImage(carvedTextCanvas, x, y);
    ctx.drawImage(carvedTextCanvas, x, y);
}
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var textInput = document.getElementById("text-input");
textInput.oninput = function () {
    updateCanvas();
};
var downloadButton = document.getElementById("download-button");
downloadButton.onclick = function () {
    var link = document.createElement("a");
    link.href = canvas.toDataURL("image/jpeg", 0.90);
    link.download = "DDONRIP.jpg";
    link.click();
};
var img = document.createElement("img");
img.src = "image.jpg";
img.onload = function () {
    updateCanvas();
};
function updateCanvas() {
    ctx.drawImage(img, 0, 0);
    var startX = 1259;
    var startY = 580;
    var maxWidth = 242;
    //ctx.strokeStyle = "red"
    //ctx.strokeRect(1259, 602, 242, 223)
    var str = textInput.value;
    var offsetX = 0;
    var offsetY = 0;
    for (var i = 0; i < str.length; i++) {
        var text = str.substr(i, 1);
        var metrics = carvedTextCanvasContext.measureText(text);
        if (offsetX + metrics.width > maxWidth) {
            offsetX = 0;
            offsetY += 50;
        }
        //console.log(text, startX + offsetX, startY + offsetY)
        drawCarvedText(ctx, text, startX + offsetX, startY + offsetY);
        offsetX += metrics.width;
    }
}
