import React from 'react';
import Menu from '../../Componentes/Menu/Menu';
import Header from '../../Componentes/Header/Header';
import About from '../../Componentes/About/About';
import Video from '../../Componentes/Video/Video';
import Gallery from '../../Componentes/Gallery/Gallery';
import FloorPlans from '../../Componentes/FloorPlans/FloorPlans';
import Location from '../../Componentes/Location/Location';
import Amenities from '../../Componentes/Amenities/Amenities';
import Contact from '../../Componentes/Contact/Contact';
import Rodape from '../../Componentes/Rodape/Rodape';

function Home() {
  return (
    <>
      <Header />
      <About />
      <Video />
      <Gallery />
      <FloorPlans />
      <Location />
      <Amenities />
      <Contact />
      <Rodape />
    </>
  );
}

export default Home;
