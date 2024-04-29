import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.status(200).json(
        {
            message: 'Hello from PRODUCTS service'
        }
    )
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Products Application running on port ${PORT}`)
})