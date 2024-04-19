import dotenv from 'dotenv'

process.env.NODE_ENV === 'development' ? dotenv.config({ path: './env.development' }) : dotenv.config();

export const port = process.env.PORT || 3000;

