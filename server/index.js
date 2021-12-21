const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 8080;

const db = require('./db')
const propertyRouter = require('./routes/property-router')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.use(express.static(path.resolve(__dirname, "../client/build")))

app.use('/api', propertyRouter)

// app.get('/api', (req, res) => {
//     res.json({ message: "Hello from server" })
// })

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'App.js'))
// })

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
