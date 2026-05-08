import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // 1. Certifique-se de importar aqui
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importante para o *ngIf funcionar também
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    ReactiveFormsModule, // 2. ADICIONE ISSO AQUI (Isso resolve o erro do [formGroup])
    CommonModule         // 3. Adicione isso para usar diretivas como *ngIf
  ],
  templateUrl: './cadastro.html'
})
export class Cadastro { // Notei que seu print diz "Cadastro", garanta que o nome da classe está correto
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required]],
      endereco: ['', Validators.required],
      telefone: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  finalizarCadastro() {
    if (this.cadastroForm.valid) {
    this.authService.cadastrar(this.cadastroForm.value).subscribe({
      next: () => {
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/login']);
      },
      error: () => alert('Erro ao conectar com a API')
    });
  }
}
}