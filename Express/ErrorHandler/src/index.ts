import express, { urlencoded } from 'express';

import { connectDb } from './config/db';
import userRoute from './route/userRoute'
import dotenv from "dotenv"
dotenv.config()
const app = express()
app.use(urlencoded)
app.use(express.json())
connectDb();
app.use("/api/user", userRoute)


app.get("/", (req, res) => {
    res.send("its our gome page")
})


app.listen(8080, () => {
    console.log("port connect 8080")
})