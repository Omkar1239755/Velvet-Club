import express from 'express';
import upload from '../Middleware/upload.js';
import {profileImage} from "../Controller/UserController.js"
const UserRoute = express.Router();



UserRoute.post('/upload-profileImage',upload.single("profile_image"),profileImage);









export default UserRoute;