const express = require('express');
const app = express();
const port = 3000;

const { json } = require("body-parser");
const cors = require('cors');
app.use(cors());

app.use(express.json()); 
app.use(express.urlencoded({ extended: false}));

let dumyCount = 0;
let temperatureList = [];

//get ----------
app.get('/', function (req, res) {
    res.send(temperatureList);
});

//get em um id especifico filtrando pelo id da requisição
app.get('/:id', (req,res) =>{
    
    //filtrando obejetos do array
    const objTemp = temperatureList.filter(temperature => temperature.id == req.params.id);

    res.send(objTemp);
})

//post ----------
app.post('/', function (req, res) {

    const { temperature } = req.body;      
    
    const tempObj = {
        id: dumyCount += 1 ,
        temperature: temperature
    }

    temperatureList.push(tempObj);    
    res.status(201).send('Created User');

});

//put ----------
app.put('/:value', (req, res) => {

    temperatureList.map(temp => {
        if(temp.id == req.query.id){
         temp.temperature = req.params.value;            
        }
        console.log(`achei em ${id}`);
    });
    
    res.send('put realized');
});

//delete ----------
app.delete('/', function (req, res) {
       
    temperatureList = [];
    dumyCount = 0;
    res.send('Got a DELETE request at /user');

});

app.delete('/', (req, res) => {

    temperatureList = [];
    dumyCount = 0;
    res.send

})


app.listen(port, () => {
    console.log(`Iniciando listen "localhost" na porta${port}`);
})

