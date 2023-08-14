import Router from "express";
import * as formController from "../controllers/form";

const router = Router();

router.post("/requirement", formController.requirement);

export default router;
