import { DataTypes } from "sequelize";
import sequelize  from "../config/db.js"

const User = sequelize.define("users", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
  
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
  
      mobile_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
  
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      status:{
       type:DataTypes.STRING,
       allowNull: false,
      }

    }
      ,{

        timestamps: true 

      })    




export default User;