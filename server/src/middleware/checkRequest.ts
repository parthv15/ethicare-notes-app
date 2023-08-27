import { RequestHandler } from "express";
import { Objective } from "../models/objective";
import { Values } from "../models/objective";
import createHttpError from "http-errors";

export const checkBodyForGenerate: RequestHandler<
  unknown,
  unknown,
  Objective,
  unknown
> = (req, res, next) => {
  const body = req.body;
  try {
    deepCheckRequirementAndObjective(body);
    next();
  } catch (error) {
    next(error);
  }
};

function deepCheckRequirementAndObjective(body: Objective) {
  const keys = Object.keys(body) as (keyof typeof body)[];

  // console.log(body);

  keys.forEach((key) => {
    if (key === "lenderName") return;

    if (key in Values) {
      const formValue = body[key];
      const possibleValues = Values[key];

      if (
        typeof formValue === "string" &&
        !possibleValues.includes(formValue)
      ) {
        throw createHttpError(400, `invalid parameters: ${formValue}`);
      } else if (typeof formValue === "object") {
        formValue.forEach((ele) => {
          if (!possibleValues.includes(ele)) {
            throw createHttpError(400, `invalid parameters: ${formValue}`);
          }
        });
      }
    } else {
      throw createHttpError(400, `invalid parameters: ${key}`);
    }
  });
}
