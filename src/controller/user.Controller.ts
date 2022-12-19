import {Request, Response} from "express";
import {UserService} from "../service/user.Service";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    login = async (req: Request, res: Response) => {
        let user = await this.userService.checkLogin(req.body);
        if (user.check) {
            res.json(user)
        } else {
            res.json({
                mess: 'Sai tên tài khoản hoặc mật khẩu',
            })
        }
    }

    register = async (req: Request, res: Response) => {
        let checkRegister = await this.userService.checkRegister(req.body);
        console.log(checkRegister)
        if (checkRegister) {
            res.json({
                mess: "Tài khoản đã tồn tại"
            })
        } else {
            await this.userService.createUser(req.body);
            res.json({
                mess: "Tạo tài khoản thành công"
            })
        }
    }

    changePassword = async (req: Request, res: Response) => {
        let checkChangePassword = await this.userService.CheckChangePassword(req.params.id, req.body.oldPassword, req.body.newPassword)
        if (!checkChangePassword) {
            res.json({
                mess: "Nhập mật khẩu cũ không đúng"
            })
        } else {
            res.json({
                mess: "Đổi mật khẩu thành công"
            })
        }
    }
}

export default new UserController();