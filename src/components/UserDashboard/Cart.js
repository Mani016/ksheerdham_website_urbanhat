import React, { Fragment } from "react";
import agent from "../../agent";
import AppContext from "../../Context";
import Alert from "../../utils/Alert";
import ConfirmationModal from "../Modal/Confirmation";
import NoData from "../NoData";

const Cart = () => {
    const [data, setData] = React.useState([]);
    const [items, setItems] = React.useState([]);
    const { setItemsInCart, accountStatus, userData } = React.useContext(AppContext);
    const [confirmationModal, setConfirmationModal] = React.useState(false);
    const [productId, setProductId] = React.useState('');
    const [customerDetails, setCustomerDetails] = React.useState({});

    React.useEffect(() => {
        let isActive = true;
        if (isActive) {
            GetCart();
            agent.Customers.wallet().then((res) => {
                setCustomerDetails(res.data)
            }).catch((err) => console.error(err))
        }
        return (() => {
            isActive = false;
        })
        // eslint-disable-next-line
    }, []);
    function GetCart() {
        agent.Customers.getCart().then((res) => {
            setData(res.data);
            setItems(res.data.items);
            setItemsInCart(res.data.items.length);
        }).catch((err) => console.error(err))
    }
    function RemoveFromCart(id) {
        let data = {
            productId: id
        }
        agent.Customers.removeFromCart(data).then((res) => {
            Alert.showToastAlert('success', 'Product Removed Successfully');
            GetCart();
        }
        ).catch((err) => console.error(err))

    }
    function AddToCart(id) {
        let data = {
            productId: id,
        };
        agent.Customers.addToCart(data)
            .then((res) => {
                Alert.showToastAlert("success", "Product Added Successfully");
                GetCart();
            })
            .catch((err) => console.error(err));

    }
    function Checkout() {
        let products = { product: [] }
        items.forEach((item) => {
            products.product.push({ _id: item.productId._id, quantity: item.quantity })
        })
        if (accountStatus === 1) {
            if (data.subTotal > (customerDetails.credit_limit + customerDetails.balance)) {
                Alert.showToastAlert('warning', 'Not Having Enough Balance');
            }
            else {
                agent.Customers.addOrder(products).then((res) => {
                    if (res.code === 400) {
                        Alert.showToastAlert("error", "You are not authorized to access");
                    }
                    else {
                        Alert.showToastAlert('success', 'Order Placed Successfully');
                        GetCart();
                    }

                })
            }
        }
        else {
            Alert.showToastAlert("error", "You are not authorized to access");
        }
    }

    function isDate(val) {
        // Cross realm comptatible
        return Object.prototype.toString.call(val) === '[object Date]'
    }

    function isObj(val) {
        return typeof val === 'object'
    }

    function stringifyValue(val) {
        if (isObj(val) && !isDate(val)) {
            return JSON.stringify(val)
        } else {
            return val
        }
    }

    function buildForm({ action, params }) {
        const form = document.createElement('form')
        form.setAttribute('method', 'post')
        form.setAttribute('action', action)

        Object.keys(params).forEach(key => {
            const input = document.createElement('input')
            input.setAttribute('type', 'hidden')
            input.setAttribute('name', key)
            input.setAttribute('value', stringifyValue(params[key]))
            form.appendChild(input)
        })

        return form
    }

    function post(details) {
        const form = buildForm(details)
        document.body.appendChild(form)
        form.submit()
        form.remove()
    }





    const makePayment = () => {
        const data = {
            name: userData.name,
            email: userData.email,
            amount: 200,
            // phone:  localStorage.getItem('mobile'),
            phone: 9716718367

        }
        agent.paytm.paynow(data).then((res) => {
            console.log(res.hiddenInput);
            localStorage.setItem('hi', JSON.stringify(res.hiddenInput))


            var information = {
                action: "https://securegw-stage.paytm.in/order/process",
                params: {
                    TXN_AMOUNT: 500.00,
                    WEBSITE: "WEBSTAGING",
                    CHECKSUMHASH: res.hiddenInput.checksum,
                    MID: res.hiddenInput.mid,
                    ORDER_ID: res.hiddenInput.orderId,
                    CHANNEL_ID: "WEB",
                    INDUSTRY_TYPE_ID: "Retail",
                    CUST_ID: "WEB",
                    CALLBACK_URL: 'https://159.89.163.98/api/customer/paytm/callback',
                    EMAIL: data.email,
                    MOBILE_NO: data.phone,
                    requestType: "Payment"
                }
            }

            //  dc09e166733d8aa2ce43d5e7978bcfc1
            post(information)
        })
    }

    return (
        <Fragment>
            <div className="cart-page">
                <div className="shop_cart">
                    <div className="container">
                        <div className="shop_cart_title">
                            <h2>Shopping Cart</h2>
                            <button onClick={() => makePayment()}>Payment</button>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                {items.length === 0 ? <NoData /> : <div className="table-responsive text-center">
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
                                        {
                                            items.map((item, index) =>
                                                <tbody key={index}>
                                                    <tr>
                                                        <td className="prod">
                                                            <a href="#/"><img src={item.productId.image} alt="product" />
                                                            </a>
                                                        </td>
                                                        <td className="ptitle">{item.productId.name}
                                                        </td>
                                                        <td className="unit"><span>{item.productId.price}</span>
                                                        </td>
                                                        <td className="unit">  <div className="quantity"><span onClick={() => { AddToCart(item.productId._id) }}>+</span>
                                                            <input type="number" value={item.quantity} readOnly />
                                                            <span onClick={() => { setConfirmationModal(true); setProductId(item.productId._id) }}>-</span></div>

                                                        </td>
                                                        <td className="unit"><span>{item.total}</span>
                                                        </td>
                                                        {/* <td className="cursor-pointer"><div onClick={() => RemoveFromCart(item.productId._id)}><i className="fa fa-trash"></i></div>
                                                        </td> */}
                                                    </tr>
                                                </tbody>
                                            )}
                                    </table>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>

                {items.length !== 0 && <div className="shop_cart_bottom">
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
                </div>}
                {/*====================  End of Cart  Section    ====================*/}
            </div>
            {confirmationModal && (
                <ConfirmationModal onCancel={setConfirmationModal} submit={() => RemoveFromCart(productId)} />
            )}
        </Fragment>
    );
};

export default Cart;
