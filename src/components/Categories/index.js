import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../components/Breadcrumb";
import agent from '../../agent';
import DummyProduct from '../../assets/images/product_1.png';
import FlashSales from './FlashSales';

const Categories = () => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        agent.Products.categories().then((res) => {
            setData(res.data.categories)
        }).catch((err) => console.error(err))
    }, [])


    const serviceListtMap = data.map((valu, i) => {
        return (
            <div className="col-md-4 col-sm-12" key={i}>
                <div className="service-item">
                    <div className={valu.status === 'ACTIVE' ? 'active_status' : 'inactive_status'}>
                        <span>{valu.status}</span>
                    </div>
                    <div className="img_serv">
                        <Link to={{ pathname: `/categories/${valu._id}/sub-categories`, state: { id: valu._id } }}> <img src={valu.image ? valu.image : DummyProduct} alt="service" style={{ height: '185px', width: '100%' }} /></Link>
                    </div>
                    <div className="service_text">
                        <Link to={{ pathname: `/categories/${valu._id}/sub-categories`, state: { id: valu._id } }} ><h4>{valu.name}</h4></Link>
                        <p>{valu.description}</p>
                    </div>
                    <Link to={{ pathname: `/categories/${valu._id}/sub-categories`, state: { id: valu._id } }} className="serv_link"><i className="icon-glyph-40"></i></Link>
                </div>
            </div>
        )
    });

    return (

        <Fragment>
            <MetaTags>
                <title>Ksheerdham | Categories</title>
                <meta
                    name="description"
                    content="Categories"
                />
            </MetaTags>
            <LayoutOne>

                <div className="service-page">

                    {/*====================  breadcrumb area ====================*/}

                    <Breadcrumb title="Our Categories" />

                    {/*====================  End of breadcrumb area  ====================*/}
                    <FlashSales />
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
                                <h3>Catgeories we have</h3>
                            </div>
                            {/* End: Heading */}

                            <div className="row">
                                {serviceListtMap}
                            </div>

                        </div>
                    </section>

                    {/*==================== End : Service Section ====================*/}

                </div>

            </LayoutOne>
        </Fragment>

    )
}

export default Categories;


