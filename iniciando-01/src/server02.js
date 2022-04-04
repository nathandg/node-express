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

    /*temperatura
    const { temperature } = req.body
     */
    const data = req.body;
    pessoa.push(data);
    console.log(data);    
    res.status(201).send('Created User');

});

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});

app.delete('/', function (req, res) {
    
    for (let i = 0; i < pessoa.length; i++) {
        pessoa[i] = 0;
    }
    res.send('Got a DELETE request at /user');

});



app.listen(port, () => {
    console.log(`Iniciando listen "localhost" na porta${port}`);
})

