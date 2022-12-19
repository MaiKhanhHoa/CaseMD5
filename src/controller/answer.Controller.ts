import {Request, Response} from "express";
import {AnswerService} from "../service/answer.Service";

export class AnswerController {
    private answerService: AnswerService;

    constructor() {
        this.answerService = new AnswerService();
    }

    showAnswers = async (req: Request, res: Response) => {
        let answers = await this.answerService.getAll()
        res.json(answers)
    }

    createAnswer = async (req: Request, res: Response) => {
        await this.answerService.createAnswer(req.body);
        res.json({
            mess: "Tạo Answer thành công"
        })
    }

    deleteAnswer = async (req: Request, res: Response) => {
        await this.answerService.remove(req.params.id);
        res.json({
            mess: "Xóa Answer thành công"
        })
    }

    editAnswer = async (req: Request, res: Response) => {
        await this.answerService.updateAnswer(req.params.id, req.body);
        res.json({
            mess: "Sửa Answer thành công"
        })
    }
}

export default new AnswerController();