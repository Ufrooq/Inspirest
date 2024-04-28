import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Inspirest")
        console.log('Successfully connected to database')
    } catch (error) {
        console.log(error);

    }
}

