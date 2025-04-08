import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./api/contact.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post("/api/contact", contactRoute); // Mount the route under /api/

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;