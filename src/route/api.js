import express from "express";
import provincesController from "../controller/provinces-controller.js";

const provinceRouter = new express.Router();

provinceRouter.post("/api/provinces", provincesController.create);

export default provinceRouter;
