import express  from 'express'
import dotenv from 'dotenv'
import sequelize from './config/db.js';


dotenv.config();  

const app = express();

// middleware
app.set('view-engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));



import Router from  "./Route/auth.route.js";
app.use(Router);

  





// app ko listen kraa diaa
app.listen('8001',()=>{
console.log("Server is listening");
})


