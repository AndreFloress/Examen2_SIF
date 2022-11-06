import fs from 'fs' //leer archivo .json y para escribir en archivo

class DiccionarioService{

    private diccionario=[]; //almacenar los datos del json de manera temporal

    constructor(){
        this.diccionario = JSON.parse(fs.readFileSync('../data/palabras.json' , {encoding: 'utf-8'})) 
    }

    public async getDiccionario(){
        return this.diccionario
    }

    public async getCategoria(){
        const fruta = this.diccionario.find((c) => c.fruta == fruta)

        return fruta;
    }
    
}

export default new DiccionarioService();