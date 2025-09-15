import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaTree, FaBasketballBall, FaSwimmingPool, FaChild, FaBicycle, 
  FaLeaf, FaUtensils, FaGamepad, FaFilm, FaStore, FaDumbbell,
  FaBirthdayCake, FaDog, FaCouch, FaLaptop, FaMeetup, FaSeedling,
  FaHome, FaWater, FaUmbrellaBeach, FaFire, FaHeart, FaGlassCheers,
  FaUsers, FaTshirt, FaMusic, FaCamera, FaGift, FaCoffee, FaBook,
  FaSun, FaMountain, FaHandsHelping
} from 'react-icons/fa';
import './Amenities.css';

const Amenities = () => {
  const amenities = [
    { icon: <FaTree />, name: "Mini Trilha", color: "#4a7c59" },
    { icon: <FaBasketballBall />, name: "Campinho", color: "#ff6b35" },
    { icon: <FaBasketballBall />, name: "Paredão de basquete", color: "#f7931e" },
    { icon: <FaSeedling />, name: "Horta comunitária", color: "#4a7c59" },
    { icon: <FaBicycle />, name: "Bicicletário", color: "#2c5530" },
    { icon: <FaLeaf />, name: "Redário", color: "#6b9b7a" },
    { icon: <FaSwimmingPool />, name: "Piscina adulto", color: "#4a90e2" },
    { icon: <FaChild />, name: "Piscina infantil", color: "#5cb3cc" },
    { icon: <FaUmbrellaBeach />, name: "Prainha", color: "#f4d03f" },
    { icon: <FaHome />, name: "Caramanchão", color: "#8b4513" },
    { icon: <FaFire />, name: "Espaços churrasco 1, 2, 3 e 4", color: "#e74c3c" },
    { icon: <FaUtensils />, name: "Espaço piquenique", color: "#27ae60" },
    { icon: <FaTree />, name: "Bosque", color: "#2d5016" },
    { icon: <FaChild />, name: "Playground", color: "#e67e22" },
    { icon: <FaHome />, name: "Casa na árvore", color: "#8b4513" },
    { icon: <FaMountain />, name: "Tirolesa", color: "#34495e" },
    { icon: <FaDog />, name: "Espaço pet", color: "#9b59b6" },
    { icon: <FaHeart />, name: "Espaço zen", color: "#1abc9c" },
    { icon: <FaGlassCheers />, name: "Pub", color: "#8e44ad" },
    { icon: <FaUtensils />, name: "Espaço gourmet", color: "#e74c3c" },
    { icon: <FaLaptop />, name: "Coworking", color: "#3498db" },
    { icon: <FaMeetup />, name: "Sala de Reunião", color: "#2c3e50" },
    { icon: <FaFilm />, name: "Cinema", color: "#e74c3c" },
    { icon: <FaStore />, name: "Mini mercado", color: "#f39c12" },
    { icon: <FaGamepad />, name: "Salão de jogos", color: "#9b59b6" },
    { icon: <FaTshirt />, name: "Lavanderia", color: "#3498db" },
    { icon: <FaChild />, name: "Espaço kids", color: "#e67e22" },
    { icon: <FaBirthdayCake />, name: "Salão de festas", color: "#e91e63" },
    { icon: <FaDumbbell />, name: "Academia", color: "#34495e" },
    { icon: <FaMusic />, name: "Espaço música", color: "#9c27b0" },
    { icon: <FaCoffee />, name: "Café lounge", color: "#795548" },
    { icon: <FaHandsHelping />, name: "Espaço convivência", color: "#ff5722" }
  ];

  return (
    <section id="motivos" className="amenities-section">
      <Container>
        
        
      </Container>
    </section>
  );
};

export default Amenities;
