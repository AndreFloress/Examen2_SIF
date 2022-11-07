import {Length , IsNotEmpty} from 'class-validator'

export class DiccionarioDTOS{

    @Length(3,15)
    @IsNotEmpty()
    palabra:string;

    @Length(3,15)
    @IsNotEmpty()
    categoria: string;

}

