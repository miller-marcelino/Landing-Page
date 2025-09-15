import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import vivaVideo from '../../Videos/vivapaineiras.mp4';
import redarioIcon from '../../Imagens/redario.png';
import tirolesaIcon from '../../Imagens/tirolesa.png';
import { FaHome, FaUtensils, FaLeaf, FaSwimmingPool, FaWifi, FaParking } from 'react-icons/fa';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <FaHome />,
      title: "2 quartos suíte ou 2 quartos suíte (Sala Ampliada)",
      description: "Apartamentos espaçosos e bem planejados"
    },
    {
      icon: <FaUtensils />,
      title: "Varanda Gourmet em todas as unidades",
      description: "Espaço perfeito para momentos especiais"
    },
    {
      icon: <FaHome />,
      title: "Cozinha integrada com sala",
      description: "Conceito moderno de integração"
    },
    {
      icon: <FaWifi />,
      title: "Tubulação split instalada",
      description: "Preparado para ar condicionado"
    },
    {
      icon: <FaParking />,
      title: "Localização estratégica",
      description: "Une mobilidade e tranquilidade"
    },
    {
      icon: <FaLeaf />,
      title: "Terreno cercado por natureza",
      description: "Ambiente natural preservado"
    },
    {
      icon: <FaSwimmingPool />,
      title: "Condomínio Clube",
      description: "Mais de 30 itens de lazer"
    }
  ];

  return (
    <section id="empreendimento" className="about-section">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">O Empreendimento</h2>
            <p className="section-subtitle">
              O Viva Paineiras tem uma estrutura de lazer 
              completa e conectada com a natureza. Um novo
              conceito de moradia. O lugar perfeito para você
              se divertir, trabalhar, treinar, cuidar do seu pet 
              e retomar o fôlego. Viver bem é oque importa.
            </p>
            
            <div className="video-container">
              <video 
                controls 
                className="about-video"
                poster=""
              >
                <source src={vivaVideo} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            
            <div className="viver-bem-section">
              <h3 className="viver-bem-title">Viver bem é o que importa:</h3>
              <div className="viver-bem-content">
                <ul className="viver-bem-list">
                  <li>2 quartos suíte ou 2 quartos suíte (Sala Ampliada)</li>
                  <li>Varanda Gourmet em todas as unidades</li>
                  <li>Cozinha integrada com sala</li>
                  <li>Tubulação split instalada</li>
                  <li>Localização estratégica que une mobilidade e tranquilidade</li>
                  <li>Terreno cercado por natureza</li>
                  <li>Condomínio Clube com mais de 30 itens de lazer</li>
                </ul>
              </div>
            </div>

            <div className="motivos-section">
              <h3 className="motivos-title">32 Motivos Para Viver Melhor</h3>
              <div className="amenities-grid">
                <div className="amenity-item">
                  <div className="amenity-icon">🏃‍♀️</div>
                  <span className="amenity-label">Mini Trilha</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">⚽</div>
                  <span className="amenity-label">Campinho</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🏀</div>
                  <span className="amenity-label">Paredão de basquete</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🌱</div>
                  <span className="amenity-label">Horta comunitária</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🚴‍♂️</div>
                  <span className="amenity-label">Bicicletário</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">
                    <img src={redarioIcon} alt="Redário" className="amenity-image" />
                  </div>
                  <span className="amenity-label">Redário</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🏊‍♂️</div>
                  <span className="amenity-label">Piscina adulto</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🧒</div>
                  <span className="amenity-label">Piscina infantil</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🌊</div>
                  <span className="amenity-label">Prainha</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🏛️</div>
                  <span className="amenity-label">Caramanchão</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🍖</div>
                  <span className="amenity-label">Espaços churrasco 1, 2, 3 e 4</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🧺</div>
                  <span className="amenity-label">Espaço piquenique</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🌳</div>
                  <span className="amenity-label">Bosque</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🛝</div>
                  <span className="amenity-label">Playground</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🏠</div>
                  <span className="amenity-label">Casa na árvore</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">
                    <img src={tirolesaIcon} alt="Tirolesa" className="amenity-image" />
                  </div>
                  <span className="amenity-label">Tirolesa</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🐕</div>
                  <span className="amenity-label">Espaço pet</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🧘‍♀️</div>
                  <span className="amenity-label">Espaço zen</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🍺</div>
                  <span className="amenity-label">Pub</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🍽️</div>
                  <span className="amenity-label">Espaço gourmet</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">💼</div>
                  <span className="amenity-label">Coworking</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">👥</div>
                  <span className="amenity-label">Sala de Reunião</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🎬</div>
                  <span className="amenity-label">Cinema</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🛒</div>
                  <span className="amenity-label">Mini mercado</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🎲</div>
                  <span className="amenity-label">Salão de jogos</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">👕</div>
                  <span className="amenity-label">Lavanderia</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">👶</div>
                  <span className="amenity-label">Espaço kids</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">🎉</div>
                  <span className="amenity-label">Salão de festas</span>
                </div>
                <div className="amenity-item">
                  <div className="amenity-icon">💪</div>
                  <span className="amenity-label">Academia</span>
                </div>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
