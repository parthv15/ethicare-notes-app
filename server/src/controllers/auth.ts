import { RequestHandler } from "express";
import UserModel from "../models/user";
import bcrypt from "bcrypt";
import createHttpError from "http-errors";

interface loginBody {
  email?: string;
  password?: string;
}

interface userSuccessfulResponse {
  email: string;
  name: string;
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

    const successfulLoginResponse: userSuccessfulResponse = {
      email,
      name: user.name,
    };

    res.status(201).json(successfulLoginResponse);
  } catch (error) {
    next(error);
  }
};

interface SignUpBody {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export const signUp: RequestHandler<
  unknown,
  unknown,
  SignUpBody,
  unknown
> = async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    if (!name || !email || !password || !confirmPassword) {
      throw createHttpError(400, "Parameters Missing");
    }

    if (password !== confirmPassword) {
      throw createHttpError(401, "Password do not match");
    }

    const existingEmail = await UserModel.findOne({ email }).exec();

    if (existingEmail) {
      throw createHttpError(409, "an account with this email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const signUpSuccessfulResponse: userSuccessfulResponse = { name, email };

    res.status(201).json(signUpSuccessfulResponse);
  } catch (error) {
    next(error);
  }
};
