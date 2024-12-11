import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../assets/styles/swiper-bundle.min.css';
import '../assets/styles/Menu.css';
import { Navbar } from '../components/Navbar';
import { Canvas } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import {  OrbitControls } from '@react-three/drei';

// Importa los modelos de fondo desde la carpeta models-menu
import PollutionModel from './models-menu/Pollution';
import SequiaModel from './models-menu/Sequia';
import CoralModel from './models-menu/Coral';
import QuizModel from './models-menu/Quiz';

//Imagenes de las tarjetas:
import quizImg from '../assets/images/quiz.png';
import tarjeta1Img from '../assets/images/tarjeta1.png';
import tarjeta2Img from '../assets/images/tarjeta2.png';
import tarjeta3Img from '../assets/images/tarjeta3.png';

function CardSlider() {
  const navigate = useNavigate();
  const [activeModel, setActiveModel] = useState('pollution'); // Inicia en la primera tarjeta

  // Función para seleccionar el modelo JSX en función de la tarjeta activa
  const renderModel = () => {
    switch (activeModel) {
      case 'pollution':
        return <PollutionModel />;
      case 'scarcity':
        return <SequiaModel />;
      case 'acidification':
        return <CoralModel />;
      case 'evaluation':
        return <QuizModel />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <section className="containerM" style={{ position: 'relative' }}>
        {/* Texto genérico centrado y arriba */}
        <div 
          className="generic-text" 
          style={{ 
            position: 'absolute', 
            top: 25, 
            left: '50%', 
            transform: 'translateX(-50%)', 
            textAlign: 'center', 
            width: '50%', // Ajusta el ancho para que el texto no se extienda por toda la página
            maxWidth: '900px', // Establece un ancho máximo
            color: '#e2e2e2', // Cambia el color de la letra
          }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Explora y aprende sobre los problemas del agua</h2>
          <p style={{ fontSize: '16px' }}>El agua enfrenta graves problemas como la escasez, la contaminación y la acidificación, que afectan a millones de personas y ecosistemas en todo el mundo. Esta página explora cómo estos desafíos están poniendo en peligro este recurso vital y busca crear conciencia sobre la importancia de su conservación.</p>
        </div>
        {/* Canvas para el modelo 3D de fondo */}
        <Canvas className="background-canvas" style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {/* No se permite rotación ni zoom en OrbitControls */}
          <OrbitControls enableRotate={false} enableZoom={false} />
          {renderModel()}
        </Canvas>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={32}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          breakpoints={{
            650: { slidesPerView: 2 },
            975: { slidesPerView: 3 },
          }}
          className="card__content"
          style={{ marginTop: '50px' }}
          onSlideChange={(swiper) => {
            // Cambia el modelo de fondo en función de la tarjeta activa
            const index = swiper.realIndex;
            const models = [ 'scarcity', 'acidification',  'evaluation', 'pollution'];
            setActiveModel(models[index]);
          }}
        >
          {/* Tarjetas del carrusel */}
          <SwiperSlide>
            <article className="card__article swiper-slide">
              <div className="card__image">
                <img src={tarjeta1Img} alt="imagen" className="card__img" />
                <div className="card__shadow"></div>
              </div>
              <div className="card__data">
                <h3 className="card__name">CONTAMINACIÓN</h3>
                <p className="card__description">
                  Desde plásticos hasta desechos tóxicos ¡Descubre el impacto de la contaminación del agua!
                </p>
                <a
                  href="#"
                  className="card__button"
                  onClick={() => navigate('/pollution')}
                >
                  VER
                </a>
              </div>
            </article>
          </SwiperSlide>

          {/* Repite para las demás tarjetas */}
          <SwiperSlide>
            <article className="card__article swiper-slide">
              {/* Tarjeta de Escasez */}
              <div className="card__image">
                <img src={tarjeta2Img} alt="imagen" className="card__img" />
                <div className="card__shadow"></div>
              </div>
              <div className="card__data">
                <h3 className="card__name">ESCASEZ</h3>
                <p className="card__description">
                  El agua es un recurso limitado y la escasez es real ¡Explora las consecuencias de este fenómeno!
                </p>
                <a
                  href="#"
                  className="card__button"
                  onClick={() => navigate('/scarcity')}
                >
                  VER
                </a>
              </div>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="card__article swiper-slide">
              {/* Tarjeta de Acidificación */}
              <div className="card__image">
                <img src={tarjeta3Img}  alt="imagen" className="card__img" />
                <div className="card__shadow"></div>
              </div>
              <div className="card__data">
                <h3 className="card__name">ACIDIFICACIÓN</h3>
                <p className="card__description">
                  Los océanos se están volviendo más ácidos ¡Conoce este creciente desafío!
                </p>
                <a
                  href="#"
                  className="card__button"
                  onClick={() => navigate('/acidification')}
                >
                  VER
                </a>
              </div>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="card__article swiper-slide">
              {/* Tarjeta de Evaluación */}
              <div className="card__image">
                <img src={quizImg} alt="imagen" className="card__img" />
                <div className="card__shadow"></div>
              </div>
              <div className="card__data">
                <h3 className="card__name">EVALUACIÓN</h3>
                <p className="card__description">
                  Pon a prueba tus conocimientos ¡Aprende y diviértete!
                </p>
                <a
                  href="#"
                  className="card__button"
                  onClick={() => navigate('/evaluation')}
                >
                  VER
                </a>
              </div>
            </article>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-button-next">
          <i className="ri-arrow-right-s-line"></i>
        </div>
        <div className="swiper-button-prev">
          <i className="ri-arrow-left-s-line"></i>
        </div>

        <div className="swiper-pagination"></div>
      </section>
    </div>
  );
}

export default CardSlider;