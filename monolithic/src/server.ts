import express, { Express } from 'express';
import { errorHandler } from './middleware/error-handler';
import { setupCustomerRoutes } from './routes/customer';

export const initializeServer = async (app: Express) => {

    app.use(express.json({ limit: '1mb' }));
    app.use(express.static(__dirname + 'public'));

    setupCustomerRoutes(app);

    app.use(errorHandler);
}