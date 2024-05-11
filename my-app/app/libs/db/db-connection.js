"use server"
import mongoose from "mongoose";

export async function DBConnection() {
    try {
        const db_uri = process.env.DB_URI
        await mongoose.connect(db_uri)
        console.log("MongoDB connection Successful.")
    } catch (error) {
        console.log("MongoDB connection error:" + error)
    }
}