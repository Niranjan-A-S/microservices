import express from "express";
import { port } from './config';
import { establishDatabaseConnection } from './database/connection';
import { initializeServer } from './server';

(async () => {

    await establishDatabaseConnection();

    const app = express();
    await initializeServer(app);

    app.listen(port, () => {
        console.log(`⚙️  Application running on port ${port}`);
    })
        .on('error', (err) => {
            console.log(err);
            process.exit();
        })

})();