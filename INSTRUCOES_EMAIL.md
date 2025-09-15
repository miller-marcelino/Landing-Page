# Configuração do Envio Direto de Emails

## Passos para Ativar o Envio Direto:

### 1. Configurar Email no Gmail
1. Acesse sua conta Gmail (rosalisouza1@gmail.com)
2. Vá em "Gerenciar sua Conta do Google"
3. Clique em "Segurança"
4. Ative a "Verificação em duas etapas"
5. Gere uma "Senha de app" para o projeto

### 2. Configurar o Servidor
1. Abra o arquivo `server/.env`
2. Substitua as configurações:
   ```
   EMAIL_USER=rosalisouza1@gmail.com
   EMAIL_PASS=sua_senha_de_app_aqui
   ```

### 3. Iniciar o Servidor
```bash
cd server
npm start
```

### 4. Testar
- O servidor rodará na porta 3001
- O formulário enviará emails diretamente para rosalisouza1@gmail.com
- Não abrirá mais o cliente de email

## Estrutura Criada:
- `server/` - Backend Node.js
- `server/server.js` - API para envio de emails
- `server/.env` - Configurações do email
- Frontend atualizado para usar a API

## Como Funciona:
1. Usuário preenche o formulário
2. Dados são enviados para a API (localhost:3001)
3. API envia email diretamente via SMTP
4. Usuário vê mensagem de sucesso
5. Formulário é limpo automaticamente
