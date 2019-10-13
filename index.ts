const dpr = window.devicePixelRatio || 1
const fontHeight = 50 * dpr

const carvedTextCanvas = document.createElement("canvas")
carvedTextCanvas.width = 200
carvedTextCanvas.height = 200
const carvedTextCanvasContext = carvedTextCanvas.getContext("2d")!
carvedTextCanvasContext.fillStyle = "black"
carvedTextCanvasContext.globalAlpha = 1
carvedTextCanvasContext.font = fontHeight + "px lestania"
carvedTextCanvasContext.textBaseline = "top"

function drawCarvedText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number) {
    carvedTextCanvasContext.clearRect(0, 0, carvedTextCanvas.width, carvedTextCanvas.height)
    carvedTextCanvasContext.globalCompositeOperation = 'source-over'
    carvedTextCanvasContext.shadowColor = "black"
    carvedTextCanvasContext.shadowBlur = 2 * dpr
    carvedTextCanvasContext.shadowOffsetX = 100 + (1 * dpr)
    carvedTextCanvasContext.shadowOffsetY = 1 * dpr
    carvedTextCanvasContext.strokeText(text, -100, 0)
    carvedTextCanvasContext.globalCompositeOperation = 'destination-in'
    carvedTextCanvasContext.shadowColor = "transparent"
    carvedTextCanvasContext.fillText(text, 0, 0)
    ctx.drawImage(carvedTextCanvas, x, y)
    ctx.drawImage(carvedTextCanvas, x, y)
}

const canvas = document.getElementById("canvas") as HTMLCanvasElement
const ctx = canvas.getContext("2d")!
canvas.width = 1920 * dpr
canvas.height = 1080 * dpr

const textInput = document.getElementById("text-input") as HTMLInputElement
textInput.oninput = () => {
    updateCanvas()
}

const downloadButton = document.getElementById("download-button") as HTMLButtonElement
downloadButton.onclick = () => {
    const link = document.createElement("a")
    link.href = canvas.toDataURL("image/jpeg", 0.90)
    link.download = "DDONRIP.jpg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

const img = document.createElement("img")
img.src = "image.jpg"
img.onload = () => {
    updateCanvas()
}

function updateCanvas() {
    ctx.drawImage(img, 0, 0, 1920 * dpr, 1080 * dpr)

    const startX = 1259 * dpr
    const startY = 580 * dpr
    const maxWidth = 242 * dpr

    //ctx.strokeStyle = "red"
    //ctx.strokeRect(1259, 602, 242, 223)

    //ctx.filter = "blur(1px)"

    const str = textInput.value
    let offsetX = 0
    let offsetY = 0
    for (let i = 0; i < str.length; i++) {
        const text = str.substr(i, 1)
        const metrics = carvedTextCanvasContext.measureText(text)
        if (offsetX + metrics.width > maxWidth) {
            offsetX = 0
            offsetY += fontHeight
        }
        //console.log(text, startX + offsetX, startY + offsetY)
        drawCarvedText(ctx, text, startX + offsetX, startY + offsetY)
        offsetX += metrics.width
    }
}