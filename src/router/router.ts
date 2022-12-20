import Router from "express";
import {userRouter} from "./userRouter";
import {questionRouter} from "./questionRouter";
import {categoryRouter} from "./categoryRouter";
import {answerRouter} from "./answerRouter";
import {testRouter} from "./testRouter";

export const router = Router()
router.use('/users',userRouter);
router.use('/questions', questionRouter);
router.use('/categories', categoryRouter);
router.use('/answers', answerRouter);
router.use('/tests', testRouter)