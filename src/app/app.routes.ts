import { Routes } from '@angular/router';

export const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.page').then((m) => m.LoginPage),
  },

 
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },

  {
    path: 'instituicoes',
    loadComponent: () =>
      import('./instituicoes/instituicoes.page').then(
        (m) => m.InstituicoesPage
      ),
  },
 
 
  {
    path: 'agendamento',
    loadComponent: () =>
      import('./agendamento/agendamento.page').then(
        (m) => m.AgendamentoPage
      ),
  },
  {
    path: 'notificacoes',
    loadComponent: () =>
      import('./notificacoes/notificacoes.page').then(
        (m) => m.NotificacoesPage
      ),
  },

  
  {
    path: '**',
    redirectTo: 'login',
  },
];
