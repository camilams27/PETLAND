const express = require('express');
const app = express();
const routes = require('./routes');
const connectDatabase = require('./dataBase');
const cors = require('cors');

connectDatabase();

const port = process.env.PORT || 3333;

app.set("host", process.env.HOST || "localhost");
app.set('port', process.env.PORT || 3333);

app.use(cors());

app.use(express.json())
app.use(routes);

app.listen(process.env.PORT, ()=>{ console.log(`acesse: http://localhost:${port}`, process.env.PORT)});