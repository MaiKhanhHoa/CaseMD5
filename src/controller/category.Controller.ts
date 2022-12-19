import {Request, Response} from "express";
import {CategoryService} from "../service/category.Service";

export class CategoryController {
    private categoryService: CategoryService;

    constructor() {
        this.categoryService = new CategoryService();
    }

    showCategories = async (req: Request, res: Response) => {
        let categories = await this.categoryService.getAll()
        res.json(categories)
    }

    createCategory = async (req: Request, res: Response) => {
        await this.categoryService.createCategory(req.body);
        res.json({
            mess: "Tạo Category thành công"
        })
    }
}

export default new CategoryController();