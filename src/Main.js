import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';
import jwt_decode from "jwt-decode";
import agent from './agent';

const Main = props => {

    const [itemsInCart, setItemsInCart] = useState(0);
    const [accountStatus, setAccountStatus] = useState(null);
    const [userData, setUserData] = useState({});
    const token = localStorage.getItem("token");
    function GetCart() {
        agent.Customers.getCart().then((res) => {
            setItemsInCart(res.data.items.length);
        }).catch((err) => console.error(err))
    }
    React.useEffect(() => {
        let isActive = true;
        if (isActive) {
            if (token) {
                setAccountStatus(jwt_decode(token).account_status);
                setUserData(jwt_decode(token))
            }
        }
        return (() => {
            isActive = false;
        })
    }, [token])
    const value = {
        itemsInCart,
        setItemsInCart,
        accountStatus,
        setAccountStatus,
        GetCart,
        setUserData,
        userData
    };


    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

Main.propTypes = { children: PropTypes.node };

export default Main;
