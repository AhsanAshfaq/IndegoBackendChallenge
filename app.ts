import app from "./server/server"
import config from "./server/config/config"
import { execute } from "./server/jobs/job"


// Scheduler Job to run on hourly basis
//execute(); 

app.listen(config.app.port, () => {
  console.log(`app listening at port ${config.app.port}`);
});
