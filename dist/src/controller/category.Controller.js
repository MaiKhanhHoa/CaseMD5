"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_Service_1 = require("../service/category.Service");
class CategoryController {
    constructor() {
        this.showCategories = async (req, res) => {
            let categories = await this.categoryService.getAll();
            res.json(categories);
        };
        this.createCategory = async (req, res) => {
            await this.categoryService.createCategory(req.body);
            res.json({
                mess: "Tạo Category thành công"
            });
        };
        this.categoryService = new category_Service_1.CategoryService();
    }
}
exports.CategoryController = CategoryController;
exports.default = new CategoryController();
//# sourceMappingURL=category.Controller.js.map