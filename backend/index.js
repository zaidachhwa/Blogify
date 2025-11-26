import express, { json, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import blogRoutes from "./routes/blog.route.js";

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

//  Routes

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

(async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
})();
