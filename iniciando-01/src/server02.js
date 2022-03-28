const express = require('express');
const app = express();
const port = 3000;

//savio imports
//const { json } = require("body-parser");
//const cors = require('cors');
//app.use(cors);

app.use(express.json()); 
app.use(express.urlencoded({ extended: false}));

let pessoa = [];

app.get('/', function (req, res) {
    res.send(pessoa);
});
  
app.post('/', function (req, res) {

    pessoa.push(req.body);    
    res.status(201).send('Created User');

});

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
    
    for (let i = 0; i < pessoa.length; i++) {
        pessoa[i] = null;
    }
    res.send('Got a DELETE request at /user');

});



app.listen(port, () => {
    console.log(`Iniciando listen "localhost" na porta${port}`);
})

