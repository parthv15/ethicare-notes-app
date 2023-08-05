import { RequestHandler } from "express";

export const login: RequestHandler = (req, res) => {
  res.status(200).json(req.body);
};
