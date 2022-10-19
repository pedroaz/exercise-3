let url = 'http://localhost:3000'

async function criar(){
    const origem = document.getElementById("origem").value
    const destino = document.getElementById("destino").value
    const link = url + "/criar"
    const res = await axios.post(link, {destino: destino, origem: origem})
    }

async function buscar(){
    const info = document.getElementById("info")
    info.innerHTML = ""
    const link1 = url + "/buscar"
    const res1 = await axios.get(link1)
    console.log(res1.data)
    res1.data.forEach(banco => {
        info.innerHTML += `<tr><td> ${banco.id}</td> <td>${banco.origem}</td> <td>${banco.destino}</td> <td> <button onlclick="atualizar()">Atualizar </button> <td> <button onlclick="deletar()"> Deletar </button> </tr>`
    });
}

async function atualizar(){
    const origem = document.getElementById("origem-att")
    const destino = document.getElementById("destino-att")
    
}
async function deletar(){

}
