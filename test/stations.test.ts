import mongoose from "mongoose";
import supertest from "supertest";
import Building from "../server/models/building";
import appConfig from "../server/config/config";
import axios from "axios"
import { app } from "../app"


let server:any;
const endpoint = 'http://localhost:8001/api/v1/stations?at=2021-03-16T23:00:02';

describe(`${endpoint}`, () => {
  beforeAll(async (done) => {
    server = app.listen(null, () => {
      done();
    });
  });

  it('GET should return 200', async () => {
    const response = await supertest(app).get(endpoint);
    expect(response.status).toBe(200);
  });

  afterAll(async () => {
    await server.close();
  });
});
// beforeEach((done) => {
//   mongoose.connect(appConfig.testdb.dbUri,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     () => done());
// });

// afterAll((done) => {
//   mongoose.connection.db.dropDatabase(() => {
//     mongoose.connection.close(() => done())
//   });
// });
// process.env.PORT =  "8002";
// describe("GET / ", () => {
//   test("It should respond with an array of students", async () => {
//     const response = await request(app).get("http://localhost:8001/api/v1/stations?at=2021-03-16T23:00:02").then(response => {
//       console.log(response);
//       expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
//       expect(response.status).toBe(200);
//     });
//   });
// });


// test("GET /api/v1/stations", async () => {
//   let post = { kioskId : 3211 , totalDocks : 30, docksAvailable : 21};

//   axios.interceptors.request.use(function (config) {
//     console.log("Do something before request is sent");
//     console.log(config)
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });
//  await axios.get("http://localhost:8001/api/v1/stations?at=2021-03-16T23:00:02").then((response:any) => {
//   console.log("response");
//  console.log(response.body);
//   expect(response.body).toBeTruthy();
    
//     // Check data
//     expect(response.body.kioskId).toBe(post.kioskId);
//     expect(response.body[0].totalDocks).toBe(post.totalDocks);
//     expect(response.body[0].docksAvailable).toBe(post.docksAvailable);
//  });
// });
//   await supertest(app).get("/api/v1/stations?at=2021-03-16T23:00:02")
//     .then((response:any) => {

//       // Check type and length
//       expect(response.body).toBeTruthy();
//       console.log(response.body);
//       // Check data
//       expect(response.body.kioskId).toBe(post.kioskId);
//       expect(response.body[0].totalDocks).toBe(post.totalDocks);
//       expect(response.body[0].docksAvailable).toBe(post.docksAvailable);
//     });
// });

// test("GET /api/posts/:id", async () => {
//   const post = await Post.create({ title: "Post 1", content: "Lorem ipsum" });

//   await supertest(app).get("/api/posts/" + post.id)
//     .expect(200)
//     .then((response) => {
//       expect(response.body._id).toBe(post.id);
//       expect(response.body.title).toBe(post.title);
//       expect(response.body.content).toBe(post.content);
//     });
// });

// test("PATCH /api/posts/:id", async () => {
//   const post = await Post.create({ title: "Post 1", content: "Lorem ipsum" });

//   const data = { title: "New title", content: "dolor sit amet" };

//   await supertest(app).patch("/api/posts/" + post.id)
//     .send(data)
//     .expect(200)
//     .then(async (response) => {
//       // Check the response
//       expect(response.body._id).toBe(post.id);
//       expect(response.body.title).toBe(data.title);
//       expect(response.body.content).toBe(data.content);

//       // Check the data in the database
//       const newPost = await Post.findOne({ _id: response.body._id });
//       expect(newPost).toBeTruthy();
//       expect(newPost.title).toBe(data.title);
//       expect(newPost.content).toBe(data.content);
//     });
// });

// test("DELETE /api/posts/:id", async () => {
//   const post = await Post.create({
//     title: "Post 1",
//     content: "Lorem ipsum",
//   });

//   await supertest(app)
//     .delete("/api/posts/" + post.id)
//     .expect(204)
//     .then(async () => {
//       expect(await Post.findOne({ _id: post.id })).toBeFalsy();
//     });
// });