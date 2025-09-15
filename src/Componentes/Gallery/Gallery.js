import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import './Gallery.css';

// Import gallery images
const galeria1 = require('../../Imagens/galeria1.jpeg');
const galeria2 = require('../../Imagens/galeria2.jpeg');
const galeria3 = require('../../Imagens/galeria3.jpeg');
const galeria4 = require('../../Imagens/galeria4.jpeg');
const galeria5 = require('../../Imagens/galeria5.jpeg');
const galeria6 = require('../../Imagens/galeria6.jpeg');
const galeria7 = require('../../Imagens/galeria7.jpeg');
const galeria8 = require('../../Imagens/galeria8.jpeg');
const galeria9 = require('../../Imagens/galeria9.jpeg');
const galeria10 = require('../../Imagens/galeria10.jpeg');
const galeria11 = require('../../Imagens/galeria11.jpeg');
const galeria12 = require('../../Imagens/galeria12.jpeg');

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileCarouselIndex, setMobileCarouselIndex] = useState(0);

  const images = [
    { id: 1, src: galeria1, alt: "Viva Paineiras 1" },
    { id: 2, src: galeria2, alt: "Viva Paineiras 2" },
    { id: 3, src: galeria3, alt: "Viva Paineiras 3" },
    { id: 4, src: galeria4, alt: "Viva Paineiras 4" },
    { id: 5, src: galeria5, alt: "Viva Paineiras 5" },
    { id: 6, src: galeria6, alt: "Viva Paineiras 6" },
    { id: 7, src: galeria7, alt: "Viva Paineiras 7" },
    { id: 8, src: galeria8, alt: "Viva Paineiras 8" },
    { id: 9, src: galeria9, alt: "Viva Paineiras 9" },
    { id: 10, src: galeria10, alt: "Viva Paineiras 10" },
    { id: 11, src: galeria11, alt: "Viva Paineiras 11" },
    { id: 12, src: galeria12, alt: "Viva Paineiras 12" },
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const handlePrevious = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Mobile carousel navigation
  const handleMobilePrevious = () => {
    setMobileCarouselIndex(mobileCarouselIndex === 0 ? images.length - 1 : mobileCarouselIndex - 1);
  };

  const handleMobileNext = () => {
    setMobileCarouselIndex(mobileCarouselIndex === images.length - 1 ? 0 : mobileCarouselIndex + 1);
  };

  return (
    <section id="galeria" className="gallery-section">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title" style={{marginTop: '-50px'}}>Galeria de Imagens</h2>
            <p className="section-subtitle">
              Conheça todos os detalhes do Viva Paineiras através das nossas imagens também
            </p>
          </Col>
        </Row>
        
        {/* Desktop Grid Layout */}
        {!isMobile && (
          <Row>
            {images.map((image, index) => (
              <Col lg={3} md={4} sm={6} xs={12} className="mb-4" key={index}>
                <div 
                  className="gallery-item"
                  onClick={() => handleImageClick(image, index)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="gallery-image"
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-icon">🔍</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}

        {/* Mobile Carousel Layout */}
        {isMobile && (
          <div className="mobile-carousel">
            <div className="mobile-carousel-container">
              <div 
                className="gallery-item mobile-gallery-item"
                onClick={() => handleImageClick(images[mobileCarouselIndex], mobileCarouselIndex)}
              >
                <img 
                  src={images[mobileCarouselIndex].src} 
                  alt={images[mobileCarouselIndex].alt}
                  className="gallery-image mobile-gallery-image"
                />
                <div className="gallery-overlay">
                  <span className="gallery-icon">🔍</span>
                </div>
              </div>
              
              <button 
                className="mobile-nav-btn mobile-prev-btn"
                onClick={handleMobilePrevious}
                aria-label="Imagem anterior"
              >
                &#8249;
              </button>
              <button 
                className="mobile-nav-btn mobile-next-btn"
                onClick={handleMobileNext}
                aria-label="Próxima imagem"
              >
                &#8250;
              </button>
              
              <div className="mobile-counter">
                {mobileCarouselIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </Container>

      <Modal show={showModal} onHide={handleClose} size="xl" centered className="gallery-modal">
        <Modal.Header closeButton className="border-0">
          <Modal.Title>{selectedImage?.alt}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0 position-relative">
          {selectedImage && (
            <>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="modal-image"
              />
              <button 
                className="modal-nav-btn modal-prev-btn"
                onClick={handlePrevious}
                aria-label="Imagem anterior"
              >
                &#8249;
              </button>
              <button 
                className="modal-nav-btn modal-next-btn"
                onClick={handleNext}
                aria-label="Próxima imagem"
              >
                &#8250;
              </button>
              <div className="modal-counter">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Gallery;
