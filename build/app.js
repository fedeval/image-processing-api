"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var port = 3000;
app.use('/api', index_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.set('views', path_1.default.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.redirect('/api');
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
exports.default = app;
