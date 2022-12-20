"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const userRouter_1 = require("./userRouter");
const questionRouter_1 = require("./questionRouter");
const categoryRouter_1 = require("./categoryRouter");
const answerRouter_1 = require("./answerRouter");
const testRouter_1 = require("./testRouter");
exports.router = (0, express_1.default)();
exports.router.use('/users', userRouter_1.userRouter);
exports.router.use('/questions', questionRouter_1.questionRouter);
exports.router.use('/categories', categoryRouter_1.categoryRouter);
exports.router.use('/answers', answerRouter_1.answerRouter);
exports.router.use('/tests', testRouter_1.testRouter);
//# sourceMappingURL=router.js.map