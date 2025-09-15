import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Menu.css';

const Menu = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="white" expand="lg" fixed="top" className="custom-navbar shadow-sm" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">
          <span className="brand-text">Bora Incorporadora</span>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#empreendimento" onClick={() => setExpanded(false)}>
              O Empreendimento
            </Nav.Link>
            <Nav.Link href="#video" onClick={() => setExpanded(false)}>
              Vídeo
            </Nav.Link>
            <Nav.Link href="#galeria" onClick={() => setExpanded(false)}>
              Galeria
            </Nav.Link>
            <Nav.Link href="#motivos" onClick={() => setExpanded(false)}>
              32 Motivos
            </Nav.Link>
            <Nav.Link href="#contato" onClick={() => setExpanded(false)}>
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
