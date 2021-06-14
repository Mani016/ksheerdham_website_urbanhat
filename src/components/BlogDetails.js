import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import BlogSidebar from '../components/BlogSidebar';
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";

const BlogDetails = () => {
  return (
        <Fragment>
            <MetaTags>
                <title>Ksheerdham | Welcome to MD's Blog!!!</title>
                <meta
                    name="description"
                    content="Welcome to MD's Blog!!!"
                />
            </MetaTags>
            <LayoutOne>

                <div className="single-blog">

                    {/*====================  breadcrumb area ====================*/}

                    <Breadcrumb title="Welcome to MD's Blog!!!" />

                    {/*====================  End of breadcrumb area  ====================*/}

                    <div className="blog_container single_blog_container">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-9 col-xs-12 blog-area">
                                    <div className="blog-post-list">

                                        <div className="blog_wrp">
                                            <Link to="single-blog" className="blog_img">
                                                <img src="assets/images/blog4.jpg" alt="" />
                                            </Link>
                                            <div className="blog_info">
                                                <div className="blog_date">
                                                    <span><i className="fa fa-comment-o"></i> 0 comments</span>
                                                    <span> <i className="fa fa-calendar"></i>6 Nov 2019</span>
                                                </div>
                                                <Link to="single-blog">
                                                    <h4>From MDs Desk</h4>
                                                </Link>
                                                <p>I spent the first decade of my work life in the information technology industry.Those were the days of boom of IT industry in India, and I got an opportunity to travel the globe as part of work. These travels exposed me to various possibilities of making money but I felt something was missing.

                                                    Thus began my quest to venture into the dairy industry to as to give myself a chance to be close to the nature. I shared my idea with two of my colleagues and we were on the same page with same thought process.

                                                    Our journey hence started with one of the most essential and important part of our daily diet - Milk. We are using our knowledge and expertise to bring the grass to your glass in its purest and freshest form on a daily basis. In future we look to bringing more farm fresh products to your dining table.</p>
                                                <div className="post_tags">
                                                  
                                                </div>
                                                <div className="post_share footer_socil">
                                                    <ul className="list-icons link-list footer_soc">
                                                        <li>
                                                            <Link to={process.env.PUBLIC_URL + "/single-blog"}><i className="fa fa-facebook"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link to={process.env.PUBLIC_URL + "/single-blog"}><i className="fa fa-twitter"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link to={process.env.PUBLIC_URL + "/single-blog"}><i className="fa fa-behance"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link to={process.env.PUBLIC_URL + "/single-blog"}><i className="fa fa-instagram"></i></Link>
                                                        </li>
                                                        <li>
                                                            <Link to={process.env.PUBLIC_URL + "/single-blog"}><i className="fa fa-pinterest"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  article */}

                              

                                </div>
                                {/* Blog Area */}


                                {/*  Widget Area */}

                                <BlogSidebar />

                                {/* End: Widget Area */}

                            </div>
                        </div>
                    </div>


                </div>

            </LayoutOne>
        </Fragment>

    )


}


export default BlogDetails;