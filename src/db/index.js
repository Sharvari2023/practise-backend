import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connectionistance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("monggo db connected", connectionistance.connection.host);

    } catch (error) {
        console.log("MONGO DB CONNECTION FAILED", error);
        throw error
    }
}

export default connectDB