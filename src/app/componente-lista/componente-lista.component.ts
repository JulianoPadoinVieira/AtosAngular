import { Component, OnInit } from '@angular/core';
import { Servico3Service } from './../services/servico3.service';
import { Lista } from './../models/Lista.model';

@Component({
  selector: 'app-componente-lista',
  templateUrl: './componente-lista.component.html',
  styleUrls: ['./componente-lista.component.css'],
})
export class ComponenteListaComponent implements OnInit {
  listas: Lista;
  erro: any;

  constructor(private listaServico: Servico3Service) {
    this.getter();

    var arr = new Array();
  }

  ngOnInit(): void {}

  getter() {
    this.listaServico.getListas().subscribe(
      (data: Lista) => {
        this.listas = data;

        console.log('o que retornou em data:', data);
        console.log('Variavel listas:', this.listas);
      },
      (error: any) => {
        this.erro = error;
        console.error('ERRO: ', this.erro);
      }
    );
  }
}
