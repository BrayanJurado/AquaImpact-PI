import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../assets/styles/swiper-bundle.min.css';
import '../assets/styles/Menu.css';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate
import { Navigation, Pagination } from 'swiper/modules';

import quizImg from '../assets/images/quiz.png';
import tarjeta1Img from '../assets/images/tarjeta1.png';
import tarjeta2Img from '../assets/images/tarjeta2.png';
import tarjeta3Img from '../assets/images/tarjeta3.png';

function CardSlider() {
  const navigate = useNavigate();  // Define el hook useNavigate

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
            600: { slidesPerView: 2 },
            968: { slidesPerView: 3 },
          }}
          className="card__content"
        >
          <div className="swiper-wrapper">
            {/* Tarjeta 1 - Pollution */}
            <SwiperSlide>
              <article className="card__article swiper-slide">
                <div className="card__image">
                  <img src={tarjeta1Img} alt="image" className="card__img" />
                  <div className="card__shadow"></div>
                </div>
                <div className="card__data">
                  <h3 className="card__name">POLLUTION</h3>
                  <p className="card__description">
                  From plastics to toxic waste ¡Discover the impact of water pollution!
                  </p>
                  <a
                    href="#"
                    className="card__button"
                    onClick={() => navigate('/pollution')}  // Redirige a la sección de Pollution
                  >
                    EXPLORE
                  </a>
                </div>
              </article>
            </SwiperSlide>

            {/* Tarjeta 2 - Scarcity */}
            <SwiperSlide>
              <article className="card__article swiper-slide">
                <div className="card__image">
                  <img src={tarjeta2Img} alt="image" className="card__img" />
                  <div className="card__shadow"></div>
                </div>
                <div className="card__data">
                  <h3 className="card__name">SCARCITY</h3>
                  <p className="card__description">
                  Water is a limited resource and scarcity is real ¡Explore the consequences of this phenomenon!
                  </p>
                  <a
                    href="#"
                    className="card__button"
                    onClick={() => navigate('/scarcity')}  // Redirige a la sección de Scarcity
                  >
                    EXPLORE
                  </a>
                </div>
              </article>
            </SwiperSlide>

            {/* Tarjeta 3 - Acidification */}
            <SwiperSlide>
              <article className="card__article swiper-slide">
                <div className="card__image">
                  <img src={tarjeta3Img} alt="image" className="card__img" />
                  <div className="card__shadow"></div>
                </div>
                <div className="card__data">
                  <h3 className="card__name">ACIDIFICATION</h3>
                  <p className="card__description">
                  The oceans are becoming more acidic ¡Learn about this growing challenge!
                  </p>
                  <a
                    href="#"
                    className="card__button"
                    onClick={() => navigate('/acidification')}  // Redirige a la sección de Acidification
                  >
                    EXPLORE
                  </a>
                </div>
              </article>
            </SwiperSlide>

            {/* Tarjeta 4 - Evaluation */}
            <SwiperSlide>
              <article className="card__article swiper-slide">
                <div className="card__image">
                  <img src={quizImg} alt="image" className="card__img" />
                  <div className="card__shadow"></div>
                </div>
                <div className="card__data">
                  <h3 className="card__name">EVALUATION</h3>
                  <p className="card__description">
                  Test your knowledge ¡Learn and have fun!
                  </p>
                  <a
                    href="#"
                    className="card__button"
                    onClick={() => navigate('/evaluation')}  // Redirige a la sección de Evaluation
                  >
                    EXPLORE
                  </a>
                </div>
              </article>
            </SwiperSlide>
          </div>

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
