import React, { Fragment } from "react";
// import { Modal } from "react-bootstrap";
import Calendar from "react-calendar";
import agent from "../../agent";
import Modal from "../Modal";
import DummyProduct from "../../assets/images/product_1.png";
const Schedules = () => {
  //   function MyVerticallyCenteredModal(props) {
  //     return (
  //       <Modal
  //         {...props}
  //         size="lg"
  //         aria-labelledby="contained-modal-title-vcenter"
  //         centered
  //       >
  //         <Modal.Header closeButton>
  //           <Modal.Title id="contained-modal-title-vcenter">
  //             Modal heading
  //           </Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>
  //           <h4>Centered Modal</h4>
  //           <p>
  //             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
  //             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
  //             ac consectetur ac, vestibulum at eros.
  //           </p>
  //         </Modal.Body>
  //       </Modal>
  //     );
  //   }
  const [modalShow, setModalShow] = React.useState(false);
  const [value, onChange] = React.useState(new Date());
  // const [data,setData] = React.useState([]);
  React.useEffect(() => {
    agent.Customers.subscriptionsCalendar().then((res) => {
      // setData(res)
      console.log(res);
    });
  }, []);
  return (
    <Fragment>
      {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
      <div className="d-flex justify-content-center my-5">
        <Calendar
          className="w-100"
          onChange={onChange}
          value={value}
          onClickDay={(value, event) => {
            console.log("Clicked day: ", value);
            setModalShow(true);
          }}
        />
        {modalShow && (
          <Modal
            showClose={true}
            onClose={() => setModalShow(false)}
            className="schedule_modal"
            style={{ maxWidth: "550px" }}
          >
            <div className="datail_card">
              <div className="left">
                <img src={DummyProduct} alt="" />
                <h3>
                  Apples <span>1000 Ltr </span>
                </h3>
              </div>
              <div className="right">
                <div className="quantity">
                  <span>+</span>
                  <input type="number" />
                  <span>-</span>
                </div>
                <div className="price">Rs88</div>
              </div>
            </div>
            <div className="datail_card">
              <div className="left">
                <img src={DummyProduct} alt="" />
                <h3>
                  Apples <span>1000 Ltr </span>
                </h3>
              </div>
              <div className="right">
                <div className="quantity">
                  <span>+</span>
                  <input type="number" />
                  <span>-</span>
                </div>
                <div className="price">Rs88</div>
              </div>
            </div>
            <div className="datail_card">
              <div className="left">
                <img src={DummyProduct} alt="" />
                <h3>
                  Apples <span>1000 Ltr </span>
                </h3>
              </div>
              <div className="right">
                <div className="quantity">
                  <span>+</span>
                  <input type="number" />
                  <span>-</span>
                </div>
                <div className="price">Rs88</div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </Fragment>
  );
};

export default Schedules;
