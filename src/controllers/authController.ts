import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import userModel from "../model/userModel";
import sleepModel from "../model/sleepModel";
import { formatErrorResponse, formatResponse } from "../utils/formatter";

export const register = async (req: Request, res: Response) => {
  const { nickName, password } = req.body;

  try {
    // Check if the user exists
    const existingUser = await userModel.findOne({ nickname:nickName });

    if (existingUser) {
      return res.status(400).json(formatErrorResponse( "Nickname already exists" ));
    }

    // Hash password and create user
    const password_hash = await bcrypt.hash(password, 10);
    const newUser = new userModel({ nickname:nickName,password: password_hash });
    await newUser.save();
    await sleepModel.create({userId:newUser.id,stepNo:0});
    res
      .status(201)
      .json(formatResponse({ user_id: newUser._id }, "User registered successfully"));
  } catch (error:any) {
    res.status(500).json(formatErrorResponse( error.message ));
  }
};
