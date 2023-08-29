import { RequestHandler } from "express";
import { FormStructure } from "../requestModels";

export const requirement: RequestHandler<
  unknown,
  unknown,
  FormStructure,
  unknown
> = async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "message recieved" });
};
