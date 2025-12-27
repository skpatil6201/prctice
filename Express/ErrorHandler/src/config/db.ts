

import mongoose from "mongoose";
export const connectDb = async (): Promise<void> => {
    try {
        const mongoUrl = process.env.MONGO_URL ;
        if(!mongoUrl){
            throw new Error("mongo url is missing")
        }
        await mongoose.connect(mongoUrl as string)
        console.log("Database Conneted")
    }

    catch (error) {
        console.log("database connection faoil")
        if (error instanceof Error) {
            console.log(error)
            console.log("error is ", error.stack)
        }
        process.exit(1)
    }
}