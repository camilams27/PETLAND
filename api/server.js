const express = require('express');
const app = express();
const routes = require('./routes');
const connectDatabase = require('./dataBase');
const cors = require('cors');

connectDatabase();

const port = 3333;

app.use(express.json())
app.use(routes);

var corsOptions = {
    origin: "http://localhost:3333/",
    optionsSuccessStatus: 200,
  };
app.use(cors(corsOptions));

app.listen(port, ()=>{ console.log(`acesse: http://localhost:${port}`)});