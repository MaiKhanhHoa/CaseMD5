"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const data_source_1 = require("../data-source");
const category_1 = require("../model/category");
class CategoryService {
    constructor() {
        this.getAll = async () => {
            return await this.categoryRepository.query(`select * from category`);
        };
        this.createCategory = async (category) => {
            await this.categoryRepository.save(category);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.categoryRepository = data_source_1.AppDataSource.getRepository(category_1.Category);
        });
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.Service.js.map