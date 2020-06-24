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

// Hooks
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {
    const InitialState = useInitialState(API);

    return(
        <React.Fragment>
            <Header />
            <Search />
            {
                InitialState.mylist.length > 0 &&
                <Categories title="My list">
                    <Carousel>
                        {
                            InitialState.mylist.map(item => <CarouselItem key={item.key} {...item} /> )
                        }
                    </Carousel>
                </Categories>
            }

            <Categories title="Trending topic">
                <Carousel>
                {
                    InitialState.trends.map(item => <CarouselItem key={item.id} {...item} />)
                }
                </Carousel>
            </Categories>

            <Categories title="Platzi Originals">
                <Carousel>
                {
                    InitialState.originals.map( item => <CarouselItem key={item.id} {...item} /> )
                }
                </Carousel>
            </Categories>
            <Footer />
        </React.Fragment>
    );
};

export default App;