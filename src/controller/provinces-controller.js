import { create, get, list, update } from "../services/provinces-service.js";

const createProvinceHandler = async (req, res, next) => {
  try {
    const result = await create(req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getProvincesHandler = async (req, res, next) => {
  try {
    const result = await get(req.params.provincesId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getManyProvincesHandler = async (req, res, next) => {
  try {
    const result = await list();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const updateProvincesHandler = async (req, res, next) => {
  try {
    const provincesId = req.params.provincesId;
    const request = req.body;
    request.id = provincesId;
    const result = await update(provincesId, request);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  create: createProvinceHandler,
  get: getProvincesHandler,
  list: getManyProvincesHandler,
  update: updateProvincesHandler,
};
