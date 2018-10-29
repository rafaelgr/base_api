"use strict";
const Request = require('request');

describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require('../app');
    });

    afterAll(() => {
        server.close();
    });

    describe("GET /", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/", (err, res, body) => {
                data.status = res.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
    });
});