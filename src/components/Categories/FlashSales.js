import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Slider from "react-slick";
import agent from "../../agent";
import DummyProduct from "../../assets/images/product_1.png";

const FlashSales = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    agent.Products.flashSales()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(data);
  var settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: false,
    variableWidth: true,
    // centerPadding: "200px",
    speed: 500,
    // slidesToShow: 3,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1199,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       centerMode: true,
    //     //   centerPadding: "80px",
    //       arrows: false,
    //       dots: false,
    //     },
    //   },
    //   {
    //     breakpoint: 991,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       centerPadding: "40px",
    //       centerMode: false,
    //       arrows: false,
    //       dots: false,
    //     },
    //   },
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       centerMode: false,
    //       arrows: false,
    //       dots: false,
    //     },
    //   },
    //   {
    //     breakpoint: 580,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       centerMode: false,
    //       arrows: false,
    //       dots: false,
    //     },
    //   },
    // ],
  };

  let ImageGalleryDataList = data.map((val, i) => {
    return (
      //   <div
      //     className="col-md-12 swiper-slide service-gallery__single-slide"
      //     key={i}
      //   >
      //     <div className="project-item item">
      //       <div className="project_slide_img item">
      //         <img
      //           src={val.productId.image ? val.productId.image : DummyProduct}
      //           alt="product"
      //         />
      //       </div>
      //       <div className="project_text">
      //         <h4> Product Name{val.productName}</h4>
      //         <div className="project_link"> Offer text{val.offerText}</div>
      //       </div>
      //     </div>
      //     <div>
      //       <h4 className=" "> Unit Size{val.productId.unitSize}</h4>
      //       <h4 className=" "> Offer Price{val.productPrice}</h4>
      //       <h4 className=" "> Price{val.productStrikePrice}</h4>
      //     </div>
      //   </div>
      <div className="col-sm-12" key={i}>
        <div className="product_wrp cat_box">
          <div className="product_img">
            <img
              src={val.productId.image ? val.productId.image : DummyProduct}
              alt=""
            />
          </div>
          <div className="units">{val.productId.unitSize}</div>
          <div className="product_info">
            <h4>{val.productName}</h4>
            <div className="price">
              <span className="product_price cut_price">
                Rs.{val.productPrice}
              </span>
              <span className="product_price">Rs.{val.productStrikePrice}</span>
            </div>
          </div>
          <div className="project_view">
            <p>{val.offerText}</p>
            <>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip>Add to cart</Tooltip>}
              >
                <div
                  // onClick={() => {
                  //   addToCart(valu._id);
                  // }}
                  className="cursor-pointer"
                >
                  <i className="icon-glyph-13"></i>
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip>Subscribe</Tooltip>}
              >
                <div
                  className="project-link cursor-pointer"
                  // onClick={() => {
                  //   showSubscribtionModal(true);
                  //   setProductId(valu._id);
                  // }}
                >
                  <i className="fa fa-play"></i>
                </div>
              </OverlayTrigger>
            </>
          </div>
        </div>
      </div>
    );
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
          <div className="project_slider_one container">
            <Slider {...settings}>{ImageGalleryDataList}</Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;
