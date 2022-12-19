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
        return await this.questionRepository.query(`select * from question`)
    }

    createQuestion = async (question) => {
        await this.questionRepository.save(question);
    }

}