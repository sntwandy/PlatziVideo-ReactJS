import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';

// Styles
import '../assets/styles/App.scss';

// Components
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

// Hooks
// import useInitialState from '../hooks/useInitialState';

const Home = ( { myList, trends, originals } ) => {
    return(
        <>
            <Search />
            {
                myList.length > 0 &&
                <Categories title="My list">
                    <Carousel>
                        {
                            myList.map(item => <CarouselItem key={item.key} {...item} isList /> )
                        }
                    </Carousel>
                </Categories>
            }

            <Categories title="Trending topic">
                <Carousel>
                {
                    trends.map(item => <CarouselItem key={item.id} {...item} />)
                }
                </Carousel>
            </Categories>

            <Categories title="Platzi Originals">
                <Carousel>
                {
                    originals.map( item => <CarouselItem key={item.id} {...item} /> )
                }
                </Carousel>
            </Categories>
        </>
    );
};

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };
};

export default connect(mapStateToProps, null)(Home);