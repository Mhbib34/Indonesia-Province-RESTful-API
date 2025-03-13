import { createProvincesValidation } from "../validation/provinces-validation.js";
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
  return prismaClient.provinces.create({
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
};
