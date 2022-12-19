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
            res.json({
                mess: "Tạo Question thành công"
            });
        };
        this.questionService = new question_Service_1.QuestionService();
    }
}
exports.QuestionController = QuestionController;
exports.default = new QuestionController();
//# sourceMappingURL=question.Controller.js.map