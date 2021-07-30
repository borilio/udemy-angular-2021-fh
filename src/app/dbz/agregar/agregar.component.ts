import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

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
  
  /*
  Ya no emitimos el personaje, si no que usamos el servicio, por lo que lo quitamos
  */
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  //Métodos
  constructor(private _dbzService:DbzService) { }

  ngOnInit(): void {
  }

  agregar(): void {    
    //Si el nombre NO está vacío, lo enviamos, si si, nos salimos.
    if (this.nuevo.nombre) {
      //Usamos el servicio para guardar el personaje nuevo
      this._dbzService.agregarPersonaje(this.nuevo);
      
      /*Esto era para usar el @Output, ahora con el servicio es lo de arriba*/
      //Lo creamos y emitimos al padre
      //console.log("Personaje creado, y emitido al padre:", this.nuevo);
      //Emitimos el evento con el personaje nuevo
      //this.onNuevoPersonaje.emit(this.nuevo);

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
