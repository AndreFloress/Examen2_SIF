import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Router, Request, Response } from "express";
import {  DiccionarioDTOS } from "../dtos/create-diccionario.dto";
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
        this.router.post('/diccionarios' , this.create)
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
        const diccionario = await diccionarioservice.getListByCategoria(categoria)
        return res.json(diccionario);
    }

    
    async create(req: Request , res: Response): Promise<Response>{
       const payload = req.body

       let diccionarioDTOS = plainToClass (DiccionarioDTOS, payload)

       const errors = await validate(diccionarioDTOS);

       if(errors.length > 0){
        console.log(errors);

        return res.status(400).json({
            "Validation-errors" : errors
        })
       }
       return res.json(await diccionarioservice.create(diccionarioDTOS))
    
    }
    

}