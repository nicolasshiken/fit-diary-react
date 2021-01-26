import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import sessionRoutes from "./routes/sessions.js";
import mealRoutes from "./routes/meals.js";
import userRoutes from "./routes/auth.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/sessions", sessionRoutes);
app.use("/meals", mealRoutes);
app.use("/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello to FIT Diary API");
});

const PORT = process.env.PORT;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => app.listen(PORT),
    () => console.log("Server running in port " + PORT)
  )
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
