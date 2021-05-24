"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizedImagePath = exports.resizeImage = void 0;
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var resizeImage = function (filename, height, width) {
    return sharp_1.default(path_1.default.resolve("public/images/full/" + filename + ".jpg"))
        .resize({
        width: width,
        height: height,
        fit: sharp_1.default.fit.cover
    })
        .toBuffer();
};
exports.resizeImage = resizeImage;
var resizedImagePath = function (filename, height, width) {
    return "public/images/resized/" + filename + height + "x" + width + ".jpg";
};
exports.resizedImagePath = resizedImagePath;
