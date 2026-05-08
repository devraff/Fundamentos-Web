import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

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

  login(cpf: string, senha: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((usuarios) => {
        // Procuramos o usuário na lista recebida
        // Usamos .toString() para garantir que a comparação não falhe se um for número e outro string
        const usuarioEncontrado = usuarios.find(
          (u) => u.cpf.toString() === cpf.toString() && u.senha.toString() === senha.toString(),
        );

        if (usuarioEncontrado) {
          localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
          return true;
        }
        return false;
      }),
    );
  }
}
