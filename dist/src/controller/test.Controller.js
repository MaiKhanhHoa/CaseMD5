"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestController = void 0;
const test_Service_1 = require("../service/test.Service");
class TestController {
    constructor() {
        this.showTests = async (req, res) => {
            let tests = await this.testService.getAll();
            res.json(tests);
        };
        this.creatTest = async (req, res) => {
            await this.testService.createTest(req.body);
            res.json({
                mess: "Tạo Test thành công"
            });
        };
        this.deleteTest = async (req, res) => {
            await this.testService.remove(req.params.id);
            res.json({
                mess: "Xóa Test thành công"
            });
        };
        this.editTest = async (req, res) => {
            await this.testService.updateTest(req.params.id, req.body);
            res.json({
                mess: "Sửa Test thành công"
            });
        };
        this.findTest = async (req, res) => {
            let tests = await this.testService.findTest(req.query.id, req.query.name);
            res.json(tests);
        };
        this.testService = new test_Service_1.TestService();
    }
}
exports.TestController = TestController;
exports.default = new TestController();
//# sourceMappingURL=test.Controller.js.map