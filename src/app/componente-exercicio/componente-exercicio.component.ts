import { Servico2Service } from './../services/servico2.service';
import { Component, OnInit } from '@angular/core';
import { Album } from './../models/Album.model';

@Component({
  selector: 'app-componente-exercicio',
  templateUrl: './componente-exercicio.component.html',
  styleUrls: ['./componente-exercicio.component.css'],
})
export class ComponenteExercicioComponent implements OnInit {
  albums: Album;
  erro: any;

  constructor(private albumServico: Servico2Service) {
    this.getter();

    var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function tabuadaDe2(item) {
      console.log(item * 2);
    }
  }

  ngOnInit(): void {}

  getter() {
    this.albumServico.getAlbums().subscribe(
      (data: Album) => {
        this.albums = data;

        console.log('o que retornou em data:', data);
        console.log('Variavel albums:', this.albums);
      },
      (error: any) => {
        this.erro = error;
        console.error('ERRO: ', this.erro);
      }
    );
  }
}
