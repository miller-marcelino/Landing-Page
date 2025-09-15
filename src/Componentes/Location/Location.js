import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Location.css';

const Location = () => {
  return (
    <section id="localizacao" className="location-section">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">LOCALIZAÇÃO</h2>
            <p className="section-subtitle">
              Viva Paineiras está estrategicamente localizado em uma das melhores regiões
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={10} md={12}>
            <div className="map-container">
              <iframe
                src="https://maps.google.com/maps?q=Viva+Paineiras+Condominio,+AV+PREFEITO+SEVERINO+CUNHA+PRIMO,+Jardim+Paulista,+Paulista,+PE&t=k&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Viva Paineiras - Paulista PE"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Location;
