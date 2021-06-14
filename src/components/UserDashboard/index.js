import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Subscriptions from "./Subscriptions";
import Wallet from "./Wallet";
import Cart from "./Cart";
import Schedules from "./Schedules";
// import jwt_decode from "jwt-decode";

const UserDashboard = () => {

    let serviceTabMenuData = [
        { tabMenuName: 'My Subscriptions', icon: 'play' },
        { tabMenuName: 'My Schedules', icon: 'clock-o' },
        { tabMenuName: 'My Wallet', icon: 'money' },
        { tabMenuName: 'My Cart', icon: 'cart-plus' },
        { tabMenuName: 'Order History', icon: 'history' },

    ];
    let serviceTabContentData = [
        {

            contentDesc: Subscriptions
        },

        {
            contentDesc: Schedules
        },
        {
            contentDesc: Wallet
        },
        {
            contentDesc: Cart
        },
        {
            contentDesc: Cart
        },
    ];

    let serviceTabMenuDatalist = serviceTabMenuData.map((val, i) => {
        return (
            <Tab key={i}>
                <span className="shop-nav-tabs"><i className={`fa fa-${val.icon}`} />&nbsp;&nbsp;{val.tabMenuName}</span>
            </Tab>
        )
    });

    let serviceTabContentDatalist = serviceTabContentData.map((val, i) => {
        return (
            <TabPanel key={i}>
                <div className="shop-tab-content-wrapper">
                    <div className="shop-tab-content">
                        <val.contentDesc />
                    </div>
                </div>
            </TabPanel>
        )
    });

    return (
        <Fragment>
            <MetaTags>
                <title>Ksheerdham |
                    User Dashboard</title>
                <meta
                    name="description"
                    content="User Dashboard"
                />
            </MetaTags>
            <LayoutOne>
                <div className="container pt-2">
                    <div className="user_dashboard_title text-right"><p> Welcome Username</p></div>
                    <div className="row ">
                        <div className="shop-tab-wrapper">
                            <Tabs>
                                <div className="col-md-12">
                                    <TabList>
                                        {serviceTabMenuDatalist}
                                    </TabList>
                                </div>

                                <div className="col-md-12">
                                    {serviceTabContentDatalist}
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>




            </LayoutOne>
        </Fragment>

    );
};

export default UserDashboard;