import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dalleRoutes from "./routes/dalle.routes";
const app = express();
const PORT = process.env.PORT || 9827;
app.use(cors());
app.use(express.json());


app.use("/lsg/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from OPEN AI" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
