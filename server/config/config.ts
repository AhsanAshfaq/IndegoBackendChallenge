const config = {
  app: {
    port: process.env.NODE_ENV == "test" ? "8004" : "8001",
    bikeServiceUrl: "https://kiosks.bicycletransit.workers.dev/phl",
    jobInterval: "@hourly",
    weatherApiUrl: "http://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=56de7c0e3a44ebf0fed3c7797e5794e7",
    AppSecret: "thisismysecret",
    username: "ahsan",
    password: "admin"
  },
  db: {
    dbUri : "mongodb+srv://ahsan:admin@bikeservicecluster.jswel.mongodb.net/bikeService?retryWrites=true&w=majority",
    name: 'bikeService'
  },
  testdb :{
    dbUri : "mongodb+srv://ahsan:admin@bikeservicecluster.jswel.mongodb.net/testbikeService?retryWrites=true&w=majority",
    name: 'testbikeService'
  }
};
export default config;
   