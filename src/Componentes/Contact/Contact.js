import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xblaeljw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          mensagem: formData.mensagem,
          _replyto: formData.email,
          _subject: 'Contato - Viva Paineiras'
        })
      });

      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
      } else {
        throw new Error('Erro no envio');
      }
    } catch (error) {
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  const handleWhatsApp = () => {
    // Criar mensagem com os dados do formulário
    const message = `Olá! Vim do site e gostaria de mais informações sobre o Viva Paineiras.

*Meus dados:*
Nome: ${formData.nome}
Email: ${formData.email}
Telefone: ${formData.telefone}
${formData.mensagem ? `Mensagem: ${formData.mensagem}` : ''}

Aguardo retorno!`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+5581992474532&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form após envio
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    });
  };

  return (
    <section id="contato" className="contact-section">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">
              Convites conectam pessoas, somam forças, superam desafios, fazem a gente ir além do esperado. 
              Que tal a gente se conectar agora? Bora!
            </h2>
          </Col>
        </Row>
        
        <Row>
          <Col lg={8} className="mx-auto">
            {showAlert && (
              <Alert variant="success" className="mb-4">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </Alert>
            )}
            
            <div className="contact-form-container">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Nome</Form.Label>
                      <Form.Control
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome completo"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Telefone</Form.Label>
                      <Form.Control
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        placeholder="(81) 99999-9999"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label>Mensagem (opcional)</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        placeholder="Deixe sua mensagem aqui..."
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <div className="form-buttons">
                  <Button type="submit" className="submit-button">
                    <FaEnvelope className="me-2" />
                    Enviar Mensagem
                  </Button>
                  
                  <Button 
                    type="button" 
                    className="whatsapp-button"
                    onClick={handleWhatsApp}
                  >
                    <FaWhatsapp className="me-2" />
                    WhatsApp
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
