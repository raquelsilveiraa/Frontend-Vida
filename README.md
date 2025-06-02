# Frontend-Vida

Este repositório contém o código-fonte do frontend de uma aplicação Ionic/Angular. A seguir estão as instruções para instalação, configuração e execução do projeto. O login 'admin' e senha '12345'.

🔧 Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

    Node.js (versão LTS recomendada)

    npm (vem junto com o Node.js)

    Ionic CLI

    Angular (ou instalar junto as dependências do projeto.)

    npm install -g @ionic/cli
    
    npm install -g @angular/cli

    Git (opcional, caso deseje clonar diretamente o repositório)

📥 Instalação

    Clone ou faça download deste repositório
    Se você estiver usando Git, rode:

git clone https://github.com/raquelsilveiraa/Frontend-Vida.git
cd frontend-vida-main/vida-app

Caso tenha baixado o arquivo ZIP, basta extrair e navegar até a pasta principal do projeto.

Instale as dependências
Dentro da pasta raiz do projeto (vida-app), execute:

    npm install

    Esse comando fará o download de todos os pacotes e bibliotecas necessárias (Angular, Ionic, etc.).

▶️ Como executar localmente

Para iniciar o servidor de desenvolvimento do Ionic, use:

ionic serve

    O comando ionic serve irá compilar o projeto, abrir uma janela do navegador (geralmente em http://localhost:8100/) e ativar o live reload.

    Sempre que você salvar mudanças nos arquivos, a página recarregará automaticamente.

⚙️ Configuração de Login

    Usuário padrão: admin

    Senha padrão: 12345


📦 Comandos Úteis

    Compilar sem servidor:

      ionic build

  Rodar no emulador (Android/iOS):

    ionic capacitor run android
    ionic capacitor run ios

(Requer configuração prévia de Capacitor e SDKs de plataforma)
