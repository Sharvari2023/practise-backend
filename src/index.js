import dotenv from 'dotenv'
import connectDB from './db/index.js';

connectDB();





















/*import mongoose from 'mongoose';
import express from 'express'
import dotenv from 'dotenv';
import { DB_NAME } from './constants.js';

dotenv.config();
const app = express()

console.log("connection string", process.env.MONGO_URI)
    //try catch 
    //async await
    //using iifes
    ; (async () => {
        try {
            await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
            app.on("error", (error) => {
                console.log("ERR:", error);
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`app listening on port ${process.env.PORT}`);
            })
        } catch (error) {
            console.log("ERROR:", error)
            throw error
        }
    })()*/


