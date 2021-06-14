import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import agent from '../agent';
import DummyProduct from '../assets/images/product_1.png'
    import Alert from '../utils/Alert';

import { Tooltip, OverlayTrigger } from 'react-bootstrap';
const Products = () => {
    const [products, setProducts] = React.useState([]);
    const [productName, setProductName] = React.useState('');
    const [searched, setSearched] = React.useState(false);
    const token = localStorage.getItem("token");
    React.useEffect(() => {
        GetAllProducts();
    }, [])
    function Search() {
        if (productName !== '') {
            setSearched(true);
            agent.Products.search(productName).then((res) => {
                if (res.data.length > 0)
                    setProducts(res.data);
                else {
                    Alert.showToastAlert('warning', 'No Products Found')
                    setProducts([])
                }
            }
            ).catch((err) => console.error(err))
        }
    }
    function GetAllProducts() {
        setSearched(false);
        setProductName('')
        agent.Products.get().then((res) =>
            setProducts(res.data.products)
        ).catch((err) => console.error(err))
    }
    function addToCart(id) {
        if (token) {
            let data = {
                productId: id
            }
            agent.Customers.addToCart(data).then((res) => {
                Alert.showToastAlert('success', 'Product Added Successfully');
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
            ).catch((err) => console.error(err))
        }
        else {
            Alert.showToastAlert('error', 'Login is required')
        }
    }
    // function subscribeProduct() {

    // }

    const productMap = products.map((valu, i) => {
        return (

            <div className="col-md-3 col-sm-12" key={i}>
                <div className="product_wrp">
                    <div className="product_img">
                        <img src={valu.image ? valu.image : DummyProduct} alt="product" />
                        <div className={valu.status === 'ACTIVE' ? 'active_status' : 'inactive_status'}>
                            <span>{valu.status}</span>
                        </div>
                    </div>
                    <div className="product_info">
                        <h4>{valu.name}</h4>
                        <ul className="product_rating">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                        </ul>
                        <span className="product_price">Rs.{valu.price}</span>
                    </div>
                    <div className="project_view">
                        {valu.status === 'ACTIVE' && <>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={<Tooltip >
                                    Add to cart
                                </Tooltip>}>
                                <div onClick={() => { addToCart(valu._id) }} className="cursor-pointer"><i className="icon-glyph-13"></i></div>
                            </OverlayTrigger>
                            {valu.subscriptionType === 'SUBSCRIBE' && <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={<Tooltip >
                                    Subscribe
                                </Tooltip>}>
                                <Link to="#/" className="project-link"><i className="fa fa-play"></i></Link>
                            </OverlayTrigger>}
                        </>}
                    </div>

                </div>
            </div>
        )
    });

    return (
        <Fragment>
            <MetaTags>
                <title>FuodBorne | Single Service</title>
                <meta
                    name="description"
                    content="Organic Food React JS Template."
                />
            </MetaTags>
            <LayoutOne>

                <div className="shop-page">

                    {/*====================  breadcrumb area ====================*/}

                    <Breadcrumb title="Our Products" />

                    {/*====================  End of breadcrumb area  ====================*/}



                    {/*==================== Team Mamber area  ====================*/}

                    <section className="product-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 product_orderby">
                                    <p className="product_count">Showing {products.length} products</p>
                                    <div className="search_icon_product active">
                                        <div className="d-flex">
                                            <input placeholder="Search" type="text" value={productName} onChange={({ target }) =>
                                                setProductName(target.value)} />

                                            {!searched ? <button className="btn-search" onClick={() => Search()}>
                                                <i className="fa fa-search"></i>
                                            </button> :
                                                <button className="btn-clear" onClick={() => GetAllProducts()}>
                                                    <i className="fa fa-times"></i>
                                                </button>}
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                {productMap}


                            </div>
                        </div>
                    </section>
                    {/*====================  End Team Mamber area  ====================*/}

                </div>

            </LayoutOne>
        </Fragment>

    );

}

export default Products;