"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var debug = false;
var matIV = (function () {
    function matIV() {
        this.create = function () {
            return new Float32Array(16);
        };
        this.identity = function (dest) {
            dest[0] = 1;
            dest[1] = 0;
            dest[2] = 0;
            dest[3] = 0;
            dest[4] = 0;
            dest[5] = 1;
            dest[6] = 0;
            dest[7] = 0;
            dest[8] = 0;
            dest[9] = 0;
            dest[10] = 1;
            dest[11] = 0;
            dest[12] = 0;
            dest[13] = 0;
            dest[14] = 0;
            dest[15] = 1;
            return dest;
        };
        this.multiply = function (mat1, mat2, dest) {
            var a = mat1[0], b = mat1[1], c = mat1[2], d = mat1[3], e = mat1[4], f = mat1[5], g = mat1[6], h = mat1[7], i = mat1[8], j = mat1[9], k = mat1[10], l = mat1[11], m = mat1[12], n = mat1[13], o = mat1[14], p = mat1[15], A = mat2[0], B = mat2[1], C = mat2[2], D = mat2[3], E = mat2[4], F = mat2[5], G = mat2[6], H = mat2[7], I = mat2[8], J = mat2[9], K = mat2[10], L = mat2[11], M = mat2[12], N = mat2[13], O = mat2[14], P = mat2[15];
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
        this.scale = function (mat, vec, dest) {
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
        this.translate = function (mat, vec, dest) {
            dest[0] = mat[0];
            dest[1] = mat[1];
            dest[2] = mat[2];
            dest[3] = mat[3];
            dest[4] = mat[4];
            dest[5] = mat[5];
            dest[6] = mat[6];
            dest[7] = mat[7];
            dest[8] = mat[8];
            dest[9] = mat[9];
            dest[10] = mat[10];
            dest[11] = mat[11];
            dest[12] = mat[0] * vec[0] + mat[4] * vec[1] + mat[8] * vec[2] + mat[12];
            dest[13] = mat[1] * vec[0] + mat[5] * vec[1] + mat[9] * vec[2] + mat[13];
            dest[14] = mat[2] * vec[0] + mat[6] * vec[1] + mat[10] * vec[2] + mat[14];
            dest[15] = mat[3] * vec[0] + mat[7] * vec[1] + mat[11] * vec[2] + mat[15];
            return dest;
        };
        this.rotate = function (mat, angle, axis, dest) {
            var sq = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);
            if (!sq) {
                return null;
            }
            var a = axis[0], b = axis[1], c = axis[2];
            if (sq != 1) {
                sq = 1 / sq;
                a *= sq;
                b *= sq;
                c *= sq;
            }
            var d = Math.sin(angle), e = Math.cos(angle), f = 1 - e, g = mat[0], h = mat[1], i = mat[2], j = mat[3], k = mat[4], l = mat[5], m = mat[6], n = mat[7], o = mat[8], p = mat[9], q = mat[10], r = mat[11], s = a * a * f + e, t = b * a * f + c * d, u = c * a * f - b * d, v = a * b * f - c * d, w = b * b * f + e, x = c * b * f + a * d, y = a * c * f + b * d, z = b * c * f - a * d, A = c * c * f + e;
            if (angle) {
                if (mat != dest) {
                    dest[12] = mat[12];
                    dest[13] = mat[13];
                    dest[14] = mat[14];
                    dest[15] = mat[15];
                }
            }
            else {
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
        this.perspective = function (fovy, aspect, near, far, dest) {
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
        this.ortho = function (left, right, bottom, top, near, far, dest) {
            var lr = 1 / (left - right);
            var bt = 1 / (bottom - top);
            var nf = 1 / (near - far);
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
        this.transpose = function (mat, dest) {
            dest[0] = mat[0];
            dest[1] = mat[4];
            dest[2] = mat[8];
            dest[3] = mat[12];
            dest[4] = mat[1];
            dest[5] = mat[5];
            dest[6] = mat[9];
            dest[7] = mat[13];
            dest[8] = mat[2];
            dest[9] = mat[6];
            dest[10] = mat[10];
            dest[11] = mat[14];
            dest[12] = mat[3];
            dest[13] = mat[7];
            dest[14] = mat[11];
            dest[15] = mat[15];
            return dest;
        };
        this.inverse = function (mat, dest) {
            var a = mat[0], b = mat[1], c = mat[2], d = mat[3], e = mat[4], f = mat[5], g = mat[6], h = mat[7], i = mat[8], j = mat[9], k = mat[10], l = mat[11], m = mat[12], n = mat[13], o = mat[14], p = mat[15], q = a * f - b * e, r = a * g - c * e, s = a * h - d * e, t = b * g - c * f, u = b * h - d * f, v = c * h - d * g, w = i * n - j * m, x = i * o - k * m, y = i * p - l * m, z = j * o - k * n, A = j * p - l * n, B = k * p - l * o, ivd = 1 / (q * B - r * A + s * z + t * y - u * x + v * w);
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
    matIV.prototype.lookAt = function (eye, center, up, dest) {
        var eyeX = eye[0], eyeY = eye[1], eyeZ = eye[2], upX = up[0], upY = up[1], upZ = up[2], centerX = center[0], centerY = center[1], centerZ = center[2];
        if (eyeX == centerX && eyeY == centerY && eyeZ == centerZ) {
            return this.identity(dest);
        }
        var x0, x1, x2, y0, y1, y2, z0, z1, z2, l;
        z0 = eyeX - center[0];
        z1 = eyeY - center[1];
        z2 = eyeZ - center[2];
        l = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
        z0 *= l;
        z1 *= l;
        z2 *= l;
        x0 = upY * z2 - upZ * z1;
        x1 = upZ * z0 - upX * z2;
        x2 = upX * z1 - upY * z0;
        l = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
        if (!l) {
            x0 = 0;
            x1 = 0;
            x2 = 0;
        }
        else {
            l = 1 / l;
            x0 *= l;
            x1 *= l;
            x2 *= l;
        }
        y0 = z1 * x2 - z2 * x1;
        y1 = z2 * x0 - z0 * x2;
        y2 = z0 * x1 - z1 * x0;
        l = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
        if (!l) {
            y0 = 0;
            y1 = 0;
            y2 = 0;
        }
        else {
            l = 1 / l;
            y0 *= l;
            y1 *= l;
            y2 *= l;
        }
        dest[0] = x0;
        dest[1] = y0;
        dest[2] = z0;
        dest[3] = 0;
        dest[4] = x1;
        dest[5] = y1;
        dest[6] = z1;
        dest[7] = 0;
        dest[8] = x2;
        dest[9] = y2;
        dest[10] = z2;
        dest[11] = 0;
        dest[12] = -(x0 * eyeX + x1 * eyeY + x2 * eyeZ);
        dest[13] = -(y0 * eyeX + y1 * eyeY + y2 * eyeZ);
        dest[14] = -(z0 * eyeX + z1 * eyeY + z2 * eyeZ);
        dest[15] = 1;
        return dest;
    };
    ;
    return matIV;
}());
var dpr = 1;
var fontHeight = 50;
var scaledFontHeight = fontHeight * dpr;
function drawCarvedText(carvedTextCanvas, carvedTextCanvasContext, ctx, text, x, y, scale) {
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
    var srcWidth = carvedTextCanvasContext.measureText(text).width * dpr;
    var srcHeight = scaledFontHeight;
    var width = srcWidth * scale;
    var height = srcHeight * scale;
    ctx.drawImage(carvedTextCanvas, 0, 0, srcWidth, srcHeight, x, y, width, height);
    ctx.drawImage(carvedTextCanvas, 0, 0, srcWidth, srcHeight, x, y, width, height);
    return { width: width, height: height };
}
function generateCarvedTextCanvas(scale, alpha) {
    var carvedTextCanvas = document.createElement("canvas");
    carvedTextCanvas.width = 200;
    carvedTextCanvas.height = 200;
    var carvedTextCanvasContext = carvedTextCanvas.getContext("2d");
    carvedTextCanvasContext.fillStyle = "black";
    carvedTextCanvasContext.globalAlpha = alpha;
    carvedTextCanvasContext.font = fontHeight + "px lestania";
    carvedTextCanvasContext.textBaseline = "top";
    var canvas = document.createElement('canvas');
    canvas.width = 1000 * dpr;
    canvas.height = 200 * dpr;
    var ctx = canvas.getContext('2d');
    var carvedTexts = {};
    var texts = "abcdefghijklmnopqrstuvwxyz! ";
    var x = 0;
    for (var i = 0; i < texts.length; i++) {
        var t = texts[i];
        var size = drawCarvedText(carvedTextCanvas, carvedTextCanvasContext, ctx, t, x, 0, scale);
        carvedTexts[t] = { x: x, width: size.width, height: size.height };
        x += size.width;
    }
    return {
        canvas: canvas,
        ctx: ctx,
        carvedTexts: carvedTexts
    };
}
function drawCarvedTexts(carved, ctx, text, offsetX, offsetY, maxWidth, scale) {
    var x = 0;
    var y = 0;
    for (var i = 0; i < text.length; i++) {
        var c = carved.carvedTexts[text[i]];
        if (c !== undefined) {
            var w = c.width * scale;
            var h = c.height * scale;
            if (x + w > maxWidth) {
                x = 0;
                y += h;
            }
            ctx.drawImage(carved.canvas, c.x, 0, c.width, c.height, x + offsetX, y + offsetY, w, h);
            x += w;
        }
    }
}
function generateCreditImage() {
    var canvas = document.createElement('canvas');
    canvas.width = 250;
    canvas.height = 40;
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = 'white';
    ctx.shadowColor = 'black';
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.font = '20px lestania ' + getComputedStyle(document.body).fontFamily;
    ctx.globalAlpha = 0.3;
    var text = 'DDON R.I.P. by @nururefu';
    ctx.fillText(text, 0, 40);
    return canvas;
}
var imageItems = [
    {
        name: 'ハイデル',
        path: 'image1.jpg',
        rect: { x: 1259, y: 580, w: 242, h: 300 },
        scale: 1,
        alpha: 1
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
        alpha: 1
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
];
var selectedImageItem = imageItems[0];
var imageSelect = document.getElementById('image-select');
imageSelect.onchange = function () {
    var selectedItem = imageItems[imageSelect.selectedIndex];
    selectedImageItem = selectedItem;
    console.log(selectedItem);
    initialize().then(function () { return render(); });
};
for (var _i = 0, imageItems_1 = imageItems; _i < imageItems_1.length; _i++) {
    var item = imageItems_1[_i];
    var option = document.createElement('option');
    option.text = item.name;
    imageSelect.options.add(option);
}
var canvas = document.getElementById("canvas");
canvas.width = 1920 * dpr;
canvas.height = 1080 * dpr;
var glOptions = { preserveDrawingBuffer: true, alpha: false };
var gl = canvas.getContext('webgl', glOptions) || canvas.getContext('experimental-webgl', glOptions);
gl.clearColor(0, 0, 0, 1);
gl.clearDepth(1);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
gl.enable(gl.BLEND);
gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LEQUAL);
function createShader(source, type) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw gl.getShaderInfoLog(shader);
    }
    return shader;
}
function createProgram(vs, fs) {
    var program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw gl.getProgramInfoLog(program);
    }
    gl.useProgram(program);
    return program;
}
var vertexShaderSource = "\nattribute vec3 position;\nattribute vec4 color;\nattribute vec2 textureCoord;\nuniform   mat4 mvpMatrix;\nvarying   vec4 vColor;\nvarying   vec2 vTextureCoord;\n\nvoid main(void){\n    vColor        = color;\n    vTextureCoord = textureCoord;\n    gl_Position   = mvpMatrix * vec4(position, 1.0);\n}\n";
var fragmentShaderSource = "\nprecision mediump float;\n\nuniform sampler2D texture;\nuniform bool      useTexture;\nvarying vec4      vColor;\nvarying vec2      vTextureCoord;\n\nvoid main(void){\n\tif (useTexture) {\n\t\tgl_FragColor = vColor * texture2D(texture, vTextureCoord);\n\t} else {\n\t\tgl_FragColor = vColor;\n\t}\n\t//gl_FragColor  = vColor;\n\tgl_FragColor.rgb *= gl_FragColor.a;\n}\n";
var vertexShader = createShader(vertexShaderSource, gl.VERTEX_SHADER);
var fragmentShader = createShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
var program = createProgram(vertexShader, fragmentShader);
var positionAttribLocation = gl.getAttribLocation(program, 'position');
var colorAttribLocation = gl.getAttribLocation(program, 'color');
var textureCoordAttributeLocation = gl.getAttribLocation(program, 'textureCoord');
var mvpMatrixUniformLocation = gl.getUniformLocation(program, 'mvpMatrix');
var textureUniformLocation = gl.getUniformLocation(program, 'texture');
var useTextureUniformLocation = gl.getUniformLocation(program, 'useTexture');
function getRectPosition(rect, z) {
    return [
        rect.x, rect.y, z,
        rect.x + rect.w, rect.y, z,
        rect.x, rect.y + rect.h, z,
        rect.x + rect.w, rect.y + rect.h, z,
    ];
}
function createFloatArrayBuffer(data) {
    var vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    return vbo;
}
function createInt16ElementBuffer(data) {
    var ibo = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Int16Array(data), gl.STATIC_DRAW);
    return ibo;
}
function setVertex(index, size) {
    gl.enableVertexAttribArray(index);
    gl.vertexAttribPointer(index, size, gl.FLOAT, false, 0, 0);
}
function createTexture(img) {
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    return texture;
}
function drawImage(img, texture, imageIndex, imageRect, destPosition) {
    imageRect = imageRect || { x: 0, y: 0, w: img.width, h: img.height };
    var vertexVbo = createFloatArrayBuffer(destPosition);
    setVertex(positionAttribLocation, 3);
    var vertexColor = [
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1,
    ];
    var colorVbo = createFloatArrayBuffer(vertexColor);
    setVertex(colorAttribLocation, 4);
    var x1 = imageRect.x / img.width;
    var y1 = imageRect.y / img.height;
    var x2 = (imageRect.x + imageRect.w) / img.width;
    var y2 = (imageRect.y + imageRect.h) / img.height;
    var textureCoord = [
        x1, y1,
        x2, y1,
        x1, y2,
        x2, y2,
    ];
    var textureCoordVbo = createFloatArrayBuffer(textureCoord);
    setVertex(textureCoordAttributeLocation, 2);
    var index = [
        0, 1, 2,
        3, 2, 1
    ];
    var indexIbo = createInt16ElementBuffer(index);
    var m = new matIV();
    var mMatrix = m.identity(m.create());
    var vMatrix = m.identity(m.create());
    var pMatrix = m.identity(m.create());
    var mvpMatrix = m.identity(m.create());
    m.lookAt([0, 0, 1], [0, 0, 0], [0, 1, 0], vMatrix);
    m.ortho(0, 1920, 1080, 0, 0.1, 100, pMatrix);
    m.multiply(pMatrix, vMatrix, mvpMatrix);
    m.multiply(mvpMatrix, mMatrix, mvpMatrix);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(textureUniformLocation, imageIndex);
    gl.uniform1i(useTextureUniformLocation, 1);
    gl.uniformMatrix4fv(mvpMatrixUniformLocation, false, mvpMatrix);
    gl.drawElements(gl.TRIANGLES, index.length, gl.UNSIGNED_SHORT, 0);
    if (debug) {
        gl.uniform1i(useTextureUniformLocation, 0);
        gl.drawArrays(gl.LINE_STRIP, 0, 4);
    }
}
console.log('MAX_COMBINED_TEXTURE_IMAGE_UNITS', gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
function loadImage(url) {
    return new Promise(function (resolve, reject) {
        console.log('loadImage', url);
        var img = new Image();
        img.onload = function () {
            console.log('onload', url);
            resolve(img);
        };
        img.src = url;
    });
}
var inputtedText = '';
var mainImage;
var mainImageTexture;
var carved;
var creditImage = generateCreditImage();
var creditImageTexture = createTexture(creditImage);
var carvedTextsImage = document.createElement('canvas');
var carvedTextsImageContext = carvedTextsImage.getContext('2d');
var initialized = false;
function initialize() {
    return __awaiter(this, void 0, void 0, function () {
        var font;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!selectedImageItem) return [3, 3];
                    initialized = false;
                    return [4, loadImage(selectedImageItem.path)];
                case 1:
                    mainImage = _a.sent();
                    mainImageTexture = createTexture(mainImage);
                    carvedTextsImage.width = selectedImageItem.rect.w;
                    carvedTextsImage.height = selectedImageItem.rect.h;
                    font = new FontFaceObserver('lestania');
                    return [4, font.load()];
                case 2:
                    _a.sent();
                    carved = generateCarvedTextCanvas(selectedImageItem.scale / 2, selectedImageItem.alpha);
                    initialized = true;
                    console.log('initialized');
                    _a.label = 3;
                case 3: return [2];
            }
        });
    });
}
function render() {
    console.log('render', initialized, selectedImageItem);
    if (!initialized || !selectedImageItem)
        return;
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.activeTexture(gl.TEXTURE0);
    drawImage(mainImage, mainImageTexture, 0, undefined, getRectPosition({ x: 0, y: 0, w: 1920, h: 1080 }, 0));
    var r = selectedImageItem.rect;
    carvedTextsImageContext.clearRect(0, 0, r.w, r.h);
    drawCarvedTexts(carved, carvedTextsImageContext, inputtedText, 0, 0, r.w, 2);
    var carvedTexture = createTexture(carvedTextsImage);
    gl.activeTexture(gl.TEXTURE1);
    var z = 0.1;
    var position = selectedImageItem.position ? getRectPositionByXY(selectedImageItem.position, 0) : getRectPosition(r, 0);
    drawImage(carvedTextsImage, carvedTexture, 1, undefined, position);
    gl.activeTexture(gl.TEXTURE2);
    drawImage(creditImage, creditImageTexture, 2, undefined, getRectPosition({ x: 1920 - 10 - creditImage.width, y: 1080 - 10 - creditImage.height, w: creditImage.width, h: creditImage.height }, 0));
    gl.flush();
    console.log('flush');
}
function getRectPositionByXY(p, z) {
    return [
        p[0], p[1], z,
        p[2], p[3], z,
        p[4], p[5], z,
        p[6], p[7], z,
    ];
}
initialize().then(function () { return render(); });
var textInput = document.getElementById("text-input");
textInput.oninput = function () {
    inputtedText = textInput.value;
    render();
};
inputtedText = textInput.value;
var downloadButton = document.getElementById("download-button");
downloadButton.onclick = function () {
    var link = document.createElement("a");
    link.href = canvas.toDataURL("image/jpeg", 0.90);
    link.download = "DDONRIP.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        render();
    }
}
