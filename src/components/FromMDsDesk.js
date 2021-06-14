import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "./Breadcrumb";



const FromMDsDesk = () => {




    const blogListArray = [
        {
            image: 'blog1.jpg',
            title: 'Welcome to MD\'s Blog!!!',
            date: '6 Nov 2019',
            desc: 'I spent the first decade of my work life in the information technology industry.Those were the days of boom of IT industry in India, and...',
            link: 'blog-details',
        },

    ]



    const blogListtMap = blogListArray.map((valu, i) => {
        return (
            <div className="col-md-4 col-sm-12" key={i}>
                <div className="blog_wrp">
                    <Link to={`${valu.link}`} className="blog_img">
                        <img src={`assets/images/${valu.image}`} alt="" />
                    </Link>
                    <div className="blog_info">
                        <Link to={`${valu.link}`}>
                            <h4>{valu.title}</h4>
                            <p>{valu.desc}</p>
                        </Link>
                        <div className="blog_date">
                            <span> <i className="fa fa-calendar"></i>{valu.date}</span>
                        </div>
                        <span className="blog_read">
                            <Link to={`${valu.link}`}>Read more </Link><i className="icon-right-open"></i>
                        </span>
                    </div>
                </div>
            </div>
        )
    });


    return (
        <Fragment>
            <MetaTags>
                <title>Ksheerdham | From MDs Desk</title>
                <meta
                    name="description"
                    content="From MDs Desk"
                />
            </MetaTags>
            <LayoutOne>

                <div className="blog-page-one">

                    {/*====================  breadcrumb area ====================*/}

                    <Breadcrumb title=" From MDs Desk" />

                    {/*====================  End of breadcrumb area  ====================*/}


                    <section className="blog-section">
                        <div className="container">
                            {/* <div className="base-header">
                                    <small></small>
                                    <h3>{this.state.heading}</h3>
                                </div> */}
                            <div className="row justify-content-center">

                                {blogListtMap}


                            </div>
                        </div>
                    </section>

                </div>

            </LayoutOne>
        </Fragment>

    )

}



export default FromMDsDesk;