import Router from "express";
import {userRouter} from "./userRouter";
import {questionRouter} from "./questionRouter";

export const router = Router()
router.use('/users',userRouter);
router.use('/questions', questionRouter)