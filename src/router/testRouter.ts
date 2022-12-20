import router from "express";
import testController from "../controller/test.Controller";

export const testRouter = router();
testRouter.get('/', testController.showTests)
testRouter.post('/', testController.creatTest)
testRouter.delete('/:id', testController.deleteTest)
testRouter.put('/:id', testController.editTest)
testRouter.get('/findTest', testController.findTest)