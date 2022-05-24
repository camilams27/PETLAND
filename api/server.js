const express = require('express');
const app = express();
const routes = require('./routes');
const connectDatabase = require('./dataBase');

connectDatabase();

const port = 3333;

app.use(express.json())
app.use(routes);

app.listen(port, ()=>{ console.log(`acesse: http://localhost:${port}`)});