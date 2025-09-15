const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configurar o transportador de email
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Rota para enviar email
app.post('/send-email', async (req, res) => {
  try {
    const { nome, email, telefone, mensagem } = req.body;

    // Validar dados obrigatórios
    if (!nome || !email || !telefone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Nome, email e telefone são obrigatórios' 
      });
    }

    // Configurar o email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'Contato do Site - Viva Paineiras',
      html: `
        <h2>Novo contato do site Viva Paineiras</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Mensagem:</strong> ${mensagem || 'Não informada'}</p>
        <hr>
        <p><em>Interesse no empreendimento Viva Paineiras</em></p>
      `
    };

    // Enviar o email
    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Email enviado com sucesso!' 
    });

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erro interno do servidor' 
    });
  }
});

// Rota de teste
app.get('/test', (req, res) => {
  res.json({ message: 'Servidor funcionando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
