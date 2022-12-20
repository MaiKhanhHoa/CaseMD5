"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestService = void 0;
const data_source_1 = require("../data-source");
const test_1 = require("../model/test");
class TestService {
    constructor() {
        this.getAll = async () => {
            return await this.testRepository.query(`select *
                                                from test`);
        };
        this.createTest = async (test) => {
            await this.testRepository.save(test);
        };
        this.remove = async (idDelete) => {
            await this.testRepository.delete(idDelete);
        };
        this.updateTest = async (idEdit, newTest) => {
            await this.testRepository.update({ idTest: idEdit }, newTest);
        };
        this.findTest = async (idCFind, nameFind) => {
            let tests;
            if (idCFind && nameFind) {
                tests = await this.testRepository.query(`select * from test where idCategory = ${idCFind} AND nameTest like '%${nameFind}%'`);
            }
            if (idCFind && !nameFind) {
                tests = await this.testRepository.query(`select * from test where idCategory = ${idCFind}`);
            }
            if (!idCFind && nameFind) {
                tests = await this.testRepository.query(`select * from test where nameTest like '%${nameFind}%'`);
            }
            return tests;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.testRepository = data_source_1.AppDataSource.getRepository(test_1.Test);
        });
    }
}
exports.TestService = TestService;
//# sourceMappingURL=test.Service.js.map