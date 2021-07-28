import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Superman', 'Batman', 'Spiderman', 'Thor', 'Hulk', 'Wolverine'];

  heroeBorrado:string = "";


  public borrarHeroe(heroe: string) {
    const indice = this.heroes.indexOf(heroe);
    if (indice>=0) {
      this.heroes.splice(indice, 1);
      this.heroeBorrado = heroe;
      console.log("Hemos borrado a '" + heroe + "' que estaba en la posición " + indice);
    } else{
      console.log('No existe el heroe', heroe);
    }
  }

  public borrarPrimerHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || "";
  }



}
