require('dotenv').config();

const express = require('express');
const summaryRoutes = require('./routes/summaryRoutes');
const mongoose = require('mongoose');

const app = express();

// parse incoming data to json format to access the request body
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use('/', summaryRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("listening on PORT", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log("error")
    })

