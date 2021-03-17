import { Response, Request } from "express"
// import cronJobs from "../jobs/job"


// const stopJob = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const cron = cronJobs.get(req.params.name);
//         if (cron) {
//             cron.stop();
//             res.send(`Cron job ${req.params.name} stopped`);
//         } else {
//             res.send(`Cron job ${req.params.name} could not be found`);
//         }
//       } catch (error) {
//         throw error
//       }

//   }
// const startJob = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const cron = cronJobs.get(req.params.name);
//         if (cron) {
//             cron.stop();
//             res.send(`Cron job ${req.params.name} stopped`);
//         } else {
//             res.send(`Cron job ${req.params.name} could not be found`);
//         }
//       } catch (error) {
//         throw error
//       }

//   }
//   export { startJob, stopJob}