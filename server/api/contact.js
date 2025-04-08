
import serverless from "serverless-http";
import app from "../expressApp.js";

// Export the serverless handler
export default serverless(app);