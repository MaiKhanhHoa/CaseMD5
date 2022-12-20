"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRouter = void 0;
const express_1 = __importDefault(require("express"));
const test_Controller_1 = __importDefault(require("../controller/test.Controller"));
exports.testRouter = (0, express_1.default)();
exports.testRouter.get('/', test_Controller_1.default.showTests);
exports.testRouter.post('/', test_Controller_1.default.creatTest);
exports.testRouter.delete('/:id', test_Controller_1.default.deleteTest);
exports.testRouter.put('/:id', test_Controller_1.default.editTest);
exports.testRouter.get('/findTest', test_Controller_1.default.findTest);
//# sourceMappingURL=testRouter.js.map