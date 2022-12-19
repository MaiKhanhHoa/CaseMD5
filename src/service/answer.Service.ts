import {AppDataSource} from "../data-source";
import {Answer} from "../model/answer";

export class AnswerService {
    private answerRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.answerRepository = AppDataSource.getRepository(Answer);
        })
    }

    getAll = async () => {
        return await this.answerRepository.query(`select * from answer`)
    }

    createAnswer = async (answer) => {
        await this.answerRepository.save(answer);
    }

    remove = async (idDelete) => {
        await this.answerRepository.delete(idDelete);
    }

    updateAnswer = async (idEdit, newAnswer) => {
        await this.answerRepository.update({idAnswer: idEdit}, newAnswer)
    }
}