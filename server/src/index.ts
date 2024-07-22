// Reds4343

import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();

//make env var
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors);

//make env var
const mongoURI: string =
  "mongodb+srv://dilchok15:Reds4343@personalexpensetracker.jjiwzc3.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log("Failed to connect to MongoDB!", err));

app.use("/financial-record", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
