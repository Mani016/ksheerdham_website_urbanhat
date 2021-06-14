import React , {Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import {Link} from 'react-router-dom';
import Slider from "react-slick";  
import Breadcrumb from "../components/Breadcrumb";

class Gallery extends Component{
    
    render(){

        var settings = {
          className: "center",
          autoplay: true,
          autoplaySpeed: 5000,
          dots: false,
          arrows:false,
          infinite: true,
          centerMode: true,
          centerPadding: '200px',
          speed: 500,
          slidesToShow: 3,
          rows: 2, 
          slidesToScroll: 1,
              responsive: [
                {
                  breakpoint: 1199,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '80px',
                    arrows: false,
                    dots: false,
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: '40px',
                    centerMode: false,
                    arrows: false,
                    dots: false
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1, 
                    centerMode: false,
                    arrows: false,
                    dots: false
                  }
                },
                {
                  breakpoint: 580,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: false,
                    dots: false
                  }
                },

              ]
        };

        let imageGalleryData = [
            {
                img:'work-1.jpg',
                title:"Native Orange",  
                link:'single-shop',
            },
            {
                img:'work-2.jpg',
                title:"Juicy Grapes",  
                link:'single-shop',
            },
             {
                img:'work-3.jpg',
                title:"Native Orange", 
                link:'single-shop', 
            },
            {
                img:'work-4.jpg',
                title:"Fresh Banana",
                link:'single-shop',
            },
            {
                img:'work-1.jpg',
                title:"Native Orange",  
                link:'single-shop',
            },
            {
                img:'work-2.jpg',
                title:"Red Watermelon",  
                link:'single-shop',
            },
             {
                img:'work-3.jpg',
                title:"Juicy Grapes", 
                link:'single-shop', 
            },
            {
                img:'work-4.jpg',
                title:"Fresh Banana",
                link:'single-shop',
            },
        ]; 

        let ImageGalleryDataList = imageGalleryData.map((val, i) => {
            return(

                <div className="col-md-12 swiper-slide service-gallery__single-slide"  key={i}>
                    <div className="project-item item">
                        <div className="project_slide_img item"> 
                            <img src={`assets/images/${val.img}`} alt="product" />
                        </div>
                        <div className="project_text"> 
                            <h4><Link to={`${val.link}`}> {val.title}</Link></h4> 
                            <Link to={`${val.link}`} className="project_link">View details</Link>
                        </div>
                        <div className="project_view">
                            <a className="project-link" href="#/"><i className="icon-glyph-26"></i></a>
                            <a className="project-link" href="#/"><i className="icon-glyph-52"></i></a>
                        </div>
                    </div>
                </div>
            )
        });


        return(

        <Fragment>
            <MetaTags>
              <title>FuodBorne | Gallery </title>
              <meta
                name="description"
                content="Organic Food React JS Template."
              />
            </MetaTags>
            <LayoutOne>

           <div className="gallery-page">

                {/*====================  breadcrumb area ====================*/}

                <Breadcrumb title="Our Gallery" />
            
                {/*====================  End of breadcrumb area  ================*/}


                {/*====================  Gallery area ====================*/}
                <section className="project-section">   
                    <div className="container-fluid">  
                        <div className="project_list_one">
                            <div className="container">
                                <div className="row"> 
                                    <div className="col-md-12">
                                        <div className="base-header">
                                            <small>Our Latest Product</small>
                                            <h3> Special Gallery </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project_slider_one">
                                <Slider {...settings}>

                                    {ImageGalleryDataList} 

                                </Slider>

                            </div> 
                        </div>
                    </div>
                </section>
                {/*==================== End:  Gallery area ====================*/}
            </div>
            </LayoutOne>
        </Fragment>

        );
    }
}

export default Gallery;   