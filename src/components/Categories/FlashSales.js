import React from 'react';
import Slider from "react-slick";
import agent from '../../agent';
import DummyProduct from '../../assets/images/product_1.png';

const FlashSales = () => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        agent.Products.flashSales().then((res) => {
            setData(res.data)
        }).catch((err) => console.error(err))
    }, [])
    console.log(data)
    var settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: '200px',
        speed: 500,
        slidesToShow: 3,
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



    let ImageGalleryDataList = data.map((val, i) => {
        return (

            <div className="col-md-12 swiper-slide service-gallery__single-slide" key={i}>
                <div className="project-item item">
                    <div className="project_slide_img item">
                        <img src={val.productId.image ? val.productId.image : DummyProduct} alt="product" />
                    </div>
                    <div className="project_text">
                        <h4>{val.productName}</h4>
                        <div className="project_link">{val.offerText}</div>
                    </div>
                   
                    {/* <div className="project_view">
                        <h4 className="content project_link">{val.productId.unitSize}</h4>
                        <h4 className="content project_link">{val.productPrice}</h4>
                        <h4 className="content project_link">{val.productStrikePrice}</h4>
                    </div> */}
                </div>
                <div>
                    <h4 className=" ">{val.productId.unitSize}</h4>
                        <h4 className=" ">{val.productPrice}</h4>
                        <h4 className=" ">{val.productStrikePrice}</h4>
                    </div>
            </div>
        )
    });


    return (

        <section className="project-section">
            <div className="container-fluid">
                <div className="project_list_one">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="base-header base_header_left">
                                    <small>Our Flash Sale</small>
                                    <h3> Special Products </h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="project_slider_one mx-3">
                        <Slider {...settings}>

                            {ImageGalleryDataList}

                        </Slider>
                    </div>
                </div>
            </div>
        </section>


    );
}




export default FlashSales;

