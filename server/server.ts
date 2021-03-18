import connectDatabase from "./db/mongoDb"
import express, { Application, request} from "express"
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger/swagger.json"
import cors from "cors"
import router from "./routes/index"
import { authenticateToken, loginRoute } from "./auth/auth"

const app: Application = express();

//Adding cors middleware
app.use(cors())

app.use(express.json());
app.use(express.urlencoded());

//Registering  routes for application
app.use('/api/v1',authenticateToken, router);

//Ading login route for application
app.use('/login', loginRoute);

// Adding swagger configurations
app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//connect to MongoDb
connectDatabase();

export default app;