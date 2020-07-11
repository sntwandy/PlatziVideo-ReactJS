import React from 'react';

//Styles
import '../assets/styles/components/Categories.scss';

const Categories = ( { children, title } ) => {
    return(
        <React.Fragment>
            <h3 className="categories__title">{title}</h3>
            {children}
        </React.Fragment>
    );
};

export default Categories;