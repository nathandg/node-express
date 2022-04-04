const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const server = express()
const port = 3000

server.use(json())
server.use(cors())


server.get('/', (req,res) => {
    res.status(200).send();
})


server.listen(port, (req, res) => {
    console.log(`server running on port ${port}`)
})