import {Request, Response} from "express";
import {QuestionService} from "../service/question.Service";

export class QuestionController {
    private questionService: QuestionService;

    constructor() {
        this.questionService = new QuestionService();
    }

    showQuestion = async (req: Request, res: Response) => {
        let question = await this.questionService.getAll()
        res.json(question)
    }

    createQuestion = async (req: Request, res: Response) => {
        await this.questionService.createQuestion(req.body);
        res.json({
            mess: "Tạo Question thành công"
        })
    }
}

export default new QuestionController();