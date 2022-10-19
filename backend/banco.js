
 module.exports = class voos{

    async buscar() {
        const {MongoClient} = require('mongodb');
        const url = "mongodb://localhost:27017";
        const client = new MongoClient(url);
        await client.connect()
        const db = client.db("Voos");
        const usuarios = db.collection("Viagens");
        const result = await usuarios.find({}).toArray()
        return result
    }

    async criar(destino , origem , id) {
        const {MongoClient} = require('mongodb');
        const url = "mongodb://localhost:27017";
        const client = new MongoClient(url);
        await client.connect()
        const db = client.db("Voos");
        const usuarios = db.collection("Viagens");
        const novo_usuario = [
            {"id": id, "destino": destino, "origem": origem}
        ]
        await usuarios.insertMany(novo_usuario) 
    }

    async atualizar(req,res) {
        const {MongoClient} = require('mongodb');
        const url = "mongodb://localhost:27017";
        const client = new MongoClient(url);
        await client.connect()
        const db = client.db("Voos");
        const usuarios = db.collection("Viagens");
        const myquery = { nome: "marcos" };
        var newvalues = { $set: {altura: "1.80" } };
        await usuarios.updateOne(myquery, newvalues)
    }
}