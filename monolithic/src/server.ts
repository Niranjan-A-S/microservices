import express, { Express } from 'express';
import { errorHandler } from './middleware/error-handler';

export const initializeServer = async (app: Express) => {

    app.use(express.json({ limit: '1mb' }));
    app.use(express.static(__dirname + 'public'));

    app.use(errorHandler);
}