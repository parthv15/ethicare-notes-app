import { RequestHandler } from "express";
import { Objective } from "../models/objective";

export const requirement: RequestHandler<
  unknown,
  unknown,
  Objective,
  unknown
> = async (req, res) => {
  res.send(req.body);
};
