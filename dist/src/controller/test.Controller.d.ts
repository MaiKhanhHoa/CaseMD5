import { Request, Response } from "express";
export declare class TestController {
    private testService;
    constructor();
    showTests: (req: Request, res: Response) => Promise<void>;
    creatTest: (req: Request, res: Response) => Promise<void>;
    deleteTest: (req: Request, res: Response) => Promise<void>;
    editTest: (req: Request, res: Response) => Promise<void>;
    findTest: (req: Request, res: Response) => Promise<void>;
}
declare const _default: TestController;
export default _default;
