import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suporte',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './suporte.html'
})
export class Suporte implements OnInit {
  ticketForm: FormGroup;
  tickets: any[] = [];
  usuarioLogado: any;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.ticketForm = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const session = localStorage.getItem('usuarioLogado');
    this.usuarioLogado = session ? JSON.parse(session) : null;
    this.carregarTickets();
  }

  carregarTickets() {
    this.auth.getTickets().subscribe(data => {
      // Invertemos a ordem para o mais novo aparecer primeiro
      this.tickets = data.reverse();
    });
  }

  enviarTicket() {
    if (this.ticketForm.valid) {
      const novoTicket = {
        ...this.ticketForm.value,
        autor: this.usuarioLogado?.nome || 'Anônimo',
        data: new Date().toLocaleString('pt-BR'),
        status: 'Aberto'
      };

      this.auth.criarTicket(novoTicket).subscribe(() => {
        this.ticketForm.reset();
        this.carregarTickets(); // Recarrega o feed automaticamente
      });
    }
  }
}