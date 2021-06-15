import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Slider from "react-slick";
import agent from "../../agent";
import DummyProduct from "../../assets/images/product_1.png";
import SubscriptionModal from "../../pages/SubscriptionModal";
import Alert from "../../utils/Alert";
import Modal from "../../components/Modal";
import AppContext from "../../Context";

const FlashSales = () => {
  const { accountStatus } = React.useContext(AppContext);
  const [data, setData] = React.useState([]);
  const [productId, setProductId] = React.useState('');
  const [subscribtionModal, showSubscribtionModal] = React.useState(false);
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    agent.Products.flashSales()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  function addToCart(id) {
    if (token) {
      let data = {
        productId: id,
      };
      agent.Customers.addToCart(data)
        .then((res) => {
          Alert.showToastAlert("success", "Product Added Successfully");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((err) => console.error(err));
    } else {
      Alert.showToastAlert("error", "Login is required");
    }
  }
  console.log(data);
  var settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: false,
    variableWidth: true,
    speed: 500,
    slidesToScroll: 1,
  };

  let ImageGalleryDataList = data.map((val, i) => {
    return (
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
            {val.status === "ACTIVE" && (
              <>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={<Tooltip>Add to cart</Tooltip>}
                >
                  <div
                    onClick={() => {
                      addToCart(val._id);
                    }}
                    className="cursor-pointer"
                  >
                    <i className="icon-glyph-13"></i>
                  </div>
                </OverlayTrigger>
                {val.subscriptionType === "SUBSCRIBE" && (
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={<Tooltip>Subscribe</Tooltip>}
                  >
                    <div
                      className="project-link cursor-pointer"
                      onClick={() => {
                        if (accountStatus === 1) {
                          showSubscribtionModal(true); setProductId(val._id)
                        } else {
                          Alert.showToastAlert("error", "You'r not a active user");

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
    </section>
  );
};

export default FlashSales;
