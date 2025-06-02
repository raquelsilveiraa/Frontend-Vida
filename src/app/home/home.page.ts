
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';
import { AlertaService, Alerta } from '../alerta.service';
import { Subscription }      from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})



export class HomePage implements  OnInit {
   alertas: Alerta[] = [];
  private sub!: Subscription;
  
  constructor(private router: Router, private alertaService: AlertaService) {}

  ngOnInit() {
    
    this.sub = this.alertaService.alertas$.subscribe(lista => {
      this.alertas = lista;
    });
  }

  logout() {
   
    localStorage.removeItem('isLoggedIn');
   
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
