const carvedTextCanvas = document.createElement("canvas")
carvedTextCanvas.width = 200
carvedTextCanvas.height = 200
const carvedTextCanvasContext = carvedTextCanvas.getContext("2d")!
carvedTextCanvasContext.fillStyle = "black"
carvedTextCanvasContext.globalAlpha = 1
carvedTextCanvasContext.font = "50px lestania"
carvedTextCanvasContext.textBaseline = "top"

function drawCarvedText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number) {
    carvedTextCanvasContext.clearRect(0, 0, carvedTextCanvas.width, carvedTextCanvas.height)
    carvedTextCanvasContext.globalCompositeOperation = 'source-over'
    carvedTextCanvasContext.shadowColor = "black"
    carvedTextCanvasContext.shadowBlur = 5
    carvedTextCanvasContext.shadowOffsetX = 100
    carvedTextCanvasContext.strokeText(text, -100, 0)
    carvedTextCanvasContext.globalCompositeOperation = 'destination-in'
    carvedTextCanvasContext.shadowColor = "transparent"
    carvedTextCanvasContext.fillText(text, 0, 0)
    ctx.drawImage(carvedTextCanvas, x, y)
    ctx.drawImage(carvedTextCanvas, x, y)
}

const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d")!

const textInput = document.getElementById("text-input") as HTMLInputElement
textInput.oninput = () => {
    updateCanvas()
}

const img = document.createElement("img")
img.src = "image.jpg"
img.onload = () => {
    updateCanvas()
}

function updateCanvas() {
    ctx.drawImage(img, 0, 0)

    const startX = 1259
    const startY = 580
    const maxWidth = 242

    //ctx.strokeStyle = "red"
    //ctx.strokeRect(1259, 602, 242, 223)

    const str = textInput.value
    let offsetX = 0
    let offsetY = 0
    for (let i = 0; i < str.length; i++) {
        const text = str.substr(i, 1)
        const metrics = carvedTextCanvasContext.measureText(text)
        if (offsetX + metrics.width > maxWidth) {
            offsetX = 0
            offsetY += 50
        }
        console.log(text, startX + offsetX, startY + offsetY)
        drawCarvedText(ctx, text, startX + offsetX, startY + offsetY)
        offsetX += metrics.width
    }
}