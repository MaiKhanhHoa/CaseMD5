import router from "express";
import userController from "../controller/user.Controller";

export const userRouter = router();
userRouter.post('/register', userController.register)
userRouter.post('/login', userController.login)
userRouter.post('/changePassword/:id' ,userController.changePassword)
userRouter.get('/' ,userController.showUsers)
userRouter.delete('/:id' ,userController.deleteUser)