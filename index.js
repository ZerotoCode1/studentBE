import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import loginRoute from "./routes/login.js";
import dotenv from "dotenv";
import Students from "./routes/student.js";
import Posts from "./routes/post.js";

const PORT = process.env.PORT || 5000;

dotenv.config();

const DB_URL = "mongodb+srv://quangquac1:SO03rHWJpQ7nkFo8@cluster0.olt4h3v.mongodb.net/sinhvien?retryWrites=true&w=majority"

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindandModify: false
  })
  .catch((error) => console.log(error));

app.use("/", loginRoute);

app.use("/", Students);

app.use("/", Posts);

app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
