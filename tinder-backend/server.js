import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Cards from './dbCards.js'

// App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:1234asdf@cluster0.5ee4w.mongodb.net/tinderdb?retryWrites=true&w=majority'

// Middlewares
app.use(express.json())
app.use(Cors())

// DB Config
mongoose.connect(connection_url, {
    // Used to make the connection to mongoose better
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints
app.get("/", (req,res) => res.status(200).send('Hello James'));

app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
});

    // for downloading data, retrieves all the cards we want
app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        };
    });
});

// Listener
app.listen(port, () => console.log(`listening on local host ${port}`));