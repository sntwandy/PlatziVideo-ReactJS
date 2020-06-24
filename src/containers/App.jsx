import React, { useState,useEffect } from 'react';

// Styles
import '../assets/styles/App.scss';

// Components
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {
    const [ videos, setVideos ] = useState(
        {
            'mylist': [],
            'trends': [],
            'originals': []
        }
    );

    useEffect( () => {
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data))
    }, []);

    return(
        <React.Fragment>
            <Header />
            <Search />
            {
                videos.mylist.length > 0 &&
                <Categories title="My list">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            }

            <Categories title="Trending topic">
                <Carousel>
                {
                    videos.trends.map(item => <CarouselItem key={item.id} {...item} />)
                }
                </Carousel>
            </Categories>

            <Categories title="Platzi Originals">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>
            <Footer />
        </React.Fragment>
    );
};

export default App;