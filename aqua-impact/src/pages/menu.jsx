import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../assets/styles/swiper-bundle.min.css';
import '../assets/styles/Menu.css';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';

import quizImg from '../assets/images/quiz.png';
import tarjeta1Img from '../assets/images/tarjeta1.png';
import tarjeta2Img from '../assets/images/tarjeta2.png';
import tarjeta3Img from '../assets/images/tarjeta3.png';

function CardSlider() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <section className="containerM">
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
        >
            <SwiperSlide>
            {/*Tarjeta 1 contaminación*/}
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

            <SwiperSlide>
            {/*Tarjeta 2 Escacez*/}
              <article className="card__article swiper-slide">
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
            {/*Tarjeta 3 Acidificacion */}
              <article className="card__article swiper-slide">
                <div className="card__image">
                  <img src={tarjeta3Img} alt="imagen" className="card__img" />
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
            {/*Tarjeta 4 Evaluacion */}
              <article className="card__article swiper-slide">
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

          <div className="swiper-button-next">
            <i className="ri-arrow-right-s-line"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="ri-arrow-left-s-line"></i>
          </div>

          <div className="swiper-pagination"></div>
        </Swiper>
      </section>
    </div>
  );
}

export default CardSlider;
