import supertest from "supertest";
import {
  createTestProvince,
  getTestProvinces,
  removeTestProvince,
} from "./test.util.js";
import { web } from "../src/application/web.js";
import { logger } from "../src/application/logging.js";

describe("POST /api/provinces", function () {
  afterEach(async () => {
    await removeTestProvince();
  });

  it("Should can create new provinces", async () => {
    const result = await supertest(web).post("/api/provinces").send({
      name: "test",
      code: "test",
      capital: "test",
      image: "test",
      island: "test",
      population: 10101,
    });

    logger.info(result.body);
    expect(result.status).toBe(200);
    expect(result.body.data.id).toBeDefined();
    expect(result.body.data.name).toBe("test");
    expect(result.body.data.code).toBe("test");
    expect(result.body.data.capital).toBe("test");
    expect(result.body.data.image).toBe("test");
    expect(result.body.data.island).toBe("test");
    expect(result.body.data.population).toBe(10101);
  });

  it("Should reject if request is invalid", async () => {
    const result = await supertest(web).post("/api/provinces").send({
      name: "",
      code: "test",
      capital: "",
      image: "test",
      island: "",
      population: 10101,
    });

    logger.info(result.body);
    expect(result.status).toBe(400);
  });
});

describe("GET /api/provinces/:provincesId", function () {
  beforeEach(async () => {
    await createTestProvince();
  });

  afterEach(async () => {
    await removeTestProvince();
  });

  it("Should can get provinces", async () => {
    const testProvinces = await getTestProvinces();
    const result = await supertest(web).get(
      `/api/provinces/${testProvinces.id}`
    );

    logger.info(result.body);
    expect(result.status).toBe(200);
    expect(result.body.data.id).toBe(testProvinces.id);
    expect(result.body.data.name).toBe(testProvinces.name);
    expect(result.body.data.code).toBe(testProvinces.code);
    expect(result.body.data.capital).toBe(testProvinces.capital);
    expect(result.body.data.image).toBe(testProvinces.image);
    expect(result.body.data.island).toBe(testProvinces.island);
    expect(result.body.data.population).toBe(testProvinces.population);
  });

  it("Should reject if id is not found", async () => {
    const testProvinces = await getTestProvinces();
    const result = await supertest(web).get(
      `/api/provinces/${testProvinces.id + 1}`
    );

    logger.info(result.body);
    expect(result.status).toBe(404);
  });
});

describe("GET /api/provinces", function () {
  beforeEach(async () => {
    await createTestProvince();
  });

  afterEach(async () => {
    await removeTestProvince();
  });

  it("Should can get all provinces", async () => {
    const result = await supertest(web).get("/api/provinces");

    console.log(result.body);

    expect(result.status).toBe(200);
  });
});
