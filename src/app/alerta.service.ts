
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Alerta {
  tipoSanguineo: string;
  rh: '+' | '-';
  hemocentro?: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AlertaService {
  
  private alertasSubject = new BehaviorSubject<Alerta[]>([]);

  
  get alertas$(): Observable<Alerta[]> {
    return this.alertasSubject.asObservable();
  }

 
  enviarAlerta(novoAlerta: Alerta) {
    const atuais = this.alertasSubject.value;
   
    this.alertasSubject.next([novoAlerta, ...atuais]);
  }

  
  limparAlertas() {
    this.alertasSubject.next([]);
  }
}
