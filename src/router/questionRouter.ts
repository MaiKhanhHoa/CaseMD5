import router from "express";
import questionController from "../controller/questionController";

export const questionRouter = router();
questionRouter.get('/', questionController.showQuestion)
questionRouter.post('/', questionController.createQuestion)