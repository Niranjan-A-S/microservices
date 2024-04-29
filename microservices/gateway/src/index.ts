import express from 'express';
import proxy from 'express-http-proxy';

const app = express();

app.use('/customer', proxy('http://localhost:3001'));
app.use('/shopping', proxy('http://localhost:3003'));
app.use('/', proxy('http://localhost:3002'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(` API Gateway running on port ${PORT}`)
})