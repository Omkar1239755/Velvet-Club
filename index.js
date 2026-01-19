import express  from 'express'
import dotenv from 'dotenv'
dotenv.config();  

// database connection
import sequelize from "./config/db.js";
import User from "./Model/User.js";

const app = express();


sequelize.sync({ alter: true })
  .then(() => console.log("Database synced with changes"))
  .catch(err => console.log(err));

  
// middleware
app.set('view-engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));





// app ko listen kraa diaa
app.listen('8001',()=>{
console.log("Server is listening");
})


