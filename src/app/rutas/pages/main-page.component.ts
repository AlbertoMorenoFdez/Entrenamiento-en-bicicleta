import { Component } from '@angular/core';
import { Ruta } from '../interfaces/ruta.interface';

@Component({
    selector: 'app-rutas-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
    public rutas: Ruta[] = [];

    /*  onNewRuta(ruta: Ruta): void {
         this.rutas.push(ruta);
     } */

    /* onNewRuta(ruta: Ruta): void {
        this.rutas = [...this.rutas, ruta];
      } */

    // Se ejecuta cuando se inicialliza el componente
    ngOnInit() {
        // Obtenemos las rutas del localStorage
        const rutasFromLocalStorage = localStorage.getItem('rutas');
        // Si hay rutas en localStorage las convierte de cadena JSON a un array de rutas y las asigna a this
        if (rutasFromLocalStorage) {
            this.rutas = JSON.parse(rutasFromLocalStorage);
        }
    }

    // Añade una nueva ruta al array de rutas y actuliza el valor de las rutas en localStorage
    addRuta(nuevaRuta: Ruta): void {
        // Añade la nueva ruta al array de rutas
        this.rutas = [...this.rutas, nuevaRuta];
        // Convertimos el array rutas a una cadena JSON y la guarda en localStorage
        localStorage.setItem('rutas', JSON.stringify(this.rutas));
    }


    onRemoveRuta(id: number): void {
        // Creamos un nuevo array sin la ruta que se va a eliminar
        this.rutas = this.rutas.filter((ruta, index) => index !== id);

        // Actualizamos el valor de las rutas en localStorage
        this.storeRutasInLocalStorage();
    }

    private storeRutasInLocalStorage(): void {
        localStorage.setItem('rutas', JSON.stringify(this.rutas));
    }

    public oldRuta: Ruta = {
        nombre: '',
        fecha: '',
        distancia: 0,
        duracion: 0,
        horas: 0,
        minutos: 0,
    }

    onEditRuta(ruta: Ruta): void {
        this.oldRuta = ruta;

    }
}
