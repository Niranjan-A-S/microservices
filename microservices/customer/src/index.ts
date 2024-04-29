import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.status(200).json(
        {
            message: 'Hello from CUSTOMER service'
        }
    )
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Customer Application running on port ${PORT}`)
})