import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  pessoas =
  [
    {nome: "Fabrício", papel: "Professor"},
    {nome: "Reiner", papel: "Professor"},
    {nome: "Juliano", papel: "colaborador"},
    {nome: "Gerusclécio", papel: "colaborador"},
    {nome: "Enerclécio", papel: "colaborador"},
    {nome: "Tupirangara", papel: "colaborador"},
    {nome: "Andre", papel: "colaborador"},
    {nome: "Bruno", papel: "colaborador"},
    {nome: "Carla", papel: "colaborador"},
    {nome: "Daniela", papel: "colaborador"},
    {nome: "Éderson", papel: "colaborador"},
    {nome: "Maria", papel: "colaborador"},
    {nome: "Karine", papel: "colaborador"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
