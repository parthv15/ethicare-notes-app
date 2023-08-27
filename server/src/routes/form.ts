import Router from "express";
import * as formController from "../controllers/form";
import { checkBodyForGenerate } from "../middleware/checkRequest";

const router = Router();

router.post("/requirement", checkBodyForGenerate, formController.requirement);

export default router;
