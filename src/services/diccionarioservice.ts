import fs from 'fs' //leer archivo .json y para escribir en archivo

class DiccionarioService{

    public diccionario=[]; //almacenar los datos del json de manera temporal

    constructor(){
        this.diccionario = JSON.parse(fs.readFileSync('../data/palabras.json' , {encoding: 'utf-8'})) 
    }

    public async getDiccionario(){
        return this.diccionario
    }

}

export default new DiccionarioService();