import express from 'express';
import upload from '../Middleware/upload.js';
import {profileImage,gender} from "../Controller/UserController.js"
const UserRoute = express.Router();



UserRoute.post('/upload-profileImage',upload.single("profile_image"),profileImage);

UserRoute.post('/gender',gender);







export default UserRoute;