import express from "express";
import provinceRouter from "../route/api.js";

export const web = express();
web.use(express.json());
web.use(provinceRouter);
