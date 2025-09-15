import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import './Rodape.css';

function Rodape() {
    return (
        <footer className="footer-section">
            <Container>
                <Row>
                    <Col className="text-center">
                        <p className="footer-copyright">
                            © 2025 Desenvolvido por Miller Marcelino
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Rodape;