import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";



const LookingFor = sequelize.define(
"LookingFor",{


    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
  
      looking_for: {
        type: Sequelize.STRING,
        allowNull: true
      }

},
{

    
        tableName: "looking_for",   //  migration wali table ka naam
        timestamps: true     // createdAt & updatedAt auto handle karega
      

}


)


export default LookingFor;