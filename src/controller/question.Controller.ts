import {Request, Response} from "express";
import {QuestionService} from "../service/question.Service";

export class QuestionController {
    private questionService: QuestionService;

    constructor() {
        this.questionService = new QuestionService();
    }

    showQuestions = async (req: Request, res: Response) => {
        let questions = await this.questionService.getAll()
        res.json(questions)
    }

    createQuestion = async (req: Request, res: Response) => {
        await this.questionService.createQuestion(req.body);
        res.json({
            mess: "Tạo Question thành công"
        })
    }
}

export default new QuestionController();