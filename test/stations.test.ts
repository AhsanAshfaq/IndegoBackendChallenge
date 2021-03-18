import request from "supertest"
import app from "../server/server"
import http from "http";
import config from "../server/config/config"

let server: http.Server;

beforeAll(async () => {
  server = app.listen(config.app.port)
});

describe("Testing Indego Bike Ride Stations API", () => {

  it("Get /Station", async (done) => {
    request
      .agent(app)
      .get('/api/v1/stations/3211?at=2021-03-16T23:00:02')
      .set('Accept', 'application/json')
      .then(res => {
        expect(res.body !== undefined).toEqual(true);
        var responseObject = JSON.parse(JSON.stringify(res.body))
        expect(responseObject.hasOwnProperty('station')).toEqual(true);
        done();
      }).catch(err => {
        throw err;
      });
  });
  
  it("Check if station object has weather", async (done) => {
    request
      .agent(app)
      .get('/api/v1/stations/3211?at=2021-03-16T23:00:02')
      .set('Accept', 'application/json')
      .then(res => {
        expect(res.body !== undefined).toEqual(true);
        var responseObject = JSON.parse(JSON.stringify(res.body))
        expect(responseObject.hasOwnProperty('weather')).toEqual(true);
        done();
      }).catch(err => {
        throw err;
      });
  });

  it("Get /Stations", async (done) => {
    request
      .agent(app)
      .get('/api/v1/stations?at=2021-03-16T23:00:02')
      .set('Accept', 'application/json')
      .then(res => {
        expect(res.body !== undefined).toEqual(true);
        var responseObject = JSON.parse(JSON.stringify(res.body))
        expect(responseObject.hasOwnProperty('stations')).toEqual(true);
        expect(responseObject.stations.length).toBeGreaterThan(0);
        done();
      }).catch(err => {
        throw err;
      });
  });
});

afterAll(async () => {
  server.close();
});
