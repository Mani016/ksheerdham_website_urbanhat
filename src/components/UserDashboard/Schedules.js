import React, { Fragment } from "react";
// import Calendar from "react-calendar";
import agent from "../../agent";
import Modal from "../Modal";
import DummyProduct from "../../assets/images/product_1.png";
import Loader from "../../pages/loader";
import Alert from "../../utils/Alert";
import NoData from "../NoData";
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
// import events from './events'
// import * as dates from '../../src/utils/dates';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment)
let allViews = Object.keys(Views).map(k => Views[k])

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

const Schedules = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [pending, setPending] = React.useState(true);
  const [calendar, setCalendar] = React.useState([]);
  function GetSubscriptions(date) {
    setPending(true);
    agent.Customers.subscriptionsCalendar(date).then((res) => {
      setData(res.data);
      setModalShow(true);
      setPending(false);
    });
  }
  function UpdateSubscription(id, productId, quantity, orderDate) {
    setPending(true);
    agent.Customers.updateSubscription(id, productId, {
      quantity: quantity,
    }).then((res) => {
      Alert.showToastAlert("success", res.message);
      GetSubscriptions(orderDate);
    });
  }
  React.useEffect(() => {
    let isActive = true;
    if (isActive) {
      setPending(true);
      // let options = { pageIndex: 0, pageSize: 1000 };
      agent.Customers.getCalendar()
        .then((res) => {
           res.data.forEach((item, index) => {
            item['id'] = index
            item['title'] = `Product Name:- ${item.product_name} `
            item['start'] = new Date(item.orderDate)
            item['end'] = new Date(item.orderDate)
            item['orderAt'] = item.orderDate
          });
          // res.data.forEach((item, index) => {
          //   item['id'] = index
          //   item['title'] = `Product Name:- ${item.name} `
          //   item['start'] = new Date(item.subscription.start_date)
          //   item['end'] = new Date(item.subscription.end_date)
          //   item['orderAt'] = item.subscription.start_date
          // });

          setCalendar(res.data)
        })
        .catch((err) => console.error(err));
    }
    return (() => {
      isActive = false;
    })
  }, []);

  return (
    <Fragment>
      <div className="d-flex justify-content-center my-5">
        <Calendar
          events={calendar}
          views={allViews}
          step={60}
          showMultiDayTimes
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          className="calendar"
          eventPropGetter={
            (event, start, end, isSelected) => {
              let newStyle = {
                backgroundColor: "lightgrey",
                color: 'black',
                borderRadius: "2px",
                border: "none"
              }; 

              if (event.availability === 'Everyday') {
                newStyle.backgroundColor = "lightgreen"
              }
              if (event.availability === 'Every 7 Days') {
                newStyle.backgroundColor = "lightblue"
              }
              if (event.availability === 'Alternate Day') {
                newStyle.backgroundColor = "lightcoral"
              }
              if (event.availability === 'Every 3 Days') {
                newStyle.backgroundColor = "lightsalmon"
              }
              if (event.availability === 'For One Day') {
                newStyle.backgroundColor = "lightpink"
              }
              if (event.availability === 'Instant Delivery') {
                newStyle.backgroundColor = "lightgoldenrodyellow"
              }
              return {
                className: "",
                style: newStyle
              };
            }
          }
          defaultDate={new Date()}
          components={{
            timeSlotWrapper: ColoredDateCellWrapper,
          }}
          onSelectEvent={(event, e) => {GetSubscriptions(event.orderAt) }}
        />
        {modalShow && (
          <Modal
            showClose={true}
            onClose={() => setModalShow(false)}
            className="schedule_modal"
            style={{ maxWidth: "550px" }}
          >
            {data.length === 0 ? (
              <NoData />
            ) : (
              data.map((item, index) => (
                <div key={index}>
                {console.log(item)}
                  {pending ? (
                    <Loader height={"250px"} />
                  ) : (
                    <div className="datail_card">
                      <div className="left">
                        <div></div>
                        <img
                          src={item.image ? item.image : item.imageURL ? item.imageURL : DummyProduct}
                          alt=""
                        />
                        <div style={{ width: "100%" }}>
                          <h3>
                            {item.product_name}{" "}
                            <span>
                              {item.unit_size} {item.unit}{" "}
                            </span>
                          </h3>
                          <div className="right">
                            <div className="quantity">
                              <span
                                onClick={() => {
                                  UpdateSubscription(
                                    item.subscription,
                                    item.product,
                                    item.quantity + 1,
                                    item.orderDate
                                  );
                                }}
                              >
                                +
                              </span>
                              <input
                                type="number"
                                value={item.quantity}
                                readOnly
                              />
                              <span
                                onClick={() => {
                                  UpdateSubscription(
                                    item.subscription,
                                    item.product,
                                    item.quantity - 1,
                                    item.orderDate
                                  );
                                }}
                              >
                                -
                              </span>
                            </div>
                            <div className="price">{item.amount}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </Modal>
        )}
      </div>
    </Fragment>
  );
};

export default Schedules;
