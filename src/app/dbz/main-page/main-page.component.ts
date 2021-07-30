import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  personajes: Personaje[] = [
    { nombre: 'Goku', poder: 1200 },
    { nombre: 'Krillin', poder: 700 },
    { nombre: 'Vegeta', poder: 1500 },
    { nombre: 'Yamcha', poder: 300 }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  agregarNuevoPersonaje(personajeNuevo: Personaje): void {
    //Añadimos el personaje recibido por evento, a la lista de personajes
    this.personajes.push(personajeNuevo);
    console.log("Recibido del hijo y añadido: ", personajeNuevo);
    console.log("Array completo: ", this.personajes);
  }


  constructor() { }

  ngOnInit(): void { }

  

}
