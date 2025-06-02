

import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';

interface RegistroHist {
  data: string;   
  local: string;
  tipo: string;
}

@Component({
  selector   : 'app-agendamento',
  standalone : true,
  templateUrl: './agendamento.page.html',
  styleUrls  : ['./agendamento.page.scss'],
  imports    : [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, DatePipe, RouterModule]
})
export class AgendamentoPage {


  instituicoes = [
    'HEMOCENTRO REGIONAL DE CAMPINA GRANDE',
    'HEMOCENTRO DO ESTADO DA PARAÍBA',
    'HEMONÚCLEO DE SOUSA',
    'HEMONÚCLEO DE MONTEIRO',
    'HEMONÚCLEO DE CAJAZEIRAS',
    'HEMONÚCLEO DE PICUÍ',
    'TODAS'
  ];


  horariosMap: Record<string, string[]> = {
    DEFAULT: [
      '07:30',
      '08:00',
      '08:30',
      '09:00',
      '11:00',
      '14:00',
      '15:00',
      '16:00'
    ]
  };

  
  formFiltro = this.fb.group({
    instituicao: [null, Validators.required],
    data       : [null, Validators.required],
    horario    : [null, Validators.required],
    historico  : ['nao', Validators.required] 
  });

  
  get horarios(): string[] {
    return this.formFiltro.value.instituicao
           ? this.horariosMap['DEFAULT']
           : [];
  }

  step: 'form' | 'detalhe' | 'historico' = 'form';


  historico: RegistroHist[] = [
    { data: '2025-01-08', local: 'HEMOCENTRO - CAMPINA GRANDE', tipo: 'AB+' },
    { data: '2023-05-06', local: 'HEMOCENTRO - GUARABIRA', tipo: 'O-' },
    { data: '2025-03-14', local: 'HEMOCENTRO - CAMPINA GRANDE', tipo: 'AB+' },
    { data: '2024-04-25', local: 'HEMOCENTRO - SOUSA', tipo: 'B+' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  
  onVisualizar() {
    if (this.formFiltro.invalid) return;
    if (this.formFiltro.value.historico === 'sim') {
      this.step = 'historico';
    } else {
      this.step = 'detalhe';
    }
  }
  
  voltar() {
    this.step = 'form';
    
    this.formFiltro.patchValue({ historico: 'nao' });
  }

 
  onExportar() {
    console.log('TODO: implementar exportação');
    
  }

   logout() {
    
    localStorage.removeItem('isLoggedIn');
    
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
