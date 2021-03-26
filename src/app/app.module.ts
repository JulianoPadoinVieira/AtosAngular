import { RouterModule } from '@angular/router'; //novo
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';
import { ComponenteServicoComponent } from './componente-servico/componente-servico.component';
import { ComponenteExercicioComponent } from './componente-exercicio/componente-exercicio.component';
import { ComponenteListaComponent } from './componente-lista/componente-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    ComponenteExercicioComponent,
    ComponenteServicoComponent,
    ComponenteListaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule, //novo
    //HttpClient,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
