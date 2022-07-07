const express =  require('express');
const app = express()

const PORT = process.env.PORT || 4200;

app.use(express.static(__dirname + '/dist/books-app'));

app.get('/+', (req, res) => {
    res.sendFile(__dirname + 'dist/books-app/index.html')
});

app.listen(PORT, () =>{
    console.log('servidor petland' + PORT);
}) 