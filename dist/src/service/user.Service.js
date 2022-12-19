"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const data_source_1 = require("../data-source");
const user_1 = require("../model/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middelware/auth");
class UserService {
    constructor() {
        this.checkLogin = async (userLogin) => {
            let user = {
                check: false,
                token: ''
            };
            let userFind = await this.userRepository.query(`select * from user where username = '${userLogin.username}'`);
            let compare = await bcrypt_1.default.compare(userLogin.password, userFind[0].password);
            if (userFind.length === 0) {
                user.check = false;
            }
            if (userFind !== 0 && !compare) {
                user.check = false;
            }
            if (userFind !== 0 && compare) {
                let payload = { username: userFind[0].username };
                let token = await jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                    expiresIn: 36000
                });
                user.token = token;
                user.check = true;
            }
            return user;
        };
        this.checkRegister = async (userRegister) => {
            let userFind = await this.userRepository.query(`select * from user where username = '${userRegister.username}'`);
            let check;
            if (userFind.length !== 0) {
                check = true;
            }
            else {
                userRegister.password = await bcrypt_1.default.hash(userRegister.password, 10);
                check = false;
            }
            return check;
        };
        this.createUser = async (user) => {
            await this.userRepository.save(user);
        };
        this.CheckChangePassword = async (idUser, oldPassword, newPassword) => {
            let userFind = await this.userRepository.query(`select * from user where idUser = ${idUser}`);
            let compare = await bcrypt_1.default.compare(oldPassword, userFind[0].password);
            let check;
            if (!compare) {
                check = false;
            }
            if (compare) {
                newPassword = await bcrypt_1.default.hash(newPassword, 10);
                await this.userRepository.query(`UPDATE user SET password = '${newPassword}' where idUser = ${idUser}`);
                check = true;
            }
            return check;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.Service.js.map