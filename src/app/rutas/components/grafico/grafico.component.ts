// Importaciones necesarias de Angular y Chart.js
import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

// Registro de los componentes necesarios de Chart.js
Chart.register(...registerables);

// Decorador de Componente que define el selector y la plantilla HTML
@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',

})
export class GraficoComponent implements OnInit, OnChanges {
  // Referencia al elemento del DOM donde se creará el gráfico
  @ViewChild('chart') private chartRef!: ElementRef;

  // Datos que se mostrarán en el gráfico
  @Input() rutas: any[];

  // Referencia al objeto de grafico de Chart.js
  chart: any;

  constructor() {
    // Inicialización de variables
    this.chartRef = {} as ElementRef;
    this.rutas = [];
  }

  // Metodo de ciclo de vida de Angular que se ejecuta al iniciar el componente
  ngOnInit(): void { }

  // Método de ciclo de vida que se ejecuta después de la inicialización de la vista del componente
    // Aquí es donde se crea el gráfico de Chart.js
  ngAfterViewInit(): void {
    const storedRutas = localStorage.getItem('rutas');
    let rutasData = [];
    if (storedRutas) {
      rutasData = JSON.parse(storedRutas);
    }

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Distancia de las rutas',
          data: rutasData.map((ruta: any) => ({
            x: new Date(ruta.fecha),
            y: ruta.distancia,
            nombre: ruta.nombre,
            horas: ruta.horas,
            minutos: ruta.minutos,
            distancia: ruta.distancia
          })).sort((a: any, b: any) => Number(a.x) - Number(b.x)),
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day'
            },
            title: {
              display: true,
              text: 'Fecha'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Distancia (km)'
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                const ruta: any = context.raw;
                return `Nombre: ${ruta.nombre}, Duración: ${ruta.horas}h:${ruta.minutos}m, Distancia: ${ruta.distancia}km`;
              }
            }
          }
        }
      }
    });
  }
  // Método de ciclo de vida que se ejecuta cuando cambian los datos de entrada del componente
  // Aquí es donde se actualizan los datos del gráfico
  ngOnChanges(): void {
    if (this.chart) {
      this.chart.data.datasets[0].data = this.rutas.map(ruta => ({
        x: new Date(ruta.fecha),
        y: ruta.distancia,
        nombre: ruta.nombre,
        horas: ruta.horas,
        minutos: ruta.minutos,
        distancia: ruta.distancia
      })).sort((a, b) => Number(a.x) - Number(b.x));
      this.chart.update();
    }
  }
}