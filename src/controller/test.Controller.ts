import {Request, Response} from "express";
import {TestService} from "../service/test.Service";

export class TestController {
    private testService: TestService;

    constructor() {
        this.testService = new TestService();
    }

    showTests = async (req: Request, res: Response) => {
        let tests = await this.testService.getAll()
        res.json(tests)
    }

    creatTest = async (req: Request, res: Response) => {
        await this.testService.createTest(req.body);
        res.json({
            mess: "Tạo Test thành công"
        })
    }

    deleteTest = async (req: Request, res: Response) => {
        await this.testService.remove(req.params.id);
        res.json({
            mess: "Xóa Test thành công"
        })
    }

    editTest = async (req: Request, res: Response) => {
        await this.testService.updateTest(req.params.id, req.body);
        res.json({
            mess: "Sửa Test thành công"
        })
    }

    findTest = async (req: Request, res: Response) => {
        let tests = await this.testService.findTest(req.query.id, req.query.name);
        res.json(tests)
    }
}

export default new TestController();