import app from "../expressApp.js";
import serverless from "serverless-http";

export default serverless(app);