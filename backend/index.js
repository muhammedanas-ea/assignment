import express from "express";
import mongoose from "mongoose";
import env from "dotenv";
import cors from 'cors'
import Routes from "./routes/Routes.js";

const app = express();
env.config();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin:process.env.CLIENT_URL,
    methods: ["GET","PUT"],
    credentials: true,
  })
);

app.use("/", Routes);

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
