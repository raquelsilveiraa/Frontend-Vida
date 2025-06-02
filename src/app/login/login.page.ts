
import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  formulario: FormGroup;

  constructor(
    private construtor: FormBuilder,
    private navegacao: Router,
    private sinalAlerta: AlertController
  ) {
    this.formulario = this.construtor.group({
      login: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  async login() {
    const { login, senha } = this.formulario.value;
    if (login === 'admin' && senha === '12345') {
      
      this.navegacao.navigateByUrl('/home', { replaceUrl: true });
    } else {
      const alert = await this.sinalAlerta.create({
        header: 'Erro',
        message: 'Usuário ou senha inválidos',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  async esqueceuSenha(): Promise<void> {
    const alert = await this.sinalAlerta.create({
      header: 'Recuperar Senha',
      message: 'Digite o seu e-mail para recuperar senha:',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'admin@gmail.com'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Enviar',
          handler: (data) => {
           
            console.log('E-mail para recuperação:', data.email);
           
          }
        }
      ]
    });

    await alert.present();
  }
}
