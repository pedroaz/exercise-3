const express = require('express')
const {MongoClient} = require('mongodb');
var cors = require('cors')
const app = express()
const port = 3000

const voos = require("./banco.js")
app.use(cors())

app.get("/buscar")
 const result = voos.buscar()
console.log(result)

app.listen(port, () => {
    console.log(`servidor aberto na porta : ${port}`)
  })