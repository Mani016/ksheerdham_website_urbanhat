import React from 'react';
import agent from '../../agent';
const OrderHistory = () => {
    React.useEffect(() => {
        agent.Customers.billingHistory().then((res) => {

            console.log(res)
        })
    }, [])
    return (
        <React.Fragment>

        </React.Fragment>
    )
}
export default OrderHistory;