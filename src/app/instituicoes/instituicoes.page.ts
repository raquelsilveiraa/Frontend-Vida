// src/app/instituicoes/instituicoes.page.ts
import { Component }        from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { IonicModule, AlertController }      from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-instituicoes',
  templateUrl: './instituicoes.page.html',
  styleUrls: ['./instituicoes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class InstituicoesPage {

 
  filtrar = 'id';
  buscar  = '';

  unidades = [
    {
      id: 1,
      cnes: '9466061',
      nome: 'HEMATO',
      instituicao: 'HEMOCENTRO',
      categoria: 'CENTRO DE ATENÇÃO HEMATOLOGICA',
      municipio: 'JOÃO PESSOA',
      bairro: 'TORRE',
      telefone: '(83) 3434-2999'
    },

    {
      id: 2,
      cnes: '2606879',
      nome: 'HEMOCENTRO DE SOUSA',
      instituicao: 'HEMOCENTRO',
      categoria: 'CENTRO DE ATENÇÃO HEMATOLOGICA',
      municipio: 'SOUSA',
      bairro: 'JOSE FACUNDO DE LIRA',
      telefone: '(83) 3522-6364'
    },

    {
      id: 3,
      cnes: '2399598',
      nome: 'HEMOCENTRO DO ESTADO DA PARAIBA',
      instituicao: 'HEMOCENTRO',
      categoria: 'CENTRO DE ATENÇÃO HEMATOLOGICA',
      municipio: 'JOÃO PESSOA',
      bairro: 'CENTENARIO',
      telefone: '(83) 3133-3473'
    },

    {
      id: 4,
      cnes: '2612828',
      nome: 'HEMOCENTRO REGIONAL DE CAMPINA GRANDE',
      instituicao: 'HEMOCENTRO',
      categoria: 'CENTRO DE ATENÇÃO HEMATOLOGICA',
      municipio: 'CAMPINA GRANDE',
      bairro: 'CATOLE',
      telefone: '(83) 3310-7173'
    },

    {
      id: 5,
      cnes: '2613204',
      nome: 'HEMONUCLEO',
      instituicao: 'HEMONUCLEO',
      categoria: 'CENTRO DE ATENÇÃO HEMATOLOGICA',
      municipio: 'GUARABIRA',
      bairro: 'CENTRO',
      telefone: '(83) 3271-3001'
    },

    {
      id: 6,
      cnes: '2606321',
      nome: 'HEMONUCLEO DE CATOLE DO ROCHA',
      instituicao: 'HEMONUCLEO',
      categoria: 'CENTRO DE ATENÇÃO HEMATOLOGICA',
      municipio: 'CATOLE DO ROCHA',
      bairro: 'BATALHÃO',
      telefone: '(83) 3441-2281'
    },

    {
      id: 7,
      cnes: '2794047',
      nome: 'HEMONUCLEO DE ITAPORANGA',
      instituicao: 'HEMONUCLEO',
      categoria: 'CENTRO DE ATENÇÃO HEMATOLOGICA',
      municipio: 'ITAPORANGA',
      bairro: 'CENTRO',
      telefone: '(83) 3451-3819'
    },

    {
      id: 8,
      cnes: '2363410',
      nome: 'HEMONUCLEO DE MONTEIRO',
      instituicao: 'HEMONUCLEO',
      categoria: 'CENTRO DE ATENÇÃO HEMATOLOGICA',
      municipio: 'MONTEIRO',
      bairro: 'CENTRO',
      telefone: '(83) 3351-2004'
    },

    {
      id: 9,
      cnes: '2794055',
      nome: 'HEMONUCLEO DE PICUI',
      instituicao: 'HEMONUCLEO',
      categoria: 'CENTRO DE ATENÇÃO HEMATOLOGICA',
      municipio: 'PICUI',
      bairro: 'MONTE SANTO',
      telefone: '(83) 3371-2554'
    },

    {
      id: 10,
      cnes: '2794063',
      nome: 'HEMONUCLEO DE PRINCESA IZABEL',
      instituicao: 'HEMONUCLEO',
      categoria: 'CENTRO DE ATENÇÃO HEMATOLOGICA',
      municipio: 'PRINCESA IZABEL ',
      bairro: 'ALTO DA CASCAVEL',
      telefone: '(83) 3457-2938'
    },

    {
      id: 11,
      cnes: '2399598',
      nome: 'HEMONUCLEO DE ITABAINA',
      instituicao: 'HEMONUCLEO',
      categoria: 'CENTRO DE ATENÇÃO HEMATOLOGICA',
      municipio: 'ITABAIANA',
      bairro: 'NOVA ITABAIANA',
      telefone: '(83) 3281-2004'
    },

    {
      id: 12,
      cnes: '2794055',
      nome: 'HEMONUCLEO DE PIANCÓ',
      instituicao: 'HEMONUCLEO',
      categoria: 'CENTRO DE ATENÇÃO HEMATOLOGICA',
      municipio: 'PIANCÓ',
      bairro: 'OURO BRANCO',
      telefone: '(83) 3452-2733'
    },

    {
      id: 13,
      cnes: '2606321',
      nome: 'HEMONUCLEO DE CAJAZEIRAS',
      instituicao: 'HEMONUCLEO',
      categoria: 'CENTRO DE ATENÇÃO HEMATOLOGICA',
      municipio: 'CAJAZEIRAS',
      bairro: 'CENTRO',
      telefone: '(83) 3531-6687'
    },

    {
      id: 14,
      cnes: '2399598',
      nome: 'HEMONUCLEO DE PATOS',
      instituicao: 'HEMONUCLEO',
      categoria: 'CENTRO DE ATENÇÃO HEMATOLOGICA',
      municipio: 'PATOS',
      bairro: 'BELO HORIZONTE-BELA VISTA',
      telefone: '(83) 3423-2180'
    },

    
    
  ];

   constructor(private router: Router, private alertCtrl: AlertController) {}

  get unidadesFiltradas() {
    
    if (!this.buscar || this.buscar.trim() === '') {
      return this.unidades;
    }

    const busca = this.buscar.trim().toLowerCase();

    return this.unidades.filter((uni) => {
      switch (this.filtrar) {
        case 'id':
          
          return uni.id.toString().includes(busca);

        case 'nome':
          return uni.nome.toLowerCase().includes(busca);

        case 'municipio':
          return uni.municipio.toLowerCase().includes(busca);

        default:
          return true;
      }
    });
  }
 

 

  
  
 logout() {
   
    localStorage.removeItem('isLoggedIn');
  
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
  onAdicionar() {  }
  
}
