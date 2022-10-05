
 module.exports = class voos{

        buscar() {
        const {MongoClient} = require('mongodb');
        const url = "mongodb://localhost:27017";
        const client = new MongoClient(url);
        client.connect().then(() => {
            console.log("conectado ao banco")
        }).catch((err) => {
            console.log("aconteceu um erro")
        });
        const db = client.db("Voos");
        const usuarios = db.collection("Viagens");

        const result = usuarios.find({}).toArray(function(result, err) {
            if (err) throw (result)
            console.log(result)
        })
    }
}