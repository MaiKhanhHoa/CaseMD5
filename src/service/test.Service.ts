import {AppDataSource} from "../data-source";
import {Test} from "../model/test";

export class TestService {
    private testRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.testRepository = AppDataSource.getRepository(Test);
        })
    }

    getAll = async () => {
        return await this.testRepository.query(`select *
                                                from test`)
    }

    createTest = async (test) => {
        await this.testRepository.save(test);
    }

    remove = async (idDelete) => {
        await this.testRepository.delete(idDelete);
    }

    updateTest = async (idEdit, newTest) => {
        await this.testRepository.update({idTest: idEdit}, newTest)
    }

    findTest = async (idCFind, nameFind) => {
        let tests
        if (idCFind && nameFind) {
            tests = await this.testRepository.query(`select * from test where idCategory = ${idCFind} AND nameTest like '%${nameFind}%'`)
        }
        if (idCFind && !nameFind) {
            tests = await this.testRepository.query(`select * from test where idCategory = ${idCFind}`)
        }
        if (!idCFind && nameFind) {
            tests = await this.testRepository.query(`select * from test where nameTest like '%${nameFind}%'`)
        }
        return tests
    }
}