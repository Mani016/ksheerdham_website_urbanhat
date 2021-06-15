import React, { useState } from "react";
import Alert from '../utils/Alert';
import { Card } from "react-bootstrap";
import Loader from "./loader";
import agent from '../agent';
const SubscriptionModal = (props) => {
    const moment = require('moment');

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [quantity, setQuantity] = useState("");
    const [availability, setAvailability] = useState("");
    const [productDetails, setProductDetails] = React.useState({});
    const [pending, setPending] = React.useState(true);
    const tomorrow = moment().add(new Date().getHours() < 21 ? 1 : 2, 'days');
    const [customerDetails, setCustomerDetails] = React.useState({});
    React.useEffect(() => {
        setAvailability('Everyday')
    }, [])
    React.useEffect(() => {
        agent.Customers.productDetail(props.productId).then((res) => {
            setProductDetails(res.data);
            setPending(false);
        }).catch((err) => console.error(err))
        agent.Customers.wallet().then((res) => {
            setCustomerDetails(res.data)
        }).catch((err) => console.error(err))
    }, [props.productId])

    const scheduleOrder = (id) => {
        let formIsComplete = true;
        if (!startDate) {
            Alert.showToastAlert('warning', 'Start Date is required');
            formIsComplete = false;
        }
        if (quantity === '') {
            Alert.showToastAlert('warning', 'Quantity is required');
            formIsComplete = false;
        }
        if (availability === '') {
            Alert.showToastAlert('warning', 'Availability is required');
            formIsComplete = false;
        }
        if (productDetails.price * quantity > (customerDetails.credit_limit + customerDetails.balance)) {
            Alert.showToastAlert('warning', 'Not Having Enough Balance');
            formIsComplete = false;
        }
        console.log(startDate, endDate)
        let order_data = {
            product: props.productId,
            quantity: Number(quantity),
            availability: availability,
            start_date: new Date(startDate).setHours(0, 0, 0, 0),
            end_date: endDate ? new Date(endDate).setHours(0, 0, 0, 0) : 1924972200000,
        };
        if (formIsComplete) {
            agent.Customers.addSubscription(order_data).then((res) => {
                if(res.code === 400){
                    Alert.showToastAlert('warning', res.message);
                    props.showSubscribtionModal(false);
                }
                else{
                    Alert.showToastAlert('success', res.message);
                    props.showSubscribtionModal(false);
                }
              
            }).catch((err) => console.error(err))

        }
    };
    function ValidateStartDate(date) {
        if (moment(date).isAfter(moment(date).hours(21).minutes(0))
        ) {
            Alert.showToastAlert('warning', 'Invalid Date/Time');
            moment(date).add(1, 'days')
        }
        else {
            setStartDate(date)

        }
    }
    function ValidateEndDate(date) {
        if (startDate) {
            setEndDate(date)
        }
        else {
            Alert.showToastAlert('warning', 'Select Start Date First');
        }
    }
    return (
        <>
            <div className="fontStyleAddOrderScreen text-center">* We accept orders before 09:00 PM.</div>
            {pending ? <Card><Loader height={'300px'} /></Card> :
                <>
                    <div className="prod_summary">
                        <img src={productDetails.image} alt="" />
                        <div className="content">
                            <h4>
                                {" "}
                                <strong>Product Name</strong> : {productDetails ? productDetails.name : '-'}
                            </h4>
                            <h4>
                                {" "}
                                <strong>Quantity</strong> : {productDetails ? productDetails.unitSize : '-'}
                            </h4>
                            <h4>
                                {" "}
                                <strong>Price</strong> : {productDetails ? productDetails.price : '-'}
                            </h4>
                        </div>
                    </div>
                    <div className="subs_form">
                        <div className="form_row">
                            <p className="input_fields input_name">
                                <label>
                                    Quantity<span className="required">*</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Quantity"
                                    onChange={(event) => {
                                        setQuantity(event.target.value);
                                    }}
                                    onInput={(e) => e.target.value = e.target.value < 0 ? 0 : e.target.value}
                                    min={0}
                                />
                            </p>
                            <p className="input_fields input_name">
                                <label>
                                    Choose Available<span className="required">*</span>
                                </label>
                                <select onChange={({ target }) => setAvailability(target.value)}
                                    value={availability}>
                                    {productDetails.subscriptionType === "SUBSCRIBE" && <option value="Everyday">Everyday</option>}
                                    {productDetails.subscriptionType === "SUBSCRIBE" && <option value="Alternate Day">Alternate Day</option>}
                                    {productDetails.subscriptionType === "SUBSCRIBE" && <option value="Every 3 Days">Every 3 Days</option>}
                                    {productDetails.subscriptionType === "SUBSCRIBE" && <option value="For One Day">For One Day</option>}
                                    {productDetails.subscriptionType === "SUBSCRIBE" && <option value="Every 7 Days">Every 7 Days</option>}
                                    <option value="Instant Delivery">Instant Delivery</option>
                                </select>
                            </p>
                        </div>
                        <div className="form_row">
                            <p className="input_fields input_name">
                                <label>
                                    Start Date<span className="required">*</span>
                                </label>
                                <input type="date" onChange={({ target }) => ValidateStartDate(target.value)}
                                    min={tomorrow.format('YYYY-MM-DD')} value={startDate}
                                />
                            </p>
                            {availability !== 'Instant Delivery' && <p className="input_fields input_name">
                                <label>
                                    End Date<span className="required">*</span>
                                </label>
                                <input type="date" onChange={({ target }) => ValidateEndDate(target.value)}
                                    min={moment(startDate).add(1, 'days').format('YYYY-MM-DD')} value={endDate}
                                />
                            </p>}
                        </div>
                        <button className="green_btn" onClick={scheduleOrder}>Submit</button>
                    </div>
                </>

            }

        </>
    );
};

export default SubscriptionModal;
