import app from "../app";
// @ts-ignore
import * as request from "supertest";

describe("GET / - a simple api endpoint", () => {
    it("Hello API Request", async () => {
        const result = await request(app).get("/");
        expect(result.text).toEqual("hello");
        expect(result.statusCode).toEqual(200);
    });
});
