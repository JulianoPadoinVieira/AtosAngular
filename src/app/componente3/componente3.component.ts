import { Pessoa } from '../models/Pessoa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  pessoas = [
    new Pessoa ("Fabrício", "Professor"),
    new Pessoa ("Reiner", "Professor"),
    new Pessoa ("Juliano", "colaborador"),
    new Pessoa ("Gerusclécio", "colaborador"),
    new Pessoa ("Enerclécio", "colaborador"),
    new Pessoa ("Tupirangara", "colaborador"),
    new Pessoa ("Andre", "colaborador"),
    new Pessoa ("Bruno", "colaborador"),
    new Pessoa ("Carla", "colaborador"),
    new Pessoa ("Daniela", "colaborador"),
    new Pessoa ("Éderson", "colaborador"),
    new Pessoa ("Maria", "colaborador"),
    new Pessoa ("Karine", "colaborador")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
