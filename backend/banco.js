
 module.exports = class voos{

     async buscar() {
        const {MongoClient} = require('mongodb');
        const url = "mongodb://localhost:27017";
        const client = new MongoClient(url);
        await client.connect();
        const db = client.db("Voos");
        const usuarios = db.collection("Viagens");

        const result = usuarios.find({}).toArray();
        return result;  
        }  
    }


