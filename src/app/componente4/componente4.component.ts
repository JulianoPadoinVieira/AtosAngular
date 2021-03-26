import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pessoa } from '../models/Pessoa.model';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css'],
})
export class Componente4Component implements OnInit {
  pessoas = [
    new Pessoa('Fabrício', 'professor'),
    new Pessoa('Reiner', 'professor'),
    new Pessoa('Cesar', 'aluno'),
    new Pessoa('Vitor', 'aluno'),
    new Pessoa('Augusto', 'aluno'),
    new Pessoa('Juliano', 'aluno'),
    new Pessoa('Wagner', 'aluno'),
    new Pessoa('Rafael', 'aluno'),
    new Pessoa('Roberta', 'aluno'),
    new Pessoa('Ruan', 'aluno'),
    new Pessoa('Gabriel', 'aluno'),
  ];

  selecionado = null;

  selecionar(pessoa) {
    this.selecionado = pessoa;
  }

  cadastro = new FormGroup({
    nome: new FormControl(''),
    papel: new FormControl(''),
  });

  salvar() {
    const p = new Pessoa(this.cadastro.value.nome, this.cadastro.value.papel);
    this.pessoas.push(p);
  }

  excluir(pessoa) {
    if (
      confirm('Deseja prosseguir com a exclusão de "' + pessoa.nome + '" ?')
    ) {
      const i = this.pessoas.indexOf(pessoa);
      this.pessoas.splice(i, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
