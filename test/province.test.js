import supertest from "supertest";
import { createTestProvince, removeTestProvince } from "./test.util.js";
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
});
