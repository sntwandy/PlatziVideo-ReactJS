import React, { useState } from 'react';
import classNames from 'classnames';
import { searchRequest } from '../actions';
import { connect } from 'react-redux';

// Styles
import '../assets/styles/components/Search.scss';

const Search = ( { isHome, searchRequest } ) => {
    const inputStyle = classNames('input', {
        isHome,
    });

    const [search, setSearch] = useState({
        'search': [],
    });

    const handleSearch = event => {
        setSearch([
            event.target.value,
        ]);
    };

    const handleSaveSearch = () => {
        searchRequest(search);
    };

    return(
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input name="search" onChange={handleSearch} type="text" className={inputStyle} placeholder="Buscar..." />
            <button type="button" onClick={handleSaveSearch} >Search</button>
        </section>
    );
};

const mapDispatchToProps = {
    searchRequest,
}

export default connect(null, mapDispatchToProps)(Search);