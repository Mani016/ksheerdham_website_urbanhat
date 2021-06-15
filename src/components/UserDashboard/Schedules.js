import React, { Fragment } from "react";
import Calendar from "react-calendar";
import agent from "../../agent";
import Modal from "../Modal";
import DummyProduct from "../../assets/images/product_1.png";
import Loader from "../../pages/loader";
import Alert from "../../utils/Alert";
const Schedules = () => {

  const [modalShow, setModalShow] = React.useState(false);
  const [value, onChange] = React.useState(new Date());
  const [data, setData] = React.useState([]);
  const [pending, setPending] = React.useState(true);
  function GetSubscriptions(date) {
    setPending(true);
    agent.Customers.subscriptionsCalendar(date).then((res) => {
      setData(res.data)
      setModalShow(true);
      setPending(false);
    });
  }
  function UpdateSubscription(id, productId, quantity, orderDate) {
    setPending(true)
    agent.Customers.updateSubscription(id, productId, { quantity: quantity }).then((res) => {
      Alert.showToastAlert('success', res.message);
      GetSubscriptions(orderDate);
    })
  }

  return (
    <Fragment>

      <div className="d-flex justify-content-center my-5">
        <Calendar
          className="w-100"
          onChange={onChange}
          value={value}
          onClickDay={(value, event) => {
            GetSubscriptions(new Date(value).setHours(5, 30, 0, 0))
          }}
        />
        {modalShow && (
          <Modal
            showClose={true}
            onClose={() => setModalShow(false)}
            className="schedule_modal"
            style={{ maxWidth: "550px" }}
          >
            {data.map((item, index) =>
              <div key={index}>
                {pending ? <Loader height={'250px'} /> :
                  <div className="datail_card" >
                    <div className="left">
                      <div></div>
                      <img src={item.image ? item.image : DummyProduct} alt="" />
                      <h3>
                        {item.product_name} <span>{item.unit_size} {item.unit} </span>
                      </h3>
                    </div>
                    <div className="right">
                      <div className="quantity">
                        <span onClick={() => { UpdateSubscription(item.subscription, item._id, item.quantity + 1, item.orderDate) }}>+</span>
                        <input type="number" value={item.quantity} readOnly />
                        <span onClick={() => { UpdateSubscription(item.subscription, item._id, item.quantity - 1, item.orderDate) }}>-</span>
                      </div>
                      <div className="price">{item.amount}</div>
                    </div>

                  </div>
                }
              </div>

            )}
          </Modal>
        )}
      </div>
    </Fragment>
  );
};

export default Schedules;
