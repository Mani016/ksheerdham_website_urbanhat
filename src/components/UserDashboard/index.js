import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Subscriptions from "./Subscriptions";
import Wallet from "./Wallet";
import Cart from "./Cart";
import Schedules from "./Schedules";
import { Link, useHistory, useLocation } from "react-router-dom";
import OrderHistory from "./OrderHistory";
import PaymentResponse from "./PaymentResponse";

import AppContext from "../../Context";
// import jwt_decode from "jwt-decode";

const UserDashboard = () => {
    const location = useLocation();
    const history = useHistory();
    const { userData, accountStatus } = React.useContext(AppContext);
    let split = location.pathname.split("/");
    const token = localStorage.getItem("token");
    React.useEffect(() => {
        let isActive = true;
        if (isActive) {
            if (!token) {
                history.push("/Our-Products");
            }
        }
        return (() => {
            isActive = false;
        })
        // eslint-disable-next-line
    }, [token]);
    let serviceTabMenuData = [
        { tabMenuName: "My Subscriptions", icon: "play", url: "my-subscriptions" },
        { tabMenuName: "My Schedules", icon: "clock-o", url: "my-schedules" },
        { tabMenuName: "My Wallet", icon: "money", url: "my-wallet" },
        { tabMenuName: "My Cart", icon: "cart-plus", url: "my-cart" },
        { tabMenuName: "Order History", icon: "history", url: "order-history" },
    ];
    const [value, setValue] = React.useState(0);
    React.useEffect(() => {
        let isActive = true;
        if (isActive) {
            if (split[2] === "my-subscriptions") {
                setValue(0);
            } else if (split[2] === "my-schedules") {
                setValue(1);
            } else if (split[2] === "my-wallet") {
                setValue(2);
            } else if (split[2] === "my-cart") {
                setValue(3);
            } else if (split[2] === "payment-response") {
                setValue(5);
            } else {
                setValue(4);
            }
        }
        return (() => {
            isActive = false;
        })
    }, [split]);
    let serviceTabMenuDatalist = serviceTabMenuData.map((val, i) => {
        return (
            <Tab
                key={i}
                onClick={() => {
                    setValue(i);
                }}
                className={value === i ? "react-tabs__tab tab_selected" : ""}
            >
                <Link to={`/user-dashboard/${val.url}`} className="shop-nav-tabs">
                    <i className={`fa fa-${val.icon}`} />
                    &nbsp;&nbsp;{val.tabMenuName}
                </Link>
            </Tab>
        );
    });
    let serviceTabContentDatalist = serviceTabMenuData.map((val, i) => {
        return (
            <TabPanel key={i}>
                <div className="shop-tab-content-wrapper">
                    <div className="shop-tab-content ">
                        {split[2] === "my-subscriptions" ? (
                            <Subscriptions />
                        ) : split[2] === "my-wallet" ? (
                            <Wallet />
                        ) : split[2] === "my-schedules" ? (
                            <Schedules />
                        ) : split[2] === "my-cart" ? (
                            <Cart />
                        ) : split[2] === "payment-response" ? (
                            <PaymentResponse />
                        ) : (
                            <OrderHistory />
                        )}
                    </div>
                </div>
            </TabPanel>
        );
    });

    return (
        <Fragment>
            <MetaTags>
                <title>Ksheerdham | User Dashboard</title>
                <meta name="description" content="User Dashboard" />
            </MetaTags>
            <LayoutOne>
                <div className="container pt-2 mt-3">
                    <div className="user_dashboard_title d-block d-md-flex justify-content-between align-items-center">
                        <div className="left">
                            <p>
                                {" "}
                                Welcome <strong>{userData.name} </strong>
                            </p>
                            <p>
                                {" "}
                                Email: <strong>{userData.email}</strong>
                            </p>
                        </div>
                        <div className="d-flex">
                            <div className={accountStatus === 1 ? "acount_active_status mx-2" : "acount_inactive_status mx-2"}>
                                {accountStatus === 1 ? 'Approved' : 'Un Approved'}</div>
                            <div className={"acount_inactive_status mx-2 cursor-pointer"} onClick={() => { localStorage.clear(); window.location = "/login" }}>
                                <i className="fa fa-sign-out"></i> Log Out</div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="shop-tab-wrapper">
                            <Tabs>
                                <div className="col-md-12">
                                    <TabList>{serviceTabMenuDatalist}</TabList>
                                </div>

                                <div className="col-md-12">{serviceTabContentDatalist}</div>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default UserDashboard;
