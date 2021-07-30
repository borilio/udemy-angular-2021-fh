import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  //Atributos
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };
  
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  //Métodos
  constructor() { }

  ngOnInit(): void {
  }

  agregar(): void {    
    //Si el nombre NO está vacío, lo enviamos, si si, nos salimos.
    if (this.nuevo.nombre) {
      //Lo creamos y emitimos al padre
      console.log("Personaje creado, y emitido al padre:", this.nuevo);
      //Emitimos el evento con el personaje nuevo
      this.onNuevoPersonaje.emit(this.nuevo);

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
