import { Sequelize } from "sequelize";

// myseqlize connection
    const sequelize = new Sequelize("privee_club_node","root","",{
            host :"localhost",
            dialect:"mysql"
    })

// connection test
sequelize.authenticate()
  .then(() => console.log("Sequelize connected to MySQL"))
  .catch(err => console.log("DB connection failed", err));


export default sequelize;