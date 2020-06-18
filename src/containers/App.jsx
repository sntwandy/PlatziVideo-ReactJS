import React from 'react';

// Styles
import '../assets/styles/App.scss';

// Components
import Header from '../components/Header';
import Search from '../components/Search';

const App = () => {
    return(
        <React.Fragment>
            <Header />
            <Search />
        </React.Fragment>
    );
};

export default App;