import router from "express";
import answerController from "../controller/answer.Controller";

export const answerRouter = router();
answerRouter.get('/', answerController.showAnswers)
answerRouter.post('/', answerController.createAnswer)
answerRouter.delete('/:id', answerController.deleteAnswer)
answerRouter.put('/:id', answerController.editAnswer)