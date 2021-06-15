import React, { Fragment } from "react";
import agent from "../../agent";
import Alert from "../../utils/Alert";
import ConfirmationModal from "../Modal/Confirmation";

const Cart = () => {
  const [data, setData] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [confirmationModal, setConfirmationModal] = React.useState(true);

  React.useEffect(() => {
    agent.Customers.getCart()
      .then((res) => {
        setData(res.data);
        setItems(res.data.items);
      })
      .catch((err) => console.error(err));
  }, []);
  function RemoveFromCart(id) {
    let data = {
      productId: id,
    };
    agent.Customers.removeFromCart(data)
      .then((res) => {
        Alert.showToastAlert("success", "Product Removed Successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => console.error(err));
  }
  function AddToCart(id) {
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
  }
  function Checkout() {
    let data = { product: [] };
    items.forEach((item) => {
      data.product.push({ _id: item.productId._id, quantity: item.quantity });
    });
    agent.Customers.addOrder(data).then((res) => {
      Alert.showToastAlert("success", "Order Placed Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }
  return (
    <Fragment>
      <div className="cart-page">
        <div className="shop_cart">
          <div className="container">
            <div className="shop_cart_title">
              <h2>Shopping Cart</h2>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="table-responsive text-center">
                  <table className="table table-bordered">
                    <thead>
                      <tr className="shop_cart_tr">
                        <th className="text-center">Product</th>
                        <th className="text-center">Products name</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Qty</th>
                        <th className="text-center">total</th>
                      </tr>
                    </thead>
                    {items.map((item, index) => (
                      <tbody key={index}>
                        <tr>
                          <td className="prod">
                            <a href="#/">
                              <img src={item.productId.image} alt="product" />
                            </a>
                          </td>
                          <td className="ptitle">{item.productId.name}</td>
                          <td className="unit">
                            <span>{item.productId.price}</span>
                          </td>
                          <td className="qty">
                            <div> {item.quantity} </div>
                          </td>
                          <td className="unit">
                            {" "}
                            <div className="quantity">
                              <span
                                onClick={() => {
                                  AddToCart(item.productId._id);
                                }}
                              >
                                +
                              </span>
                              <input
                                type="number"
                                value={item.total}
                                readOnly
                              />
                              <span
                                onClick={() => {
                                  RemoveFromCart(item.productId._id);
                                }}
                              >
                                -
                              </span>
                            </div>
                          </td>
                          {/* <td className="cursor-pointer"><div onClick={() => RemoveFromCart(item.productId._id)}><i className="fa fa-trash"></i></div>
                                                        </td> */}
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shop_cart_bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-12">
                <div className="grand-total-area">
                  <h4>Cart Totals</h4>
                  <p className="sub-total">
                    Subtotal<span className="amt">{data.subTotal}</span>
                  </p>
                  <p className="grand-total">
                    total <span className="amt">{data.subTotal}</span>
                  </p>
                  <div
                    className="pro-checkout cursor-pointer"
                    onClick={() => Checkout()}
                  >
                    Proceed To Checkout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of Cart  Section    ====================*/}
      </div>
      {confirmationModal && (
        <ConfirmationModal onCancel={setConfirmationModal} />
      )}
    </Fragment>
  );
};

export default Cart;
