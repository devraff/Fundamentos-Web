import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient, private router: Router) {}

  cadastrar(dados: any): Observable<any> {
    return this.http.post(this.apiUrl, dados);
  }

  // src/app/services/auth.service.ts

  // Método para criar um ticket
  criarTicket(ticket: any): Observable<any> {
    return this.http.post('http://localhost:3000/tickets', ticket);
  }

  // Método para listar todos os tickets
  getTickets(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/tickets');
  }

  login(identificador: string, senha: string): Observable<boolean> {
  return this.http.get<any[]>(this.apiUrl).pipe(
    map(usuarios => {
      // Procuramos o usuário que combine a senha E (cpf OU usuario)
      const usuarioEncontrado = usuarios.find(u => 
        (u.cpf.toString() === identificador || u.usuario === identificador) && 
        u.senha.toString() === senha
      );

      if (usuarioEncontrado) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
        return true;
      }
      return false;
    })
  );
}

logout() {
  // Remove o usuário do navegador
  localStorage.removeItem('usuarioLogado');
  // Redireciona para o login
  this.router.navigate(['/login']);
}
}
