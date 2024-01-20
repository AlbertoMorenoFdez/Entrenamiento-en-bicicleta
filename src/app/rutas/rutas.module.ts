import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page.component';
import { ListarRutasComponent } from './components/listar/listar.component';
import { CrearRutaComponent } from './components/crear/crear.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GraficoComponent } from './components/grafico/grafico.component';

@NgModule({
  declarations: [
    CrearRutaComponent,
    ListarRutasComponent,
    MainPageComponent,
    GraficoComponent
  ],

  exports: [
    MainPageComponent
  ],

  imports: [
    CommonModule,
    FormsModule
  ],
})

export class RutasModule { }
