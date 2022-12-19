"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerController = void 0;
const answer_Service_1 = require("../service/answer.Service");
class AnswerController {
    constructor() {
        this.showAnswers = async (req, res) => {
            let answers = await this.answerService.getAll();
            res.json(answers);
        };
        this.createAnswer = async (req, res) => {
            await this.answerService.createAnswer(req.body);
            res.json({
                mess: "Tạo Answer thành công"
            });
        };
        this.deleteAnswer = async (req, res) => {
            await this.answerService.remove(req.params.id);
            res.json({
                mess: "Xóa Answer thành công"
            });
        };
        this.editAnswer = async (req, res) => {
            await this.answerService.updateAnswer(req.params.id, req.body);
            res.json({
                mess: "Sửa Answer thành công"
            });
        };
        this.answerService = new answer_Service_1.AnswerService();
    }
}
exports.AnswerController = AnswerController;
exports.default = new AnswerController();
//# sourceMappingURL=answer.Controller.js.map