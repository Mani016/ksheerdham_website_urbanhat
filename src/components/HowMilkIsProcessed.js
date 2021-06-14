import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";


const How_Milk_Is_Processed = () => {

    return (
        <Fragment>
            <MetaTags>
                <title>Ksheerdham |
                    How Milk Is Processed</title>
                <meta
                    name="description"
                    content="How Milk Is Processed"
                />
            </MetaTags>
            <LayoutOne>


                <div className="about-page">
                    {/*====================  breadcrumb area ====================*/}

                    <Breadcrumb title="How Milk Is Processed" />

                    {/*====================  End of breadcrumb area  ====================*/}

                    {/*====================How Milk Is Processed area ====================*/}

                    <section className="about-section ">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                    <div className="service-item">
                                        <div className="img_serv">
                                            <div ><img src={`assets/images/bulk_milk_cooler.webp`} alt="service" /></div>
                                        </div>
                                        <div className="service_text">
                                            <div > <h4>Bulk Milk Cooler</h4></div>
                                        </div>
                                        <Link className="serv_link"><i className="icon-glyph-40"></i></Link>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-12 border">
                                    <div className="about_item_tb" >
                                        <div className="about_item_tbcell " >
                                            <div className="about_item">
                                                <p>At the farm, processing of milk covers all activities ranging from:</p>
                                                <ol>
                                                    <li>
                                                        Milking the cow
                                                    </li>
                                                    <li>
                                                        Transferring the milk into chillers
                                                    </li>
                                                    <li>
                                                        Packing the milk into pouches
                                                    </li>
                                                    <li>
                                                        Storing the milk pouches into deep freezer till the time of transport.
                                                    </li>
                                                    <li>
                                                        Maintain the temperature of the pouches during transport.
                                                    </li>

                                                </ol>
                                                <p>
                                                    As can be seen from the above list that it is critical to maintain the temperature of the milk as we don't add any kind of preservatives to avoid bacterial growth. So, while handling the milk we make sure no time is wasted in transferring the milk to chiller and similarly while packaging. This is to minimize contact with the environment.
                                                </p>
                                                <p>
                                                    The area around the cow being milked, the person who is milking the cow, the container and the cow herself are all part of the process and thus are all mandatory to be under the best hygienic conditions. We here at <strong> KSHEERDHAM </strong>make sure that all these aspects are taken care of. Also, we have trained professionals to milk the cows to better understand the needs of the cattle before, during and after the milking that a machine can't do.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/*about_wrp*/}
                            </div>
                            {/* row */}
                        </div>
                        {/* container */}
                    </section>
                    <section className="about-section pt-0">
                        <div className="container">
                            <div className="row">
                             <div className="col-md-8 col-sm-12 border">
                                    <div className="about_item_tb" >
                                        <div className="about_item_tbcell " >
                                            <div className="about_item">
                                                <p>
                                                    The chiller is basically a very large container which has provisions to drop and maintain the temperature of the milk to around or below 4 degrees Celsius. These containers are made of food grade steel. They are cleaned thoroughly after every milking cycle.</p>
                                                <p>

                                                    A pouch packing machine connected to the chiller automatically delivers the right quantity into the pouches before sealing them. These filled pouches are then stored into the deep freezer.
                                                </p>

                                                <p>
                                                    The pouches are transported using mini-trucks in insulated and air-conditioned chambers. Even within these chambers the pouches are kept inside insulated crates.

                                                </p>
                                                <p>

                                                    It is our constant effort to bring to you Pure Gir cow milk and we seek to constantly improve and maintain the quality of our product and the service.
                                                </p>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="service-item">
                                        <div className="img_serv">
                                            <div ><img src={`assets/images/pouch_packing_machine.webp`} alt="service" style={{ height: '220px' }} /></div>
                                        </div>
                                        <div className="service_text">
                                            <div > <h4>Pouch Packaging Machine</h4></div>
                                        </div>
                                        <Link className="serv_link"><i className="icon-glyph-40"></i></Link>
                                    </div>
                                </div>
                                
                                {/*about_wrp*/}
                            </div>
                            {/* row */}
                        </div>
                        {/* container */}
                    </section>



                    {/*==================== End:How Milk Is Processed area ====================*/}

                </div>

            </LayoutOne>
        </Fragment>

    );
};

export default How_Milk_Is_Processed;