"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'casemd5',
    username: 'root',
    password: '12345678',
    synchronize: false,
    entities: ['dist/src/model/*.js']
});
//# sourceMappingURL=data-source.js.map