/// <reference path="global.d.ts" />

let debug = false

class matIV {
	create = function () {
		return new Float32Array(16);
	};
	identity = function (dest: Float32Array) {
		dest[0] = 1; dest[1] = 0; dest[2] = 0; dest[3] = 0;
		dest[4] = 0; dest[5] = 1; dest[6] = 0; dest[7] = 0;
		dest[8] = 0; dest[9] = 0; dest[10] = 1; dest[11] = 0;
		dest[12] = 0; dest[13] = 0; dest[14] = 0; dest[15] = 1;
		return dest;
	};
	multiply = function (mat1: Float32Array, mat2: Float32Array, dest: Float32Array) {
		var a = mat1[0], b = mat1[1], c = mat1[2], d = mat1[3],
			e = mat1[4], f = mat1[5], g = mat1[6], h = mat1[7],
			i = mat1[8], j = mat1[9], k = mat1[10], l = mat1[11],
			m = mat1[12], n = mat1[13], o = mat1[14], p = mat1[15],
			A = mat2[0], B = mat2[1], C = mat2[2], D = mat2[3],
			E = mat2[4], F = mat2[5], G = mat2[6], H = mat2[7],
			I = mat2[8], J = mat2[9], K = mat2[10], L = mat2[11],
			M = mat2[12], N = mat2[13], O = mat2[14], P = mat2[15];
		dest[0] = A * a + B * e + C * i + D * m;
		dest[1] = A * b + B * f + C * j + D * n;
		dest[2] = A * c + B * g + C * k + D * o;
		dest[3] = A * d + B * h + C * l + D * p;
		dest[4] = E * a + F * e + G * i + H * m;
		dest[5] = E * b + F * f + G * j + H * n;
		dest[6] = E * c + F * g + G * k + H * o;
		dest[7] = E * d + F * h + G * l + H * p;
		dest[8] = I * a + J * e + K * i + L * m;
		dest[9] = I * b + J * f + K * j + L * n;
		dest[10] = I * c + J * g + K * k + L * o;
		dest[11] = I * d + J * h + K * l + L * p;
		dest[12] = M * a + N * e + O * i + P * m;
		dest[13] = M * b + N * f + O * j + P * n;
		dest[14] = M * c + N * g + O * k + P * o;
		dest[15] = M * d + N * h + O * l + P * p;
		return dest;
	};
	scale = function (mat: Float32Array, vec: Float32Array, dest: Float32Array) {
		dest[0] = mat[0] * vec[0];
		dest[1] = mat[1] * vec[0];
		dest[2] = mat[2] * vec[0];
		dest[3] = mat[3] * vec[0];
		dest[4] = mat[4] * vec[1];
		dest[5] = mat[5] * vec[1];
		dest[6] = mat[6] * vec[1];
		dest[7] = mat[7] * vec[1];
		dest[8] = mat[8] * vec[2];
		dest[9] = mat[9] * vec[2];
		dest[10] = mat[10] * vec[2];
		dest[11] = mat[11] * vec[2];
		dest[12] = mat[12];
		dest[13] = mat[13];
		dest[14] = mat[14];
		dest[15] = mat[15];
		return dest;
	};
	translate = function (mat: Float32Array, vec: Float32Array, dest: Float32Array) {
		dest[0] = mat[0]; dest[1] = mat[1]; dest[2] = mat[2]; dest[3] = mat[3];
		dest[4] = mat[4]; dest[5] = mat[5]; dest[6] = mat[6]; dest[7] = mat[7];
		dest[8] = mat[8]; dest[9] = mat[9]; dest[10] = mat[10]; dest[11] = mat[11];
		dest[12] = mat[0] * vec[0] + mat[4] * vec[1] + mat[8] * vec[2] + mat[12];
		dest[13] = mat[1] * vec[0] + mat[5] * vec[1] + mat[9] * vec[2] + mat[13];
		dest[14] = mat[2] * vec[0] + mat[6] * vec[1] + mat[10] * vec[2] + mat[14];
		dest[15] = mat[3] * vec[0] + mat[7] * vec[1] + mat[11] * vec[2] + mat[15];
		return dest;
	};
	rotate = function (mat: Float32Array, angle: number, axis: Float32Array, dest: Float32Array) {
		var sq = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);
		if (!sq) { return null; }
		var a = axis[0], b = axis[1], c = axis[2];
		if (sq != 1) { sq = 1 / sq; a *= sq; b *= sq; c *= sq; }
		var d = Math.sin(angle), e = Math.cos(angle), f = 1 - e,
			g = mat[0], h = mat[1], i = mat[2], j = mat[3],
			k = mat[4], l = mat[5], m = mat[6], n = mat[7],
			o = mat[8], p = mat[9], q = mat[10], r = mat[11],
			s = a * a * f + e,
			t = b * a * f + c * d,
			u = c * a * f - b * d,
			v = a * b * f - c * d,
			w = b * b * f + e,
			x = c * b * f + a * d,
			y = a * c * f + b * d,
			z = b * c * f - a * d,
			A = c * c * f + e;
		if (angle) {
			if (mat != dest) {
				dest[12] = mat[12]; dest[13] = mat[13];
				dest[14] = mat[14]; dest[15] = mat[15];
			}
		} else {
			dest = mat;
		}
		dest[0] = g * s + k * t + o * u;
		dest[1] = h * s + l * t + p * u;
		dest[2] = i * s + m * t + q * u;
		dest[3] = j * s + n * t + r * u;
		dest[4] = g * v + k * w + o * x;
		dest[5] = h * v + l * w + p * x;
		dest[6] = i * v + m * w + q * x;
		dest[7] = j * v + n * w + r * x;
		dest[8] = g * y + k * z + o * A;
		dest[9] = h * y + l * z + p * A;
		dest[10] = i * y + m * z + q * A;
		dest[11] = j * y + n * z + r * A;
		return dest;
	};
	lookAt(eye: number[], center: number[], up: number[], dest: Float32Array) {
		var eyeX = eye[0], eyeY = eye[1], eyeZ = eye[2],
			upX = up[0], upY = up[1], upZ = up[2],
			centerX = center[0], centerY = center[1], centerZ = center[2];
		if (eyeX == centerX && eyeY == centerY && eyeZ == centerZ) { return this.identity(dest); }
		var x0, x1, x2, y0, y1, y2, z0, z1, z2, l;
		z0 = eyeX - center[0]; z1 = eyeY - center[1]; z2 = eyeZ - center[2];
		l = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
		z0 *= l; z1 *= l; z2 *= l;
		x0 = upY * z2 - upZ * z1;
		x1 = upZ * z0 - upX * z2;
		x2 = upX * z1 - upY * z0;
		l = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
		if (!l) {
			x0 = 0; x1 = 0; x2 = 0;
		} else {
			l = 1 / l;
			x0 *= l; x1 *= l; x2 *= l;
		}
		y0 = z1 * x2 - z2 * x1; y1 = z2 * x0 - z0 * x2; y2 = z0 * x1 - z1 * x0;
		l = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
		if (!l) {
			y0 = 0; y1 = 0; y2 = 0;
		} else {
			l = 1 / l;
			y0 *= l; y1 *= l; y2 *= l;
		}
		dest[0] = x0; dest[1] = y0; dest[2] = z0; dest[3] = 0;
		dest[4] = x1; dest[5] = y1; dest[6] = z1; dest[7] = 0;
		dest[8] = x2; dest[9] = y2; dest[10] = z2; dest[11] = 0;
		dest[12] = -(x0 * eyeX + x1 * eyeY + x2 * eyeZ);
		dest[13] = -(y0 * eyeX + y1 * eyeY + y2 * eyeZ);
		dest[14] = -(z0 * eyeX + z1 * eyeY + z2 * eyeZ);
		dest[15] = 1;
		return dest;
	};
	perspective = function (fovy: number, aspect: number, near: number, far: number, dest: Float32Array) {
		var t = near * Math.tan(fovy * Math.PI / 360);
		var r = t * aspect;
		var a = r * 2, b = t * 2, c = far - near;
		dest[0] = near * 2 / a;
		dest[1] = 0;
		dest[2] = 0;
		dest[3] = 0;
		dest[4] = 0;
		dest[5] = near * 2 / b;
		dest[6] = 0;
		dest[7] = 0;
		dest[8] = 0;
		dest[9] = 0;
		dest[10] = -(far + near) / c;
		dest[11] = -1;
		dest[12] = 0;
		dest[13] = 0;
		dest[14] = -(far * near * 2) / c;
		dest[15] = 0;
		return dest;
	};
	ortho = function (left: number, right: number, bottom: number, top: number, near: number, far: number, dest: Float32Array) {
		let lr = 1 / (left - right);
		let bt = 1 / (bottom - top);
		let nf = 1 / (near - far);
		dest[0] = -2 * lr;
		dest[1] = 0;
		dest[2] = 0;
		dest[3] = 0;
		dest[4] = 0;
		dest[5] = -2 * bt;
		dest[6] = 0;
		dest[7] = 0;
		dest[8] = 0;
		dest[9] = 0;
		dest[10] = 2 * nf;
		dest[11] = 0;
		dest[12] = (left + right) * lr;
		dest[13] = (top + bottom) * bt;
		dest[14] = (far + near) * nf;
		dest[15] = 1;
		return dest;
	};
	transpose = function (mat: Float32Array, dest: Float32Array) {
		dest[0] = mat[0]; dest[1] = mat[4];
		dest[2] = mat[8]; dest[3] = mat[12];
		dest[4] = mat[1]; dest[5] = mat[5];
		dest[6] = mat[9]; dest[7] = mat[13];
		dest[8] = mat[2]; dest[9] = mat[6];
		dest[10] = mat[10]; dest[11] = mat[14];
		dest[12] = mat[3]; dest[13] = mat[7];
		dest[14] = mat[11]; dest[15] = mat[15];
		return dest;
	};
	inverse = function (mat: Float32Array, dest: Float32Array) {
		var a = mat[0], b = mat[1], c = mat[2], d = mat[3],
			e = mat[4], f = mat[5], g = mat[6], h = mat[7],
			i = mat[8], j = mat[9], k = mat[10], l = mat[11],
			m = mat[12], n = mat[13], o = mat[14], p = mat[15],
			q = a * f - b * e, r = a * g - c * e,
			s = a * h - d * e, t = b * g - c * f,
			u = b * h - d * f, v = c * h - d * g,
			w = i * n - j * m, x = i * o - k * m,
			y = i * p - l * m, z = j * o - k * n,
			A = j * p - l * n, B = k * p - l * o,
			ivd = 1 / (q * B - r * A + s * z + t * y - u * x + v * w);
		dest[0] = (f * B - g * A + h * z) * ivd;
		dest[1] = (-b * B + c * A - d * z) * ivd;
		dest[2] = (n * v - o * u + p * t) * ivd;
		dest[3] = (-j * v + k * u - l * t) * ivd;
		dest[4] = (-e * B + g * y - h * x) * ivd;
		dest[5] = (a * B - c * y + d * x) * ivd;
		dest[6] = (-m * v + o * s - p * r) * ivd;
		dest[7] = (i * v - k * s + l * r) * ivd;
		dest[8] = (e * A - f * y + h * w) * ivd;
		dest[9] = (-a * A + b * y - d * w) * ivd;
		dest[10] = (m * u - n * s + p * q) * ivd;
		dest[11] = (-i * u + j * s - l * q) * ivd;
		dest[12] = (-e * z + f * x - g * w) * ivd;
		dest[13] = (a * z - b * x + c * w) * ivd;
		dest[14] = (-m * t + n * r - o * q) * ivd;
		dest[15] = (i * t - j * r + k * q) * ivd;
		return dest;
	};
}

const dpr = 1//window.devicePixelRatio || 1
const fontHeight = 50
const scaledFontHeight = fontHeight * dpr

function drawCarvedText(carvedTextCanvas: HTMLCanvasElement, carvedTextCanvasContext: CanvasRenderingContext2D, ctx: CanvasRenderingContext2D, text: string, x: number, y: number, scale: number) {
	carvedTextCanvasContext.clearRect(0, 0, carvedTextCanvas.width, carvedTextCanvas.height)
	carvedTextCanvasContext.globalCompositeOperation = 'source-over'
	carvedTextCanvasContext.shadowColor = "black"
	carvedTextCanvasContext.shadowBlur = 2
	carvedTextCanvasContext.shadowOffsetX = 100 + 1
	carvedTextCanvasContext.shadowOffsetY = 1
	carvedTextCanvasContext.strokeText(text, -100, 0)
	carvedTextCanvasContext.globalCompositeOperation = 'destination-in'
	carvedTextCanvasContext.shadowColor = "transparent"
	carvedTextCanvasContext.fillText(text, 0, 0)
	const srcWidth = carvedTextCanvasContext.measureText(text).width * dpr
	const srcHeight = scaledFontHeight
	const width = srcWidth * scale
	const height = srcHeight * scale
	ctx.drawImage(carvedTextCanvas, 0, 0, srcWidth, srcHeight, x, y, width, height)
	ctx.drawImage(carvedTextCanvas, 0, 0, srcWidth, srcHeight, x, y, width, height)
	return { width, height }
}

interface CarvedCanvas {
	canvas: HTMLCanvasElement
	ctx: CanvasRenderingContext2D
	carvedTexts: { [t: string]: CarvedText }
}

interface CarvedText {
	x: number
	width: number
	height: number
}

function generateCarvedTextCanvas(scale: number, alpha: number): CarvedCanvas {
	const carvedTextCanvas = document.createElement("canvas")
	carvedTextCanvas.width = 200
	carvedTextCanvas.height = 200
	const carvedTextCanvasContext = carvedTextCanvas.getContext("2d")!
	carvedTextCanvasContext.fillStyle = "black"
	carvedTextCanvasContext.globalAlpha = alpha
	carvedTextCanvasContext.font = fontHeight + "px lestania"
	carvedTextCanvasContext.textBaseline = "top"

	const canvas = document.createElement('canvas')
	canvas.width = 1000 * dpr
	canvas.height = 200 * dpr
	const ctx = canvas.getContext('2d')!

	const carvedTexts: { [t: string]: CarvedText } = {}
	const texts = "abcdefghijklmnopqrstuvwxyz! "
	let x = 0
	for (let i = 0; i < texts.length; i++) {
		const t = texts[i]
		const size = drawCarvedText(carvedTextCanvas, carvedTextCanvasContext, ctx, t, x, 0, scale)
		carvedTexts[t] = { x, width: size.width, height: size.height }
		x += size.width
	}

	return {
		canvas,
		ctx,
		carvedTexts,
	}
}

function drawCarvedTexts(carved: CarvedCanvas, ctx: CanvasRenderingContext2D, text: string, offsetX: number, offsetY: number, maxWidth: number, scale: number) {
	let x = 0;
	let y = 0;
	for (let i = 0; i < text.length; i++) {
		const c = carved.carvedTexts[text[i]]
		if (c !== undefined) {
			const w = c.width * scale
			const h = c.height * scale
			if (x + w > maxWidth) {
				x = 0
				y += h
			}

			ctx.drawImage(carved.canvas, c.x, 0, c.width, c.height, x + offsetX, y + offsetY, w, h)
			x += w
		}
	}
}

function generateCreditImage() {
	const canvas = document.createElement('canvas')
	canvas.width = 250
	canvas.height = 40
	const ctx = canvas.getContext('2d')!
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.textBaseline = 'bottom'
	ctx.fillStyle = 'white'
	ctx.shadowColor = 'black'
	ctx.shadowOffsetX = 1
	ctx.shadowOffsetY = 1
	ctx.font = '20px lestania ' + getComputedStyle(document.body).fontFamily
	ctx.globalAlpha = 0.3
	const text = 'DDON R.I.P. by @nururefu'
	ctx.fillText(text, 0, 40)
	return canvas
}

interface Rect {
	x: number
	y: number
	w: number
	h: number
}

interface ImageItem {
	name: string
	path: string
	rect: Rect
	scale: number
	alpha: number
	position?: number[]
}

const imageItems: ImageItem[] = [
	{
		name: 'ハイデル',
		path: 'image1.jpg',
		rect: { x: 1259, y: 580, w: 242, h: 300 },
		scale: 1,
		alpha: 1,
	}, {
		name: 'エルテディナン',
		path: 'image2.jpg',
		rect: { x: 1477, y: 463, w: 181, h: 200 },
		scale: 0.75,
		alpha: 0.9,
		position: [
			1473, 458,
			1611, 438,
			1500, 638,
			1653, 623,
		]
	}, {
		name: 'メルゴダ護政区',
		path: 'image3.jpg',
		rect: { x: 1336, y: 806, w: 142, h: 77 },
		scale: 0.5,
		alpha: 0.9,
		position: [
			1345, 806,
			1477, 806,
			1330, 878,
			1477, 883,
		]
	}, {
		name: 'エルテディナン2',
		path: 'image4.jpg',
		rect: { x: 559, y: 914, w: 803, h: 41 },
		scale: 0.9,
		alpha: 1,
	}, {
		name: '秘弓師の住居',
		path: 'image5.jpg',
		rect: { x: 1321, y: 262, w: 250, h: 716 },
		scale: 1,
		alpha: 0.9,
		position: [
			1321, 272,
			1515, 313,
			1440, 964,
			1696, 952,
		]
	}, {
		name: '禊の神殿',
		path: 'image6.jpg',
		rect: { x: 305, y: 662, w: 267, h: 226 },
		scale: 1,
		alpha: 1,
		position: [
			315, 667,
			579, 679,
			281, 878,
			561, 874,
		]
	}, {
		name: 'ポーン郷',
		path: 'image7.jpg',
		rect: { x: 407, y: 824, w: 204, h: 160 },
		scale: 0.8,
		alpha: 0.9,
		position: [
			413, 832,
			610, 832,
			398, 956,
			600, 957,
		]
	},
]

let selectedImageItem: ImageItem | undefined = imageItems[0]

const imageSelect = document.getElementById('image-select') as HTMLSelectElement
imageSelect.onchange = () => {
	const selectedItem = imageItems[imageSelect.selectedIndex]
	selectedImageItem = selectedItem
	console.log(selectedItem)
	initialize().then(() => render())
}

for (const item of imageItems) {
	const option = document.createElement('option')
	option.text = item.name
	imageSelect.options.add(option);
}

const canvas = document.getElementById("canvas") as HTMLCanvasElement
//const ctx = canvas.getContext("2d")!
canvas.width = 1920 * dpr
canvas.height = 1080 * dpr

const glOptions: WebGLContextAttributes = { preserveDrawingBuffer: true, alpha: false }
const gl = canvas.getContext('webgl', glOptions) || canvas.getContext('experimental-webgl', glOptions) as WebGLRenderingContext
//gl.colorMask(false, false, false, true)
gl.clearColor(0, 0, 0, 1)
gl.clearDepth(1)
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

gl.enable(gl.BLEND)
gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
gl.enable(gl.DEPTH_TEST)
gl.depthFunc(gl.LEQUAL)

function createShader(source: string, type: number) {
	const shader = gl.createShader(type)!
	gl.shaderSource(shader, source)
	gl.compileShader(shader)

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		throw gl.getShaderInfoLog(shader)
	}

	return shader
}

function createProgram(vs: WebGLShader, fs: WebGLShader) {
	const program = gl.createProgram()!
	gl.attachShader(program, vs)
	gl.attachShader(program, fs)
	gl.linkProgram(program)

	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		throw gl.getProgramInfoLog(program)
	}

	gl.useProgram(program)
	return program
}

const vertexShaderSource = `
attribute vec3 position;
attribute vec4 color;
attribute vec2 textureCoord;
uniform   mat4 mvpMatrix;
varying   vec4 vColor;
varying   vec2 vTextureCoord;

void main(void){
    vColor        = color;
    vTextureCoord = textureCoord;
    gl_Position   = mvpMatrix * vec4(position, 1.0);
}
`
const fragmentShaderSource = `
precision mediump float;

uniform sampler2D texture;
uniform bool      useTexture;
varying vec4      vColor;
varying vec2      vTextureCoord;

void main(void){
	if (useTexture) {
		gl_FragColor = vColor * texture2D(texture, vTextureCoord);
	} else {
		gl_FragColor = vColor;
	}
	//gl_FragColor  = vColor;
	gl_FragColor.rgb *= gl_FragColor.a;
}
`

const vertexShader = createShader(vertexShaderSource, gl.VERTEX_SHADER)
const fragmentShader = createShader(fragmentShaderSource, gl.FRAGMENT_SHADER)
const program = createProgram(vertexShader, fragmentShader)
const positionAttribLocation = gl.getAttribLocation(program, 'position')
const colorAttribLocation = gl.getAttribLocation(program, 'color')
const textureCoordAttributeLocation = gl.getAttribLocation(program, 'textureCoord')

const mvpMatrixUniformLocation = gl.getUniformLocation(program, 'mvpMatrix')
const textureUniformLocation = gl.getUniformLocation(program, 'texture')
const useTextureUniformLocation = gl.getUniformLocation(program, 'useTexture')

function getRectPosition(rect: Rect, z: number) {
	return [
		rect.x, rect.y, z,
		rect.x + rect.w, rect.y, z,
		rect.x, rect.y + rect.h, z,
		rect.x + rect.w, rect.y + rect.h, z,
	]
}

function createFloatArrayBuffer(data: number[]) {
	const vbo = gl.createBuffer()!
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
	return vbo
}

function createInt16ElementBuffer(data: number[]) {
	const ibo = gl.createBuffer()!
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo)
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Int16Array(data), gl.STATIC_DRAW)
	return ibo
}

function setVertex(index: number, size: number) {
	gl.enableVertexAttribArray(index)
	gl.vertexAttribPointer(index, size, gl.FLOAT, false, 0, 0)
}

function createTexture(img: TexImageSource) {
	const texture = gl.createTexture()!
	gl.bindTexture(gl.TEXTURE_2D, texture)

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR) // gl.LINEAR の代わりに gl.NEAREST も可能。ミップマップは不可
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE) // S 座標のラッピング (繰り返し) を禁止
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE) // T 座標のラッピング (繰り返し) を禁止
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)

	return texture
}

function drawImage(
	img: TexImageSource,
	texture: WebGLTexture,
	imageIndex: number,
	imageRect: Rect | undefined,
	destPosition: number[]) {
	imageRect = imageRect || { x: 0, y: 0, w: img.width, h: img.height }

	const vertexVbo = createFloatArrayBuffer(destPosition)
	setVertex(positionAttribLocation, 3)

	const vertexColor = [
		1, 1, 1, 1,
		1, 1, 1, 1,
		1, 1, 1, 1,
		1, 1, 1, 1,
	]
	const colorVbo = createFloatArrayBuffer(vertexColor)
	setVertex(colorAttribLocation, 4)

	const x1 = imageRect.x / img.width
	const y1 = imageRect.y / img.height
	const x2 = (imageRect.x + imageRect.w) / img.width
	const y2 = (imageRect.y + imageRect.h) / img.height
	const textureCoord = [
		x1, y1,
		x2, y1,
		x1, y2,
		x2, y2,
	]
	const textureCoordVbo = createFloatArrayBuffer(textureCoord)
	setVertex(textureCoordAttributeLocation, 2)

	const index = [
		0, 1, 2,
		3, 2, 1
	]
	const indexIbo = createInt16ElementBuffer(index)

	const m = new matIV()
	const mMatrix = m.identity(m.create())
	const vMatrix = m.identity(m.create())
	const pMatrix = m.identity(m.create())
	const mvpMatrix = m.identity(m.create())

	m.lookAt([0, 0, 1], [0, 0, 0], [0, 1, 0], vMatrix)
	//m.perspective(90, canvas.width / canvas.height, 0.1, 100, pMatrix)
	m.ortho(0, 1920, 1080, 0, 0.1, 100, pMatrix)
	m.multiply(pMatrix, vMatrix, mvpMatrix)
	m.multiply(mvpMatrix, mMatrix, mvpMatrix)

	gl.bindTexture(gl.TEXTURE_2D, texture)
	gl.uniform1i(textureUniformLocation, imageIndex)
	gl.uniform1i(useTextureUniformLocation, 1)
	gl.uniformMatrix4fv(mvpMatrixUniformLocation, false, mvpMatrix)
	gl.drawElements(gl.TRIANGLES, index.length, gl.UNSIGNED_SHORT, 0)

	if (debug) {
		gl.uniform1i(useTextureUniformLocation, 0)
		gl.drawArrays(gl.LINE_STRIP, 0, 4)
	}
}

console.log('MAX_COMBINED_TEXTURE_IMAGE_UNITS', gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS))

function loadImage(url: string) {
	return new Promise<HTMLImageElement>((resolve, reject) => {
		console.log('loadImage', url)
		const img = new Image()
		img.onload = () => {
			console.log('onload', url)
			resolve(img)
		}
		img.src = url;
	})
}

let inputtedText = ''
let mainImage: HTMLImageElement
let mainImageTexture: WebGLTexture
let carved: CarvedCanvas

const creditImage = generateCreditImage()
const creditImageTexture = createTexture(creditImage)

const carvedTextsImage = document.createElement('canvas')
const carvedTextsImageContext = carvedTextsImage.getContext('2d')!

let initialized = false
async function initialize() {
	if (selectedImageItem) {
		initialized = false

		mainImage = await loadImage(selectedImageItem.path)
		mainImageTexture = createTexture(mainImage)

		carvedTextsImage.width = selectedImageItem.rect.w
		carvedTextsImage.height = selectedImageItem.rect.h

		const font = new FontFaceObserver('lestania')
		await font.load()
		carved = generateCarvedTextCanvas(selectedImageItem.scale / 2, selectedImageItem.alpha)

		initialized = true
		console.log('initialized')
	}
}

function render() {
	console.log('render', initialized, selectedImageItem)
	if (!initialized || !selectedImageItem) return

	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

	gl.activeTexture(gl.TEXTURE0)
	drawImage(mainImage, mainImageTexture, 0, undefined, getRectPosition({ x: 0, y: 0, w: 1920, h: 1080 }, 0))

	const r = selectedImageItem.rect
	carvedTextsImageContext.clearRect(0, 0, r.w, r.h)
	drawCarvedTexts(carved, carvedTextsImageContext, inputtedText, 0, 0, r.w, 2)
	const carvedTexture = createTexture(carvedTextsImage)
	gl.activeTexture(gl.TEXTURE1)

	const z = 0.1
	const position = selectedImageItem.position ? getRectPositionByXY(selectedImageItem.position, 0) : getRectPosition(r, 0)
	drawImage(carvedTextsImage, carvedTexture, 1, undefined, position)

	gl.activeTexture(gl.TEXTURE2)
	drawImage(creditImage, creditImageTexture, 2, undefined, getRectPosition({ x: 1920 - 10 - creditImage.width, y: 1080 - 10 - creditImage.height, w: creditImage.width, h: creditImage.height }, 0))

	gl.flush()

	console.log('flush')
}

function getRectPositionByXY(p: number[], z: number): number[] {
	return [
		p[0], p[1], z,
		p[2], p[3], z,
		p[4], p[5], z,
		p[6], p[7], z,
	]
}

initialize().then(() => render())

const textInput = document.getElementById("text-input") as HTMLInputElement
textInput.oninput = () => {
	inputtedText = textInput.value
	render()
	//requestUpdate()
}
inputtedText = textInput.value

const downloadButton = document.getElementById("download-button") as HTMLButtonElement
downloadButton.onclick = () => {
	const link = document.createElement("a")
	link.href = canvas.toDataURL("image/jpeg", 0.90)
	link.download = "DDONRIP.jpg"
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}

// const img = document.createElement("img")
// img.src = "image.jpg"
// img.onload = () => {
//     requestUpdate()
// }

let requested = false
let requesting = false
function requestUpdate() {
	requested = true
	onUpdate()
}

function onUpdate() {
	if (requesting) return

	if (requested) {
		requested = false
		requesting = true
		setTimeout(() => {
			requesting = false
			onUpdate()
		}, 500)
	} else {
		render()
	}
}

// function updateCanvas() {
//     ctx.filter = "none"
//     ctx.drawImage(img, 0, 0, 1920 * dpr, 1080 * dpr)

//     const startX = 1259 * dpr
//     const startY = 580 * dpr
//     const maxWidth = 242 * dpr

//     //ctx.strokeStyle = "red"
//     //ctx.strokeRect(1259, 602, 242, 223)

//     ctx.filter = "blur(1px)"

//     const str = textInput.value.toLowerCase()
//     let offsetX = 0
//     let offsetY = 0
//     for (let i = 0; i < str.length; i++) {
//         const text = str.substr(i, 1)
//         const width = carvedTextCanvasContext.measureText(text).width * dpr
//         if (offsetX + width > maxWidth) {
//             offsetX = 0
//             offsetY += fontHeight * dpr
//         }
//         //console.log(text, startX + offsetX, startY + offsetY)
//         drawCarvedText(ctx, text, startX + offsetX, startY + offsetY)
//         offsetX += width
//     }

//     ctx.filter = "none"
//     ctx.fillStyle = "gray"
//     ctx.font = "20px sans-serif"
//     ctx.textBaseline = "top"
//     ctx.fillText("DDON R.I.P. @nururefu", 10 * dpr, (1080 - 30) * dpr)
// }