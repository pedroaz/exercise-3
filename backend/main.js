const express = require('express')
const {MongoClient} = require('mongodb')
const voos = require("./banco.js")
var cors = require('cors')
const app = express()
var bodyParser = require('body-parser')
const port = 3000

const banco = new voos();
app.use(cors())
app.use(bodyParser.json())

app.get("/buscar",async (req, res) => {
  const result = await banco.buscar()
  res.send(result)
});

app.post("/criar",async (req, res) => {
  const id = (await banco.buscar()).length + 1
  const  destino= req.body.destino
  const origem = req.body.origem
  const result = await banco.criar(destino , origem , id)
  console.log(`viagem adicionada`)
  res.send('viagem adicionada')
});

app.patch("/atualizar", async (req, res) => {
  
})


app.listen(port, () => {
    console.log(`servidor aberto na porta : ${port}`)
  })