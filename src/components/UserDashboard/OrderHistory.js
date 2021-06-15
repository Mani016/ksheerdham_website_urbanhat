import React from "react";
import agent from "../../agent";
import "../../assets/css/order.scss";

import DummyProduct from "../../assets/images/product_1.png";
const OrderHistory = () => {
  React.useEffect(() => {
    agent.Customers.billingHistory().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <React.Fragment>
      <div className="order_history_outer container py-5">
        <div className="order_no"> 2 Order Placed</div>
        <div className="card mb-4">
          <div className="card-header d-md-flex d-block  justify-content-between">
            <div className="left">
              <h5>
                Order Placed <span>12 October 2019</span>
              </h5>
              <h5>
                Total <span>Rs 412.00</span>
              </h5>
              <h5>
                Ship To <span>Akash Upadhyay </span>
              </h5>
            </div>
            <div className="right">
              <h5>Order #24415421243636</h5>
            </div>
          </div>
          <div className="card-body  d-md-flex d-block  justify-content-between">
            <ul className="product_list">
              <li>
                <img src={DummyProduct} alt="" />
                <div className="product_info">
                  <h3>Apples</h3>
                  <div className="d-flex">
                    <span>Qty: 10</span> <span>Amt: 1000</span>
                  </div>
                </div>
              </li>
              <li>
                <img src={DummyProduct} alt="" />
                <div className="product_info">
                  <h3>Apples</h3>
                  <div className="d-flex">
                    <span>Qty: 10</span> <span>Amt: 1000</span>
                  </div>
                </div>
              </li>
              <li>
                <img src={DummyProduct} alt="" />
                <div className="product_info">
                  <h3>Apples</h3>
                  <div className="d-flex">
                    <span>Qty: 10</span> <span>Amt: 1000</span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="total_amt">
              <h5>
                Total Price : <span>1200</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default OrderHistory;
