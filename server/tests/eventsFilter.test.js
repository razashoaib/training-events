const supertest = require("supertest");
const app = require("../app");

describe("Testing the Training Events API", () => {
  it("tests the default route and check if 'status' property is 'success'", async () => {
    const response = await supertest(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("success");
  });

  it("tests the events filtering by date", async () => {
    const response = await supertest(app).get("/events?date=2019-07-1");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("success");
    expect(response.body).toHaveProperty("events");
    expect(JSON.stringify(response.body)).toMatch(/\"Title\":\"Place 8\"/);
    expect(JSON.stringify(response.body)).toMatch(/\"Title\":\"Place 7\"/);
    expect(JSON.stringify(response.body)).toMatch(/\"City\":\"Melbourne\"/);

    expect(JSON.stringify(response.body)).not.toMatch(/\"Title\":\"Place 1\"/);
  });

  it("tests the events filtering by title", async () => {
    const response = await supertest(app).get("/events?query=place 1");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("success");
    expect(response.body).toHaveProperty("events");
    expect(JSON.stringify(response.body)).toMatch(/\"Title\":\"Place 1\"/);

    expect(JSON.stringify(response.body)).not.toMatch(/\"Title\":\"Place 2\"/);
    expect(JSON.stringify(response.body)).not.toMatch(/\"Title\":\"Place 3\"/);
    expect(JSON.stringify(response.body)).not.toMatch(/\"Title\":\"Place 4\"/);
    expect(JSON.stringify(response.body)).not.toMatch(/\"Title\":\"Place 5\"/);
    expect(JSON.stringify(response.body)).not.toMatch(/\"Title\":\"Place 6\"/);
    expect(JSON.stringify(response.body)).not.toMatch(/\"Title\":\"Place 7\"/);
  });

  it("tests the events filtering by location", async () => {
    const response = await supertest(app).get("/events?location=Victoria");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("success");
    expect(response.body).toHaveProperty("events");
    expect(JSON.stringify(response.body)).toMatch(/\"Title\":\"Place 7\"/);
    expect(JSON.stringify(response.body)).toMatch(/\"City\":\"Melbourne\"/);
    expect(JSON.stringify(response.body)).toMatch(/\"State\":\"Victoria\"/);

    expect(JSON.stringify(response.body)).not.toMatch(
      /\"State\":\"Queensland\"/
    );
  });

  it("tests the events filtering by date and location", async () => {
    const response = await supertest(app).get(
      "/events?date=2019-07-1&location=melbourne"
    );

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("success");
    expect(response.body).toHaveProperty("events");
    expect(JSON.stringify(response.body)).toMatch(/\"Title\":\"Place 7\"/);
    expect(JSON.stringify(response.body)).toMatch(/\"City\":\"Melbourne\"/);

    expect(JSON.stringify(response.body)).not.toMatch(
      /\"City\":\"Gold Coast\"/
    );
    expect(JSON.stringify(response.body)).not.toMatch(/\"City\":\"Brisbane\"/);
    expect(JSON.stringify(response.body)).not.toMatch(/\"City\":\"Cairns\"/);
  });

  it("tests the events filtering by title, date and location", async () => {
    const response = await supertest(app).get(
      "/events?query=place 5&date=2018-06-24&location=Gold Coast"
    );

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("success");
    expect(response.body).toHaveProperty("events");
    expect(JSON.stringify(response.body)).toMatch(/\"Title\":\"Place 5\"/);
    expect(JSON.stringify(response.body)).toMatch(/\"City\":\"Gold Coast\"/);

    expect(JSON.stringify(response.body)).not.toMatch(/\"City\":\"Melbourne\"/);
    expect(JSON.stringify(response.body)).not.toMatch(/\"City\":\"Brisbane\"/);
    expect(JSON.stringify(response.body)).not.toMatch(/\"City\":\"Cairns\"/);
  });

  it("tests unimplemented route to see if it returns 404", async () => {
    const response = await supertest(app).get("/somepath");

    expect(response.status).toBe(404);
  });
});
