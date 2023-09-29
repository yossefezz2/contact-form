const express = require('express');

const app = express();
const Port = 5000;
const cors = require('cors');
const db = require('./config/db');
const bodyParser = require('body-parser');
const server = require('http').createServer(app);

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());
app.use(express.json());


server.listen(Port, () => {
  console.log('Server listening on port ',Port);
});



// Routs
const Contact = require("./route/contact");
app.use("/Contact",Contact);