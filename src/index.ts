import express from "express";
import { port } from './config';
import { initializeServer } from './server';

(async () => {

    //TODO: Database Connection

    const app = express();
    await initializeServer(app);

    app.listen(port, () => {
        console.log(`⚙️  Application running on port ${port}`);
    });
})();