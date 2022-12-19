"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const category_Controller_1 = __importDefault(require("../controller/category.Controller"));
exports.categoryRouter = (0, express_1.default)();
exports.categoryRouter.get('/', category_Controller_1.default.showCategories);
exports.categoryRouter.post('/', category_Controller_1.default.createCategory);
//# sourceMappingURL=categoryRouter.js.map