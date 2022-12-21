import {AppDataSource} from "../data-source";
import {Question} from "../model/question";

export class QuestionService {
    private questionRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.questionRepository = AppDataSource.getRepository(Question);
        })
    }

    getAll = async () => {
        return await this.questionRepository.query(`select *
                                                    from question`)
    }

    createQuestion = async (question) => {
        await this.questionRepository.save(question);
    }

    remove = async (idDelete) => {
        await this.questionRepository.delete(idDelete);
    }

    updateQuestion = async (idEdit, newQuestion) => {
        await this.questionRepository.update({idQuestion: idEdit}, newQuestion)
    }

    setPointQuestion = async (idTest) => {
        const count = await this.questionRepository.query(`select COUNT(idTest) as quantityQuestion
                                                           from question
                                                           where idTest = ${idTest}`)
        await this.questionRepository.query(`UPDATE question
                                             SET pointQuestion = 100 / ${count[0].quantityQuestion}
                                             where idTest = ${idTest}`)
    }
}