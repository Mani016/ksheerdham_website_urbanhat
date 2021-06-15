import React from 'react';
import agent from '../../agent';
import Alert from '../../utils/Alert';
const Wallet = () => {
    const [data, setData] = React.useState({});
    const [amount, setAmount] = React.useState(0);
    const [refresh, doRefresh] = React.useState(false);
    React.useEffect(() => {
        agent.Customers.wallet().then((res) => {
            setData(res.data)
        }).catch((err) => console.error(err))
      
    }, [refresh]);
    function AddAdmount() {
        let data = {
            amount: Number(amount)
        }
        agent.Customers.addMoney(data).then((res) => {
            Alert.showToastAlert('success', res.message)
            doRefresh(!refresh)
        }).catch((err) => console.error(err))
    }
    return (
        <React.Fragment>
            <section className="about-section pt-2">
                <div className="container single_service_left_botom ">
                    <div className="row justify-content-center sing_service_item">

                        <div className="col-md-8 col-sm-12 text-justify">
                            <div className="about_item_tb" >
                                <div className="about_item_tbcell d-flex" >
                                    <div className="estimate-ship mx-3">
                                        <h4>  Remaining Balance</h4>
                                        <div style={{ fontSize: '35px' }}> <i className="fa fa-money" />&nbsp;&nbsp;{data.balance}</div>
                                        <div className="credit_limit">
                                            Your Credit Limit is <i className="fa fa-inr" /> {data.credit_limit}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 text-justify">
                            <div className="recharge_wallet">
                                <input type="number" placeholder="Enter Amount" onChange={({ target }) => setAmount(target.value)} value={amount} />
                            </div>
                            <div>
                                <input type="button" id="submit" name="send" className="submit-contact submitBnt" onClick={() => AddAdmount()} value="Add Money" />
                            </div>
                        </div>

                        {/*about_wrp*/}
                        <div className="news_letter_wrp ">
                            <input type="button" id="submit" name="send" className="submit-contact submitBnt" value="View All Transactions" />
                        </div>
                    </div>

                    {/* row */}
                </div>
                {/* container */}
            </section>


        </React.Fragment>
    )
}
export default Wallet;