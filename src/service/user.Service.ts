import {AppDataSource} from "../data-source";
import {User} from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {SECRET} from "../middelware/auth";


export class UserService {
    private userRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.userRepository = AppDataSource.getRepository(User);
        })
    }

    checkLogin = async (userLogin) => {
        let user = {
            check: false,
            token: ''
        }
        let userFind = await this.userRepository.query(`select * from user where username = '${userLogin.username}'`);
        let compare = await bcrypt.compare(userLogin.password, userFind[0].password)

        if (userFind.length === 0) {
            user.check = false;
        }
        if (userFind !== 0 && !compare) {
            user.check = false;
        }
        if (userFind !== 0 && compare) {
            let payload = {username: userFind[0].username}
            let token = await jwt.sign(payload, SECRET, {
                expiresIn: 36000
            })
            user.token = token;
            user.check = true;
        }
        return user;
    }

    checkRegister = async (userRegister) => {
        let userFind = await this.userRepository.query(`select * from user where username = '${userRegister.username}'`);
        let check;

        if (userFind.length !== 0) {
            check = true
        } else {
            userRegister.password = await bcrypt.hash(userRegister.password, 10)
            check = false
        }
        return check
    }

    createUser = async (user) => {
        await this.userRepository.save(user);
    }

    CheckChangePassword = async (idUser, oldPassword, newPassword) => {
        let userFind = await this.userRepository.query(`select * from user where idUser = ${idUser}`);
        let compare = await bcrypt.compare(oldPassword, userFind[0].password)
        let check
        if (!compare) {
            check = false
        }
        if (compare) {
            newPassword = await bcrypt.hash(newPassword, 10)
            await this.userRepository.query(`UPDATE user SET password = '${newPassword}' where idUser = ${idUser}`)
            check = true
        }
        return check
    }
}