import { Routes } from '@angular/router';
import { Livros } from './livros/livros';

export const routes: Routes = [
  { path: 'livros', component: Livros },
  { path: '', component: Livros },
];
