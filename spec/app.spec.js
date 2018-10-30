"use strict";
const Request = require('request');
const Dotenv = require('dotenv');
const Pack = require('../package.json')

describe("Configuration", () => {
    beforeAll(() => {
        Dotenv.config();
    });
    it("BASE_PORT", () => {
        expect(process.env.BASE_PORT).not.toBeUndefined();
    });
    it("BASE_WINSTON_FILELEVEL", () => {
        expect(process.env.BASE_WINSTON_FILELEVEL).not.toBeUndefined();
    });
    it("BASE_WINSTON_CONSOLELEVEL", () => {
        expect(process.env.BASE_WINSTON_CONSOLELEVEL).not.toBeUndefined();
    });
});


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