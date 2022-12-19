"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionController = void 0;
const question_Service_1 = require("../service/question.Service");
class QuestionController {
    constructor() {
        this.showQuestion = async (req, res) => {
            let question = await this.questionService.getAll();
            res.json(question);
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
//# sourceMappingURL=questionController.js.map