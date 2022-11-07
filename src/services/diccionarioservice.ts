import fs from 'fs' //leer archivo .json y para escribir en archivo
import path from 'path' //modulo de node para realizar acciones con rutas de archivos
import { Json } from 'sequelize/types/utils';
import { DiccionarioDTOS } from '../dtos/create-diccionario.dto';

class DiccionarioService{

    public diccionario=[]; //almacenar los datos del json de manera temporal


    constructor(){
        const path_rutas = path.dirname(__dirname) + '/data/palabras.json'
        this.diccionario = JSON.parse(fs.readFileSync( path_rutas , {encoding: 'utf-8'}))
    }

    public async getList(){
        return this.diccionario
    }

    public async getListByCategoria(categoria: string){
        const palabra = this.diccionario.filter((c) => c.categoria == categoria)
        return palabra;
    }

    public async getNombre(palabra: string){
        const word = this.diccionario.find((c) => c.palabra == palabra)
        return word;
    }
         
    public async create(diccionarioDTOS: DiccionarioDTOS){

        this.diccionario.push({
         ...diccionarioDTOS  
     })

     fs.writeFileSync(JSON.stringify(this.diccionario) , 'w+')
    
    }

}

export default new DiccionarioService();