"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionService = void 0;
const data_source_1 = require("../data-source");
const question_1 = require("../model/question");
class QuestionService {
    constructor() {
        this.getAll = async () => {
            return await this.questionRepository.query(`select * from question`);
        };
        this.createQuestion = async (question) => {
            await this.questionRepository.save(question);
        };
        this.remove = async (idDelete) => {
            await this.questionRepository.delete(idDelete);
        };
        this.updateQuestion = async (idEdit, newQuestion) => {
            await this.questionRepository.update({ idQuestion: idEdit }, newQuestion);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.questionRepository = data_source_1.AppDataSource.getRepository(question_1.Question);
        });
    }
}
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.Service.js.map