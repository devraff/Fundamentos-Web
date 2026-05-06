import { Routes } from '@angular/router';
import { Suporte } from './suporte/suporte';
import { Cadastro } from './cadastro/cadastro';
import { Login } from './login/login';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'suporte', component: Suporte },
  { path: 'cadastro', component: Cadastro },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Rota inicial opcional
];