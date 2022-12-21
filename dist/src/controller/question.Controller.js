"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionController = void 0;
const question_Service_1 = require("../service/question.Service");
class QuestionController {
    constructor() {
        this.showQuestions = async (req, res) => {
            let questions = await this.questionService.getAll();
            res.json(questions);
        };
        this.createQuestion = async (req, res) => {
            await this.questionService.createQuestion(req.body);
            await this.questionService.setPointQuestion(req.body.idTest);
            res.json({
                mess: "Tạo Question thành công"
            });
        };
        this.deleteQuestion = async (req, res) => {
            await this.questionService.remove(req.params.id);
            res.json({
                mess: "Xóa Question thành công"
            });
        };
        this.editQuestion = async (req, res) => {
            await this.questionService.updateQuestion(req.params.id, req.body);
            res.json({
                mess: "Sửa Question thành công"
            });
        };
        this.questionService = new question_Service_1.QuestionService();
    }
}
exports.QuestionController = QuestionController;
exports.default = new QuestionController();
//# sourceMappingURL=question.Controller.js.map