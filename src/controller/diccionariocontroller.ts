import { Router, Request, Response } from "express";
import diccionarioservice from "../services/diccionarioservice";

export class DiccionarioControllers{

    router = Router();

    constructor(){
        this.InitRoutes();
    }

    //Funcion rutas
    InitRoutes(){
        this.router.get('/categoria', this.getDiccionario)
    }

    async getDiccionario(req: Request , res: Response): Promise<Response>{
        const diccionario = await diccionarioservice.getDiccionario;
        return res.json()
    } 

    

}