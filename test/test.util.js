import { prismaClient } from "../src/application/database.js";

export const removeTestProvince = async () => {
  await prismaClient.provinces.deleteMany({
    where: {
      name: "test",
    },
  });
};

export const createTestProvince = async () => {
  await prismaClient.provinces.create({
    data: {
      name: "test",
      code: "test",
      capital: "test",
      image: "test",
      island: "test",
      population: 10101,
    },
  });
};

export const getTestProvinces = async () => {
  return prismaClient.provinces.findFirst({
    where: {
      name: "test",
    },
  });
};
