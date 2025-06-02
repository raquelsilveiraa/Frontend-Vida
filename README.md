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

    Importante:

        Esses dados servem apenas para propósitos de desenvolvimento.

        Em ambiente de produção, troque imediatamente as credenciais ou configure um sistema de autenticação seguro.

Caso seja necessário alterar esse usuário/senha, localize o arquivo de configuração de autenticação (normalmente em src/app/services/auth.service.ts ou similar) e modifique conforme o back-end em uso.
📁 Estrutura de Pastas (exemplo simplificado)

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
└── README.md                  # Arquivo que você está lendo

Essa é uma visão geral; a estrutura real pode conter outras pastas (e.g., .angular/, www/, etc.), mas o foco para desenvolvimento está em src/.
📦 Comandos Úteis

    Compilar sem servidor

ionic build

Gera os arquivos de produção na pasta www/.

Rodar no emulador (Android/iOS)

ionic capacitor run android
ionic capacitor run ios

(Requer configuração prévia de Capacitor e SDKs de plataforma)
