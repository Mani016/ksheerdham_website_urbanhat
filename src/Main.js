import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';

const Main = props => {

    const [totalProducts, setTotalProducts] = useState(0);


    const value = {
        totalProducts,
        setTotalProducts
    };


    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

Main.propTypes = { children: PropTypes.node };

export default Main;
