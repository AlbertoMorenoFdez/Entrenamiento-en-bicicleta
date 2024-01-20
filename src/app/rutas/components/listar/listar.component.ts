import { CommonModule } from '@angular/common';
import { Input, OnChanges, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, EventEmitter, Output, Component } from '@angular/core';
import { Ruta } from '../../interfaces/ruta.interface';
import { Chart } from 'chart.js';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'rutas-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarRutasComponent implements OnInit, OnChanges {
  @Output()
  public onRemoveRuta: EventEmitter<number> = new EventEmitter();
  @Output()
  public onEditRuta: EventEmitter<Ruta> = new EventEmitter();

  private _rutas!: Ruta[];

  @Input()
  public get rutas(): Ruta[] {
    return this._rutas;
  }

  public set rutas(value: Ruta[]) {
    if (value !== null && value !== undefined) {
      this._rutas = value;
      // this.storeRutasInLocalStorage();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rutas'] && !changes['rutas'].firstChange) {
      this.storeRutasInLocalStorage();
    }
  }

  emitId(id: number): void {
    this.onRemoveRuta.emit(id);
  }

  emitRuta(id: number, ruta: Ruta): void {
    this.onRemoveRuta.emit(id);
    this.onEditRuta.emit(ruta);
  }

  ngOnInit(): void {
    const storedRutas = localStorage.getItem('rutas');
    if (storedRutas) {
      this.rutas = JSON.parse(storedRutas);
    } else {
      this.rutas = [];
    }
  }

  storeRutasInLocalStorage(): void {
    localStorage.setItem('rutas', JSON.stringify(this.rutas));
  }

  ordenarPorDistanciaMenor(): void {
    this.rutas = [...this.rutas].sort((a, b) => a.distancia - b.distancia);
  }

  ordenarPorDistanciaMayor(): void {
    this.rutas = [...this.rutas].sort((a, b) => b.distancia - a.distancia);
  }

  ordenarPorFechaMenor(): void {
    this.rutas = [...this.rutas].sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
  }

  ordenarPorFechaMayor(): void {
    this.rutas = [...this.rutas].sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
  }

  ordernarPorDuracionMenor(): void {
    this.rutas = [...this.rutas].sort((a, b) => a.horas * 60 + a.minutos - (b.horas * 60 + b.minutos));
  }

  ordenarPorDuracionMayor(): void {
    this.rutas = [...this.rutas].sort((a, b) => b.horas * 60 + b.minutos - (a.horas * 60 + a.minutos));
  }

  ordenarPorNombreMenor(): void {
    this.rutas = [...this.rutas].sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  ordenarPorNombreMayor(): void {
    this.rutas = [...this.rutas].sort((a, b) => b.nombre.localeCompare(a.nombre));
  }

}
