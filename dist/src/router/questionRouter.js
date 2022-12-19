"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionRouter = void 0;
const express_1 = __importDefault(require("express"));
const questionController_1 = __importDefault(require("../controller/questionController"));
exports.questionRouter = (0, express_1.default)();
exports.questionRouter.get('/', questionController_1.default.showQuestion);
exports.questionRouter.post('/', questionController_1.default.createQuestion);
//# sourceMappingURL=questionRouter.js.map