import React from 'react';

// Styles
import '../assets/styles/components/CarouselItem.scss';

// Assets
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
const CarouselItem = () => {
    return(
        <div class="carousel-item">
            <img class="carousel-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
            <div class="carousel-item__details">
            <div>
                <img class="carousel-item__details--img" src={playIcon} alt="Play Icon" />
                <img class="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
            </div>
            <p class="carousel-item__details--title">Título descriptivo</p>
            <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
            </div>
        </div>
    );
};

export default CarouselItem;