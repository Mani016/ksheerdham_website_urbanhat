import React from "react";
const PaymentResponse = () => {
    return (
        <div className="card payment_card">
         
            <div className="card-body">
            <div
                className="pro-checkout cursor-pointer"
            // onClick={() => Checkout()}
            >
             <i className="fa fa-arrow-left"></i>&nbsp;&nbsp;BACK
            </div>
                <h2 className="card-title text-center">Payment Status</h2>
                <div>
                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <th>TXNID: </th>
                                <td>20210901111212800110168040603094545</td>
                            </tr>
                            <tr>
                                <th>BANKTXNID: </th>
                                <td>20210901111212800110168040603094545</td>
                            </tr>
                            <tr>
                                <th>TXNAMOUNT: </th>
                                <td>20210901111212800110168040603094545</td>
                            </tr>
                            <tr>
                                <th>TXNDATE: </th>
                                <td>20210901111212800110168040603094545</td>
                            </tr>
                            <tr>
                                <th>BANKNAME: </th>
                                <td>20210901111212800110168040603094545</td>
                            </tr>
                            <tr>
                                <th>GATEWAYNAME: </th>
                                <td>20210901111212800110168040603094545</td>
                            </tr>
                            <tr>
                                <th>STATUS: </th>
                                <td>20210901111212800110168040603094545</td>
                            </tr>
                            <tr>
                                <th>RESPCODE: </th>
                                <td>20210901111212800110168040603094545</td>
                            </tr>
                            <tr>
                                <th>RESPMSG: </th>
                                <td>20210901111212800110168040603094545</td>
                            </tr>

                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    )
}
export default PaymentResponse;