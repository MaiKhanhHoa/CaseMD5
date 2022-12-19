"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.answerRouter = void 0;
const express_1 = __importDefault(require("express"));
const answer_Controller_1 = __importDefault(require("../controller/answer.Controller"));
exports.answerRouter = (0, express_1.default)();
exports.answerRouter.get('/', answer_Controller_1.default.showAnswers);
exports.answerRouter.post('/', answer_Controller_1.default.createAnswer);
exports.answerRouter.delete('/:id', answer_Controller_1.default.deleteAnswer);
exports.answerRouter.put('/:id', answer_Controller_1.default.editAnswer);
//# sourceMappingURL=answerRouter.js.map