import { databaseConnectionString, dbName } from '../config';
import mongoose from "mongoose";

export const establishDatabaseConnection = async () => {
    try {
        //TODO: Use custom error class
        if (!databaseConnectionString) throw new Error('MongoDB connection string is missing');

        const { connection } = await mongoose.connect(databaseConnectionString, {
            dbName
        });
        console.log(`🌿 Connected to database: ${connection.host}`);

    } catch (error) {
        console.log('Failed connecting to database', error);
        process.exit(1);
    }
};