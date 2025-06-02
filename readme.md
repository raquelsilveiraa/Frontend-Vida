Projeto Frontend-Vida

Este repositório contém o código-fonte do frontend de uma aplicação Ionic/Angular. A seguir estão as instruções para instalação, configuração e execução do projeto. Assim como as credenciais de login 'admin' e senha '12345'. 

🔧 Pré-requisitos

    É necessário ter ferramentas instaladas em seu sistema:

    Node.js 

    npm 

    Ionic CLI

    npm install -g @ionic/cli

📥 Instalação

    Clone ou faça download deste repositório
    Se você estiver usando Git, rode:

git clone https://github.com/raquelsilveiraa/Frontend-Vida
cd frontend/vida-app

Caso tenha baixado o arquivo ZIP, basta extrair e navegar até a pasta principal do projeto:

unzip frontend.zip
cd frontend/vida-app

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

    
    Estrutura

vida-app/
├── src/
│   ├── app/
│   │   ├── pages/             # Pages (telas) da aplicação
│   │   ├── services/          # Serviços (API, autenticação, etc.)
│   │   ├── components/        # Componentes compartilhados
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets/                # Imagens, ícones, estilos estáticos
│   ├── environments/          # Configurações de ambiente (dev/prod)
│   ├── theme/                 # Variáveis de tema e estilos globais
│   ├── index.html
│   └── main.ts
├── ionic.config.json  
├── package.json  
├── tsconfig.json  
└── README.md                  


📦 Comandos Úteis

    Compilar sem servidor:

        ionic build



    Rodar no emulador (Android/iOS):

    ionic capacitor run android
    ionic capacitor run ios