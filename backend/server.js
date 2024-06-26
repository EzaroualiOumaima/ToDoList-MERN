import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import process from "process"
import router from "./routes/todos.routes.js"
import cors from "cors"
import {router as authPath} from "./routes/auth.js"

dotenv.config();
const app = express();
const port = 4000 ;

const {MONGODB_URL} = process.env;

mongoose.connect(MONGODB_URL)
        .then(() => console.log("Database connected"))
        .catch(err => console.log(err))


app.use(express.json());
app.use(cors())
app.use("/api" , router);
app.use("/api/auth",authPath);





app.get("/" , (req , res)=> {
    res.send("hello")
})
app.listen(port , () => {
    console.log("server started");
})

