"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./api/images"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    var imagesFilenames = fs_1.default
        .readdirSync(path_1.default.resolve('public/images/full'))
        .map(function (filename) { return filename.slice(0, -4); });
    console.log(res.status);
    res.render('index', { filenames: imagesFilenames });
});
routes.use('/images', images_1.default);
exports.default = routes;
