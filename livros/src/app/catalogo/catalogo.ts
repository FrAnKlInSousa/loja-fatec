import { Component } from '@angular/core';
import { LIVROS } from '../database/livros';
import { Livro } from '../model/livro';

@Component({
  selector: 'app-catalogo',
  imports: [],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {
  livros: Livro[] = LIVROS;
}
