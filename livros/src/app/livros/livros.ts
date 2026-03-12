import { Component } from '@angular/core';
import { LIVROS } from '../database/livros';
import { Livro } from '../model/livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livros',
  imports: [CommonModule],
  templateUrl: './livros.html',
  styleUrl: './livros.css',
})
export class Livros {
  livros: Livro[] = LIVROS;
}
