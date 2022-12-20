import { Request, Response } from "express";
export declare class QuestionController {
    private questionService;
    constructor();
    showQuestions: (req: Request, res: Response) => Promise<void>;
    createQuestion: (req: Request, res: Response) => Promise<void>;
    deleteQuestion: (req: Request, res: Response) => Promise<void>;
    editQuestion: (req: Request, res: Response) => Promise<void>;
}
declare const _default: QuestionController;
export default _default;
