import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    profile_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    mobile_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profile_image:{
      type:DataTypes.STRING,
      allowNull: false  
    },
    gender:{
    type:DataTypes.STRING,
    allowNull:false
    },
    dob:{
      type:DataTypes.STRING,
      allowNull:false
    },
    height:{
      type:DataTypes.STRING,
      allowNull:false
    }, 
    weight:{
      type:DataTypes.STRING,
      allowNull:false
    }, 
    
    body_type:{
      type:DataTypes.STRING,
      allowNull:false
    }, 
    
    eye_color:{
      type:DataTypes.STRING,
      allowNull:false
    }, 
    
    nationality:{
      type:DataTypes.STRING,
      allowNull:false
    }, 
    
    region:{
      type:DataTypes.STRING,
      allowNull:false
    },

    city:{
      type:DataTypes.STRING,
      allowNull:false
    },

    sexuall_orientation:{
      type:DataTypes.STRING,
      allowNull:false
    },

    education:{
      type:DataTypes.STRING,
      allowNull:false
    },

    relation_Status:{
      type:DataTypes.STRING,
      allowNull:false
    },


    smoking:{
      type:DataTypes.STRING,
      allowNull:false
    },

    drinking:{
      type:DataTypes.STRING,
      allowNull:false
    },

    tatto:{
      type:DataTypes.STRING,
      allowNull:false
    },

    about_me:{
      type:DataTypes.STRING,
      allowNull:false
    },

    otp:{
      type:DataTypes.STRING,
      allowNull:false
    },

    otp_expires_at:{
      type:DataTypes.STRING,
      allowNull:false
    },
    
    about_me:{
      type:DataTypes.STRING,
      allowNull:false
    },

    otp:{
      type:DataTypes.DATE,
      allowNull:false

    },

    otp_expire_at:{

      type:DataTypes.DATE,
      allowNull:false
    }


},
  {
    tableName: "users",   //  migration wali table ka naam
    timestamps: true     // createdAt & updatedAt auto handle karega
  }
);

export default User;
