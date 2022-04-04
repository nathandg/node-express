const express = require('express');
const router = express.Router();

let dumyCount = 0;
let temperatureList = [];

//get ----------
router.get('/', function (req, res) {
    res.send(temperatureList);
});

//get em um id especifico filtrando pelo id da requisição
router.get('/:id', (req,res) =>{
    
    //filtrando obejetos do array
    const objTemp = temperatureList.filter(temperature => temperature.id == req.params.id);

    res.send(objTemp);
})

//post ----------
router.post('/', function (req, res) {

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





module.exports = router;