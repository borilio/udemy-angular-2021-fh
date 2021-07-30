import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    //Atributos
    /*
    Es una buena práctica usar private para los atributos que queramos proteger
    y así evitar que los cambios sean visibles desde fuera de la clase
    y forzándonos a usar un getter para acceder a ellos. Se usa el prefijo '_' 
    para indicar que es privado.
    */
    private _personajes: Personaje[] = [
        { nombre: 'Goku', poder: 1200 },
        { nombre: 'Krillin', poder: 700 },
        { nombre: 'Vegeta', poder: 1500 },
        { nombre: 'Yamcha', poder: 300 },
        { nombre: 'Piccolo', poder: 1000 }
    ];

    //Métodos
    constructor() {}


    //Getters
    get personajes(): Personaje[] {
        //return this._personajes; //Esto envía el objeto por referencia, por lo que se podría manipular. Para evitarlo usamos el operador spread '...'
        return [...this._personajes]; //Esto envía una copia del objeto, por lo que no se podría manipular. Es algo como return '' + stringCualquiera.

    }

    agregarPersonaje(personaje: Personaje) {
        /*
        Al hacer this, nos salen personajes y _personajes. personajes es el getter, y me da una copia, por lo que
        lo tenemos que añadir directamente al array, que es this._personajes
        */
        this._personajes.push(personaje);
    }
    

}