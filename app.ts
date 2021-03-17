import express, { Express } from "express"
import cors from "cors"
import router from "./server/routes/index"
import config from "./server/config/config"
import connectDatabase from "./server/db/mongoDb"
import { execute } from "./server/jobs/job"
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./server/swagger/swagger.json"


const app: Express = express()

//Adding cors middleware
app.use(cors())

app.use(express.json());
app.use(express.urlencoded());

//Registering  routes for application
app.use('/api/v1',router);

// Adding swagger configurations
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//connect to MongoDb
connectDatabase(); 

// Scheduler Job to run on hourly basis
execute(); 

app.listen(config.app.port, () => {
  console.log(`app listening at port ${config.app.port}`);
});

export { app };