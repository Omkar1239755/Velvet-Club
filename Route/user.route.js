import express from 'express';
import upload from '../Middleware/upload.js';
import {profileImage,gender,lookingFor,UserInformation} from "../Controller/UserController.js"
const UserRoute = express.Router();


// image upload
UserRoute.post('/upload-profileImage',upload.single("profile_image"),profileImage);
UserRoute.post('/gender',gender);
UserRoute.post('/looking-for',lookingFor);
UserRoute.post('/user-info',UserInformation);








export default UserRoute;