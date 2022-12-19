import { Request, Response } from "express";
export declare class AnswerController {
    private answerService;
    constructor();
    showAnswers: (req: Request, res: Response) => Promise<void>;
    createAnswer: (req: Request, res: Response) => Promise<void>;
    deleteAnswer: (req: Request, res: Response) => Promise<void>;
    editAnswer: (req: Request, res: Response) => Promise<void>;
}
declare const _default: AnswerController;
export default _default;
