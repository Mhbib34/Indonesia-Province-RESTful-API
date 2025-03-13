import {
  createProvincesValidation,
  getProvincesValidation,
  updateProvincesValidation,
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

export const update = async (provincesId, request) => {
  provincesId = validate(getProvincesValidation, provincesId);
  const provinces = validate(updateProvincesValidation, request);
  const totalProvincesInDatabase = await prismaClient.provinces.count({
    where: {
      id: provincesId,
    },
  });

  if (totalProvincesInDatabase !== 1) {
    throw new ResponseError(404, "Provinces is not found");
  }

  const result = await prismaClient.provinces.update({
    where: {
      id: provincesId,
    },
    data: {
      name: provinces.name,
      code: provinces.code,
      capital: provinces.capital,
      image: provinces.image,
      island: provinces.island,
      population: provinces.population,
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

  return {
    success: true,
    message: "Province updated successfully",
    data: result,
  };
};
