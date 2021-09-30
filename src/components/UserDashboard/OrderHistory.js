import moment from "moment";
import React from "react";
import { Card } from "react-bootstrap";
import agent from "../../agent";
import "../../assets/css/order.scss";
import Loader from "../../pages/loader";
import NoData from "../NoData";
const OrderHistory = () => {
  const [data, setData] = React.useState([]);
  const [pending, setPending] = React.useState(true);
  React.useEffect(() => {
    let isActive = true;
    if (isActive) {
    agent.Customers.billingHistory().then((res) => {
      setData(res.data);
      setPending(false)
    });
  }
    return (() => {
      isActive = false;
    })
  }, []);
  return (
    <React.Fragment>

      {pending ? <Card><Loader height={'250px'} /></Card> : <div className="order_history_outer container py-3">
        <div className="order_no"> {data.length} Order{data.length > 1 ? 's' : ''} Placed</div>
        {data.length === 0 ? <NoData /> : data.map((item, index) => <div className="card mb-4" key={index}>
          <div className="card-header d-md-flex d-block  justify-content-between">
            <div className="left">
              <h5>
                Order Placed <span>{moment(item.createdAt).format('DD-MM-YYYY hh:ss a')}</span>
              </h5>
              <h5>
                Total <span>Rs {item.order_total}</span>
              </h5>
            </div>
            <div className="right">
              <h5>Order #{item._id}</h5>
            </div>
          </div>
          <div className="card-body  d-md-flex d-block  justify-content-between">
            <ul className="product_list">
              <li>
                <img src={item.product[0].imageURL} alt="" />
                <div className="product_info">
                  <h3>{item.product[0].name}</h3>
                  <div className="d-flex">
                    <span>Qty: {item.product[0].quantity}</span> <span>Amt: {item.product[0].price}</span>
                  </div>
                </div>
              </li>
            </ul>
            {/* <div className="total_amt">
              <h5>
                Total Price : <span>1200</span>
              </h5>
            </div> */}
          </div>
        </div>)}
      </div>
      }
    </React.Fragment>
  );
};
export default OrderHistory;
