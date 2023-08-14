import { RequestHandler } from "express";
import { ObjectiveAndRequirement } from "../models/requirement";

export const requirement: RequestHandler<
  unknown,
  unknown,
  ObjectiveAndRequirement,
  unknown
> = async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "message recieved" });
};
