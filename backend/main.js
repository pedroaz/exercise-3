const express = require('express')
const {MongoClient} = require('mongodb')
const voos = require("./banco.js")
var cors = require('cors')
const app = express()
const port = 3000

const banco = new voos();
app.use(cors())

app.get("/buscar", () => {
  const result = banco.buscar()
  console.log(result)
});


app.listen(port, () => {
    console.log(`servidor aberto na porta : ${port}`)
  })