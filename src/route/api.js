import express from "express";
import provincesController from "../controller/provinces-controller.js";

const provinceRouter = new express.Router();

provinceRouter.post("/api/provinces", provincesController.create);
provinceRouter.get("/api/provinces/:provincesId", provincesController.get);
provinceRouter.get("/api/provinces", provincesController.list);

export default provinceRouter;
