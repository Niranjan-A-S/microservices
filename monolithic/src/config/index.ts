import dotenv from 'dotenv'
import { isDevelopmentEnvironment } from '../utils'

isDevelopmentEnvironment() ? dotenv.config({ path: './.env.development' }) : dotenv.config();

const port = process.env.PORT || 3000;
const databaseConnectionString = process.env.DB_URL;
const dbName = isDevelopmentEnvironment() ? 'development-db' : 'production-db' 

export { port, databaseConnectionString, dbName }

