import Joi from 'joi';
import User from "../Model/User.js";

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
