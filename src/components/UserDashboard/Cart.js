import React, { Fragment } from "react";
import agent from "../../agent";


const Cart = () => {
    const [data, setData] = React.useState([]);
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        agent.Customers.getCart().then((res) => {
            setData(res.data);
            setItems(res.data.items)
        }).catch((err) => console.error(err))
    }, []);
    console.log(data)
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
                                                <th></th>
                                            </tr>
                                        </thead>
                                        {
                                            items.map((item, index) =>
                                                <tbody key={index}>
                                                    <tr>
                                                        <td className="prod">
                                                            <a href="#/"><img src="assets/images/product_1.png" alt="product" />
                                                            </a>
                                                        </td>
                                                        <td className="ptitle">{item.productId.name}
                                                        </td>
                                                        <td className="unit"><span>{item.productId.price}</span>
                                                        </td>
                                                        <td className="qty">
                                                            <div> {item.quantity} </div>
                                                        </td>
                                                        <td className="unit"><span>{item.total}</span>
                                                        </td>
                                                        <td><a href="#/"><i className="fa fa-trash"></i></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )
                                        }
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
                                    <p className="sub-total">Subtotal<span className="amt">{data.subTotal}</span></p>
                                    <p className="grand-total">total <span className="amt">$200.00</span></p>
                                    <a className="pro-checkout" href="#/">Proceed To Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of Cart  Section    ====================*/}


            </div>

        </Fragment>

    );
};

export default Cart;