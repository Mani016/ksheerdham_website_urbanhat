import React, { Fragment } from "react";
import agent from "../../agent";
import moment from "moment";
import Loader from "../../pages/loader";
import Alert from "../../utils/Alert";
import NoData from "../NoData";
const Subscriptions = () => {
    const [data, setData] = React.useState([]);
    const [pending, setPending] = React.useState(true);
    const [refresh, setDoRefresh] = React.useState(false);
    // React.useEffect(()=>{
    //     window.location.reload()
    // },[])
    React.useEffect(() => {
        setPending(true);
        let options = { pageIndex: 0, pageSize: 1000 };
        agent.Customers.subscriptions(options)
            .then((res) => {
                setData(res.data);
                setPending(false);
            })
            .catch((err) => console.error(err));

    }, [refresh]);
    function ToggleSubscriptions(id) {
        agent.Customers.toggleSubscriptions(id)
            .then((res) => {
                Alert.showToastAlert("success", res.message);
                setDoRefresh(!refresh);
            })
            .catch((err) => console.error(err));
    }
    function EndSubscriptions(id) {
        agent.Customers.endSubscriptions(id)
            .then((res) => {
                Alert.showToastAlert("success", res.message);
                setDoRefresh(!refresh);
            })
            .catch((err) => console.error(err));
    }
    return (
        <Fragment>
            <section className="about-section pt-2">
                <div className="container single_service_left_botom ">
                    <div className="row justify-content-center sing_service_item">
                        <div className="container pt-2">
                            {pending ? (
                                <Loader height={"300px"} />
                            ) : (
                                <>
                                    {data.length === 0 ? (
                                        <NoData />
                                    ) : (
                                        <div className="row d-flex">
                                            {data.map((item, index) => (
                                                <div className="col-md-6 col-12 mb-2" key={index}>
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-md-3 col-12">
                                                                    <img src={item.image} alt="product" />
                                                                </div>
                                                                <div className="col-md-9 col-12">
                                                                    <div className="estimate-ship  text-justify">
                                                                        <h4> {item.name}</h4>
                                                                    </div>
                                                                    <div className="d-flex justify-content-between">
                                                                        <div className="standard_font">
                                                                            {item.unitSize} {item.unit}
                                                                        </div>
                                                                        <div className="standard_font">
                                                                            {" "}
                                                                            <i className="fa fa-inr" />
                                                                            {item.unitPrice}
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-justify standard_font">
                                                                        The Product is delivered to you{" "}
                                                                        {item.subscription.availability}
                                                                    </div>
                                                                    <div className="text-justify standard_font">
                                                                        Next Delivery:&nbsp;&nbsp;
                                                                        {moment(item.start_date)
                                                                            .add(3, "Days")
                                                                            .format("DD-MM-YYYY")}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex justify-content-end subscriptions mt-2">
                                                                <div
                                                                    className="cursor-pointer"
                                                                    onClick={() =>
                                                                        ToggleSubscriptions(
                                                                            item.subscription.subscription
                                                                        )
                                                                    }
                                                                >
                                                                    <span className="icon_buttons mx-3">
                                                                        <i
                                                                            className={`fa fa-${item.subscription.status === 1
                                                                                ? "play"
                                                                                : "pause"
                                                                                }`}
                                                                        ></i>
                                                                    </span>
                                                                </div>
                                                                <div
                                                                    className="cursor-pointer"
                                                                    onClick={() =>
                                                                        EndSubscriptions(
                                                                            item.subscription.subscription
                                                                        )
                                                                    }
                                                                >
                                                                    <span className="cancel_icon_button cancel">
                                                                        <i className="fa fa-times"></i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                    {/* row */}
                </div>
                {/* container */}
            </section>
        </Fragment>
    );
};

export default Subscriptions;
