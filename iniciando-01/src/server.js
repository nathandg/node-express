
//import expreess
const express = require('express');
//iniciando express
const app = express();
//definindo a porta
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/get', (req, res) => {
    res.send('Hello World!, /get route');
})

app.listen(port, () => {
    console.log(`Iniciando listen "localhost" na porta${port}`);
})

