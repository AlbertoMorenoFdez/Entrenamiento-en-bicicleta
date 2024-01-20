import { Component, EventEmitter, Output, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Ruta } from '../../interfaces/ruta.interface';

@Component({
  selector: 'rutas-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearRutaComponent {
  @Output()
  public onNewRuta: EventEmitter<Ruta> = new EventEmitter();

  public ruta: Ruta = {
    nombre: '',
    fecha: '',
    distancia: 0,
    duracion: 0,
    horas: 0,
    minutos: 0
  }

  @Input()
  public oldRuta: Ruta = {
    nombre: '',
    fecha: new Date().toISOString().split('T')[0],
    distancia: 0,
    duracion: 0,
    horas: 0,
    minutos: 0
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['oldRuta'] && changes['oldRuta'].currentValue) {
      this.ruta = { ...changes['oldRuta'].currentValue };
    }
  }

  emitirRuta(): void {
    this.onNewRuta.emit({ ...this.ruta });
    this.ruta.nombre = '';
    this.ruta.fecha = new Date().toISOString().split('T')[0]; // Fecha actual
    this.ruta.distancia = 0;
    this.ruta.duracion = this.ruta.horas * 60 + this.ruta.minutos;
  }

  actualizarRuta(): void {
    this.ruta.nombre = '';
    this.ruta.fecha = new Date().toISOString().split('T')[0]; // Fecha actual
    this.ruta.distancia = 0;
    this.ruta.duracion = this.ruta.horas * 60 + this.ruta.minutos;
  }
}
