"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerService = void 0;
const data_source_1 = require("../data-source");
const answer_1 = require("../model/answer");
class AnswerService {
    constructor() {
        this.getAll = async () => {
            return await this.answerRepository.query(`select * from answer`);
        };
        this.createAnswer = async (answer) => {
            await this.answerRepository.save(answer);
        };
        this.remove = async (idDelete) => {
            await this.answerRepository.delete(idDelete);
        };
        this.updateAnswer = async (idEdit, newAnswer) => {
            await this.answerRepository.update({ idAnswer: idEdit }, newAnswer);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.answerRepository = data_source_1.AppDataSource.getRepository(answer_1.Answer);
        });
    }
}
exports.AnswerService = AnswerService;
//# sourceMappingURL=answer.Service.js.map