import React, { Fragment } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../components/Breadcrumb";
import agent from '../../agent';
import DummyProduct from '../../assets/images/product_1.png'
import Alert from '../../utils/Alert';
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Modal from "../../components/Modal";
import SubscriptionModal from "../../pages/SubscriptionModal";
import AppContext from "../../Context";
const SubCategories = () => {
    const [data, setData] = React.useState([]);
    const [categoryId, setCategoryId] = React.useState('');
    let location = useLocation();
    let history = useHistory();
    const { accountStatus, GetCart } = React.useContext(AppContext);
    const [subscribtionModal, showSubscribtionModal] = React.useState(false);
    const token = localStorage.getItem("token");
    const [productId, setProductId] = React.useState('');

    React.useEffect(() => {
        let isActive = true;
        if (isActive) {
            if (location.state) {
                setCategoryId(location.state.id)
            }
            else {
                history.push('/Our-Categories')
            }
        }
        return (() => {
            isActive = false;
        })
    }, [location.state, history])
    React.useEffect(() => {
        let isActive = true;
        if (isActive) {
            if (categoryId !== '') {
                agent.Products.subcatoriesWiseProducts(categoryId).then((res) => {
                    if (res.data.length) {
                        setData(res.data[0].product)
                    }
                    else {
                        Alert.showToastAlert('warning', res.message);
                        setData([])
                    }

                }).catch((err) => console.error(err))
            }
        }
        return (() => {
            isActive = false;
        })
    }, [categoryId])
    function addToCart(id) {
        if (token) {
            let data = {
                productId: id,
            };
            if (accountStatus === 1) {
                agent.Customers.addToCart(data)
                    .then((res) => {
                        Alert.showToastAlert("success", "Product Added Successfully");
                        GetCart();
                    })
                    .catch((err) => console.error(err));
            }
            else {
                Alert.showToastAlert("error", "You are not authorized to access");
            }
        } else {
            Alert.showToastAlert("error", "Login is required");
        }
    }

    const productsMap = data.map((valu, i) => {
        return (
            <div className="col-md-3 col-sm-12" key={i}>
                <div className="product_wrp">
                    <div className="product_img">
                        <img src={valu.image ? valu.image : DummyProduct} alt="product" />
                        <div
                            className={
                                valu.status === "ACTIVE" ? "active_status" : "inactive_status"}
                        >
                            <span>{valu.status}</span>
                        </div>
                    </div>
                    <div className="product_info">
                        <h4>{valu.name}</h4>
                        <ul className="product_rating">
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                        </ul>
                        <span className="product_price">Rs.{valu.price}</span>
                    </div>
                    <div className="project_view">
                        {valu.status === "ACTIVE" && (
                            <>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={<Tooltip>Add to cart</Tooltip>}
                                >
                                    <div
                                        onClick={() => {
                                            addToCart(valu._id);
                                        }}
                                        className="cursor-pointer"
                                    >
                                        <i className="icon-glyph-13"></i>
                                    </div>
                                </OverlayTrigger>
                                {valu.subscriptionType === "SUBSCRIBE" && (
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={<Tooltip>Subscribe</Tooltip>}
                                    >
                                        <div
                                            className="project-link cursor-pointer"
                                            onClick={() => {
                                                if (accountStatus) {
                                                    if (accountStatus === 1) {
                                                        showSubscribtionModal(true); setProductId(valu._id)
                                                    } else {
                                                        Alert.showToastAlert("error", "You are not authorized to access");
                                                    }
                                                }
                                                else {
                                                    Alert.showToastAlert("error", "Login is required");
                                                }
                                            }}
                                        >
                                            <i className="fa fa-play"></i>
                                        </div>
                                    </OverlayTrigger>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        )
    });

    return (

        <Fragment>
            <MetaTags>
                <title>Ksheerdham | Products</title>
                <meta
                    name="description"
                    content="Products"
                />
            </MetaTags>
            <LayoutOne>

                <div className="service-page">

                    {/*====================  breadcrumb area ====================*/}

                    <Breadcrumb title="Our Products" />

                    {/*====================  End of breadcrumb area  ====================*/}

                    <section className="service-section">
                        <div className="animate_icon">
                            <div className="animate_item animate_item1 bounce_animate">
                                <img src="assets/images/animate_icon1.png" alt="" />
                            </div>
                            <div className="animate_item animate_item2 bounce_animate">
                                <img src="assets/images/animate_icon2.png" alt="" />
                            </div>
                            <div className="animate_item animate_item3 bounce_animate">
                                <img src="assets/images/animate_icon3.png" alt="" />
                            </div>
                            <div className="animate_item animate_item4 bounce_animate">
                                <img src="assets/images/animate_icon4.png" alt="" />
                            </div>
                        </div>
                        <div className="container">
                            {/* Heading */}
                            <div className="base-header">
                                <small>What We have</small>
                                <h3>Products we have</h3>
                            </div>
                            {/* End: Heading */}

                            <div className="row">
                                {productsMap}
                            </div>

                        </div>
                    </section>

                    {/*==================== End : Service Section ====================*/}

                </div>
                {subscribtionModal && (
                    <Modal
                        showClose={true}
                        onClose={() => showSubscribtionModal(false)}
                        className="subscription_modal"
                    >
                        <SubscriptionModal productId={productId}
                            showSubscribtionModal={showSubscribtionModal} />
                    </Modal>
                )}
            </LayoutOne>
        </Fragment>

    )
}

export default SubCategories;


