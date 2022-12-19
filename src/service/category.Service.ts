import {AppDataSource} from "../data-source";
import {Category} from "../model/category";

export class CategoryService {
    private categoryRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.categoryRepository = AppDataSource.getRepository(Category);
        })
    }

    getAll = async () => {
        return await this.categoryRepository.query(`select * from category`)
    }

    createCategory = async (category) => {
        await this.categoryRepository.save(category);
    }
}