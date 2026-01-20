import express from 'express';
const Router = express.Router();
import {Register} from "../Controller/AuthController.js"


Router.post('/register',Register);



export default Router;





