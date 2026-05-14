import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
})
export class App {
  constructor(private router: Router) {}

  // Função para checar se o usuário está logado (usada no HTML)
  estaLogado(): boolean {
    return localStorage.getItem('usuarioLogado') !== null;
  }

  logout() {
    localStorage.removeItem('usuarioLogado');
    this.router.navigate(['/login']);
  }
}