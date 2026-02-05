import Joi from 'joi';
import User from "../Model/User.js";
import { response } from 'express';

export const profileImage = async (req, res) => {
  try {
    // 1. Validate only id
    const schema = Joi.object({
      id: Joi.number().required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const userId = req.body.id;

    // 2. Find user
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // 3. Check file
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Profile image is required"
      });
    }

    // 4. Get image path from multer
    const imagePath = req.file.path;

    // 5. Save in DB
    user.profile_image = imagePath;
    await user.save();   

    res.json({
      success: true,
      image: imagePath,
      message: "Profile image uploaded successfully"
    });

    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }

};


// gender ka function 
export const gender = async(req,res)=>{
try{
    //validation
    const schema = Joi.object({
        id : Joi.string().required(),    
        gender : Joi.string().required()  
    })

    const {error} = schema.validate(req.body) ;
  
      if (error) {
          return res.status(400).json({ error: error.details[0].message });
      }

     const user =  await User.findByPk(req.body.id);
     const gender =  req.body.gender;
  // console.log(gender);
     user.gender = gender;
     await user.save();   
     
    res.json({
      success: true,
      code:200,
      data: user,
      message: "gender data  updated succesfully"
    });
    }catch(e){
    console.error(e);
    res.status(500).json({ error: err.message });
    } 

  
}

// looking for
export const lookingFor = async(req,res)=>{
try{
      const schema = Joi.object({
          id : Joi.string().required(),    
          lookingFor_id : Joi.string().required(),    
      })


      const {error} = schema.validate(req.body);

      if(error){
        return res.status(400).json({ error: error.details[0].message });

      }
      const user = await User.findByPk(req.body.id);
      user.looking_for = req.body.lookingFor_id ;
      await user.save();
      
      res.json({
        success: true,
        code:200,
        data: user,
        message: "looking_for data updated succesfully"
      });
      }catch(err){
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}


export const UserInformation = async (req, res) => {
  try {

    const schema = Joi.object({
          id: Joi.string().required(),
          height: Joi.string().required(),
          weight: Joi.string().required(),
          body_type: Joi.string().required(),
          hair_color: Joi.string().required(),
          eye_color: Joi.string().required(),
          nationality: Joi.string().required(),
          region: Joi.string().required(),
          city: Joi.string().required(),
          sexuall_orientation: Joi.string().required(),
          education: Joi.string().required(),
          field_of_work: Joi.string().required(),
          relation_Status: Joi.string().required(),
          smoking: Joi.string().required(),
          drinking: Joi.string().required(),
          tatto: Joi.string().required(),
          about_me: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const user = await User.findByPk(req.body.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // OBJECT ME OBJECT KO DLNA
    Object.assign(user, req.body);
    await user.save();
    
    return res.status(200).json({
      message: "Data inserted successfully",
      data: user,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};







    





  
      


