// src/app/notificacoes/notificacoes.page.ts
import { Component, OnInit }                                  from '@angular/core';
import { CommonModule }                                       from '@angular/common';
import { IonicModule }                                        from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router }                               from '@angular/router';
import { AlertaService, Alerta }                              from '../alerta.service';

@Component({
  selector   : 'app-notificacoes',
  standalone : true,
  templateUrl: './notificacoes.page.html',
  styleUrls  : ['./notificacoes.page.scss'],
  imports    : [IonicModule, CommonModule, ReactiveFormsModule, RouterModule]
})
export class NotificacoesPage implements OnInit {
  
  Alerta!: FormGroup;

  
  notificacoes: Alerta[] = [];

  
  tiposSanguineos = ['A', 'B', 'AB', 'O'];

 hemocentros = [
    'HEMATO',
    'HEMOCENTRO PARAIBA',
    'HEMOCENTRO CAMPINA GRANDE',
    'HEMOCENTRO PATOS',
    'HEMOCENTRO SOUSA',
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertaService: AlertaService
  ) {}

  

  ngOnInit(): void {
    
    this.Alerta = this.fb.group({
      tipoSanguineo: [null, Validators.required],
      rhPos        : [false],
      rhNeg        : [false],
      hemocentro   : [null, Validators.required]
    });

  
    this.alertaService.alertas$.subscribe(lista => {
      this.notificacoes = lista;
    });
  }


  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

 
  emitirAlerta(): void {
    if (this.Alerta.invalid) {
      return;
    }

   
    const dados = this.Alerta.value;
    const fatoresRH: ('+' | '-')[] = [];

    if (dados.rhPos) fatoresRH.push('+');
    if (dados.rhNeg) fatoresRH.push('-');

    
    const rhSelecionado: '+' | '-' = fatoresRH.length > 0 ? fatoresRH[0] : '+';

    
    const alerta: Alerta = {
      tipoSanguineo: dados.tipoSanguineo as string,
      rh           : rhSelecionado,
      hemocentro: dados.hemocentro,
      timestamp    : new Date()
      
    };

   
    this.alertaService.enviarAlerta(alerta);

    

    
  }


  goToDetalhesInstituicao(id: string): void {
    this.router.navigateByUrl(`/instituicoes/${id}`);
  }
}
