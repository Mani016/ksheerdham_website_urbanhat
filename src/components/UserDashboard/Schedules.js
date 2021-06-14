import React, { Fragment } from "react";
import { Modal } from "react-bootstrap";
import Calendar from 'react-calendar';
import agent from '../../agent';
const Schedules = () => {
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>

            </Modal>
        );
    }
    const [modalShow, setModalShow] = React.useState(false);
    const [value, onChange] = React.useState(new Date());
    const [data,setData] = React.useState([]);
    React.useEffect(()=>{
        agent.Customers.subscriptionsCalendar().then((res)=>{
            setData(res)
        })
    },[])
    return (
        <Fragment>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="d-flex justify-content-center">

                <Calendar
                    className="w-100"
                    onChange={onChange}
                    value={value}
                    onClickDay={(value, event) => { console.log('Clicked day: ', value); setModalShow(true) }}
                />
            </div>

        </Fragment>

    );
};

export default Schedules;