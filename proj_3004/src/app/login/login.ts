import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html'
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private auth: AuthService, 
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      cpf: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  tentarLogin() {
  if (this.loginForm.valid) {
    const { cpf, senha } = this.loginForm.value;
    
    this.auth.login(cpf, senha).subscribe({
      next: (sucesso) => {
        if (sucesso) {
          console.log('Login bem-sucedido! Redirecionando para Suporte...');
          this.router.navigate(['/suporte']); // Alterado de /home para /suporte
        } else {
          alert('CPF ou senha não encontrados no banco de dados!');
        }
      },
      error: (err) => {
        console.error('Erro na requisição:', err);
        alert('Erro ao conectar com o servidor.');
      }
    });
  } else {
    alert('Por favor, preencha o formulário corretamente.');
  }
}
}