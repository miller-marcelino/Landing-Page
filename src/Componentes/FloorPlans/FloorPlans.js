import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import './FloorPlans.css';

const FloorPlans = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Import images
  const planta1 = require('../../Imagens/planta1.jpg');
  const planta2 = require('../../Imagens/planta2.jpg');

  const floorPlans = [
    {
      id: 1,
      src: planta1,
      alt: "Implantação do Condomínio",
      title: "Implantação",
      orientation: "vertical"
    },
    {
      id: 2,
      src: planta2, 
      alt: "Plantas dos Apartamentos",
      title: "Plantas",
      orientation: "horizontal"
    }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <section id="plantas" className="floor-plans-section">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">PLANTAS E IMPLANTAÇÃO</h2>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          {floorPlans.map((plan) => (
            <Col 
              lg={plan.orientation === 'horizontal' ? 8 : 4} 
              md={plan.orientation === 'horizontal' ? 8 : 4} 
              sm={12} 
              className="mb-4" 
              key={plan.id}
            >
              <div 
                className={`floor-plan-item ${plan.orientation}`}
                onClick={() => handleImageClick(plan)}
              >
                <img 
                  src={plan.src}
                  alt={plan.alt}
                  className="floor-plan-image"
                />
                <div className="floor-plan-overlay">
                  <span className="floor-plan-title">{plan.title}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for enlarged view */}
      <Modal 
        show={showModal} 
        onHide={handleClose} 
        size="xl" 
        centered
        className="floor-plan-modal"
      >
        <Modal.Header closeButton className="border-0">
        </Modal.Header>
        <Modal.Body className="p-0">
          {selectedImage && (
            <img 
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-image"
            />
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default FloorPlans;
