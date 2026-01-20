import User from '../Model/User.js';
import Joi from 'joi';
import bcrypt from 'bcryptjs';

export const Register = async (req, res) => {
  try {
    const {
    first_name,
      last_name,
      profile_name,
      email,
      mobile_number,
      password,
    } = req.body;

    // ✅ Joi validation
    const schema = Joi.object({
      first_name: Joi.string().trim().required(),
      last_name: Joi.string().trim().required(),
      profile_name: Joi.string().optional(),
      email: Joi.string().email().required(),
      mobile_number: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required(),
      password: Joi.string().min(8).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: false,
        message: error.details[0].message,
      });
    }

    // ✅ check duplicate email
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({
        status: false,
        message: 'Email already registered',
      });
    }

    // ✅ hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ create user
    const user = await User.create({
      first_name,
      last_name,
      profile_name,
      email,
      mobile_number,
      password: hashedPassword,
    });

    return res.status(201).json({
      status: true,
      data: user,
      message: 'User created successfully',
    });

  } catch (e) {
    console.error(e);
    return res.status(500).json({
      status: false,
      message: 'Internal server error',
    });
  }
};
