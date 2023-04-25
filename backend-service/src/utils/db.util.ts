import mongoose from "mongoose";
import { config } from 'dotenv'

config()

export const connectDB = async () => {
    try {
        const { DATABASE_URL } = process.env
        await mongoose.connect(DATABASE_URL, {
            dbName: 'task-manager',
        }).then(() => {
            console.log('MongoDB connected successfully');
        }).catch((error) => {
            console.error('Failed to connect to MongoDB', error);
        });
    } catch (error) {

    }
}