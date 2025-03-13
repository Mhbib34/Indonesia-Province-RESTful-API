import {
  createProvincesValidation,
  getProvincesValidation,
} from "../validation/provinces-validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import validate from "../validation/validation.js";

export const create = async (request) => {
  const province = validate(createProvincesValidation, request);
  const countProvince = await prismaClient.provinces.count({
    where: {
      name: province.name,
    },
  });
  if (countProvince === 1) {
    throw new ResponseError(400, "Province Name Already Exist");
  }
  const newProvince = await prismaClient.provinces.create({
    data: province,
    select: {
      id: true,
      name: true,
      code: true,
      capital: true,
      image: true,
      island: true,
      population: true,
    },
  });

  return {
    success: true,
    message: "Province added successfully",
    data: newProvince,
  };
};

export const get = async (provincesId) => {
  provincesId = validate(getProvincesValidation, provincesId);
  const province = await prismaClient.provinces.findFirst({
    where: {
      id: provincesId,
    },
    select: {
      id: true,
      name: true,
      code: true,
      capital: true,
      image: true,
      island: true,
      population: true,
    },
  });
  if (!province) {
    throw new ResponseError(404, "Provinces Not Found");
  }
  return {
    success: true,
    data: province,
  };
};

export const list = async () => {
  const province = await prismaClient.provinces.findMany({
    select: {
      id: true,
      name: true,
      code: true,
      capital: true,
      image: true,
    },
  });
  if (province.length === 0) {
    throw new ResponseError(404, "Provinces Not Found");
  }
  return {
    success: true,
    data: province,
  };
};
