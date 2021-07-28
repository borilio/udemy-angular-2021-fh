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

  constructor() { }

  ngOnInit(): void { }

  agregar(): void {    
    //Si el nombre NO está vacío, lo agregamos, si si, nos salimos.
    if (this.nuevo.nombre) {
      //Lo agregamos
      this.personajes.push(this.nuevo);
      //Lo reseteamos
      this.nuevo = {  
        nombre: '',
        poder: 0
      };
    } else{
      alert("El nombre no puede estar vacío");
    }

  }

}
