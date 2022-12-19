import router from "express";
import questionController from "../controller/question.Controller";

export const questionRouter = router();
questionRouter.get('/', questionController.showQuestions)
questionRouter.post('/', questionController.createQuestion)