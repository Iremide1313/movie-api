import 'dotenv/config'
import express, { Router, urlencoded } from "express";
import { connectDB } from "./db.js";
import {movieRouter} from "./routes/movies.js";
import {reviewRouter} from "./routes/reviews.js";

const app = express();


app.use (express.json());

app.use (express.urlencoded({ extended: false}));

connectDB();

app.use("/api/v1/movies", movieRouter);
app.use("/api/v1", reviewRouter);

const port = process.env.PORT;
console.log(port);


app.listen(port, () => console.log(`server is running on port ${port}`) );


