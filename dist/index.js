"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./src/router/router");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const data_source_1 = require("./src/data-source");
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set("views", "./src/views");
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use((0, express_fileupload_1.default)({
    createParentPath: true
}));
data_source_1.AppDataSource.initialize().then(() => {
    console.log('Connected Database ');
});
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('', router_1.router);
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server is running');
});
//# sourceMappingURL=index.js.map