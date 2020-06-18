import React from 'react';

// Styles
import '../assets/styles/components/Carousel.scss';

const Carousel = ( { children } ) => {
    return(
        <section className="carousel">
            <div className="carousel__container">
                {children}
            </div>
        </section>
    );
};

export default Carousel;