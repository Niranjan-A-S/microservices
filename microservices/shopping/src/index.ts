import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.status(200).json(
        {
            message: 'Hello from SHOPPING service'
        }
    )
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Shopping Application running on port ${PORT}`)
})