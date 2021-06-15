import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';
import jwt_decode from "jwt-decode";

const Main = props => {

    const [totalProducts, setTotalProducts] = useState(0);
    const [accountStatus, setAccountStatus] = useState(null);
    const token = localStorage.getItem("token")
    React.useEffect(() => {
        if (token) {
            setAccountStatus(jwt_decode(token).account_status);
        }
    }, [token])
    const value = {
        totalProducts,
        setTotalProducts,
        accountStatus,
        setAccountStatus
    };


    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

Main.propTypes = { children: PropTypes.node };

export default Main;
