import React, { Fragment } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../components/Breadcrumb";
import agent from '../../agent';
import DummyProduct from '../../assets/images/product_1.png'
import Alert from '../../utils/Alert';

const SubCategories = () => {
    const [data, setData] = React.useState([]);
    const [categoryId, setCategoryId] = React.useState('');
    let location = useLocation();
    let history = useHistory();

    React.useEffect(() => {
        if (location.state) {
            setCategoryId(location.state.id)
        }
        else {
            history.push('/Our-Categories')
        }
    }, [location.state, history])
    React.useEffect(() => {
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
    }, [categoryId])
    console.log(data)


    const serviceListtMap = data.map((valu, i) => {
        return (
            <div className="col-md-4 col-sm-12" key={i}>
                <div className="service-item">
                    <div className={valu.subscriptionType === "SUBSCRIBE" ? 'active_status' : 'inactive_status'}>
                        <span>{valu.subscriptionType}</span>
                    </div>
                    <div className="img_serv">

                        <Link to={`${valu._id}`}> <img src={valu.image ? valu.image : DummyProduct} alt="service" style={{ height: '185px', width: '100%' }} /></Link>
                    </div>
                    <div className="service_text">
                        <Link to={`${valu._id}`}><h4>{valu.name}</h4></Link>
                        <p>Rs.{valu.price}</p>
                        <p>Unit size:{valu.unitSize}</p>
                    </div>
                    <Link to={`${valu._id}`} className="serv_link"><i className="icon-glyph-40"></i></Link>
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

export default SubCategories;


