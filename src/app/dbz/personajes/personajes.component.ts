import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  
 //@Input() personajes: Personaje[] = []; //Al usar el servicio, ya no necesitamos recibirlo desde el componente

  get personajes() : Personaje[] {
    return this._dbzService.personajes;
  }

  constructor(private _dbzService:DbzService) { }

  ngOnInit(): void { }

}
