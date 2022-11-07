import { Router, Request, Response } from "express";
import diccionarioservice from "../services/diccionarioservice";

export class DiccionarioControllers{

    router = Router();

    constructor(){
        this.InitRoutes();
    }

    //Funcion rutas
    InitRoutes(){
        this.router.get('/diccionarios', this.getList)
        this.router.get('/diccionarios/:palabra', this.getNombre)
        this.router.get('/diccionarios/:categoria', this.getListByCategoria)
    }

    //Funcion lista
    async getList(req: Request , res: Response): Promise<Response>{
        const diccionario = await diccionarioservice.getList();
        return res.json(diccionario)
    } 

    //Funcion obtener un objeto 
    async getNombre(req: Request , res: Response): Promise<Response>{
        const {palabra} = req.params
        const diccionario = await diccionarioservice.getNombre(palabra);
        return res.json(diccionario);
    }

    //funcion obtener lista categoria    
    async getListByCategoria(req: Request , res: Response): Promise<Response>{
        const {categoria} = req.params
        const palabra = await diccionarioservice.getListByCategoria(categoria);
        return res.json(palabra);
    }
    

}