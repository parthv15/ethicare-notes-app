import { RequestHandler } from "express";
import UserModel from "../models/user";
import bcrypt from "bcrypt";
import createHttpError from "http-errors";

interface loginBody {
  email?: string;
  password?: string;
}

export const login: RequestHandler<
  unknown,
  unknown,
  loginBody,
  unknown
> = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw createHttpError(400, "Parameters missing");
    }

    const user = await UserModel.findOne({ email })
      .select("+name +password")
      .exec();
    if (!user) {
      throw createHttpError(401, "Invalid Credentials");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw createHttpError(401, "Invalid Credentials");
    }

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
