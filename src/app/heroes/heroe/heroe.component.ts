import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
    public nombre: string = "Ironman";
    public edad: number = 45;

    //Así se hacen los getter
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    public obtenerNombre(): string {
        return `${this.nombre} - ${this.edad} años`;
    }

    public cambiarNombre() {    
        this.nombre = "Spiderman";
    }

    public cambiarEdad() {
        this.edad = 19;
    }

}
