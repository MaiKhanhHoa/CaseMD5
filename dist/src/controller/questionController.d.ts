import { Request, Response } from "express";
export declare class QuestionController {
    private questionService;
    constructor();
    showQuestion: (req: Request, res: Response) => Promise<void>;
    createQuestion: (req: Request, res: Response) => Promise<void>;
}
declare const _default: QuestionController;
export default _default;
