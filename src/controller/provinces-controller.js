import { create } from "../services/provinces-service.js";

const createProvinceHandler = async (req, res, next) => {
  try {
    const result = await create(req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  create: createProvinceHandler,
};
