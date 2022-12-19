import express from 'express';
import {router} from "./src/router/router";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
app.set('view engine', 'ejs');
app.set("views", "./src/views");
app.use(express.static('public'));
app.use(express.json());
app.use(fileUpload({
    createParentPath: true
}));
app.use(cors())
app.use(bodyParser.json());
app.use('', router);
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server is running');
})