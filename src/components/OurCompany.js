import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";


const OurCompany = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>Ksheerdham |
                    Our Company</title>
                <meta
                    name="description"
                    content="Our Company"
                />
            </MetaTags>
            <LayoutOne>


                <div className="about-page">
                    {/*====================  breadcrumb area ====================*/}

                    <Breadcrumb title="Our Company" />

                    {/*====================  End of breadcrumb area  ====================*/}

                    {/*====================Our Company area ====================*/}

                    <section className="about-section pt-2">
                        <div className="container single_service_left_botom ">
                            <div className="row justify-content-center sing_service_item">

                                <div className="col-md-8 col-sm-12">
                                    <div className="about_item_tb" >
                                        <div className="about_item_tbcell " >
                                            <h3>
                                                Our Objective
                                            </h3>
                                            <div className="about_item">
                                                <p>
                                                    Produce safe and quality milk from healthy animals using management practices that are sustainable from an animal welfare, social, economic and environmental perspective.
                                                </p>
                                            </div>
                                            <h3>
                                                Our Farm
                                            </h3>
                                            <div className="">
                                                <p>
                                                    Our dairy farm is spread in 10 acres. It is perched between Mathura and Aligarh, an area known for the high quality of green produce. At our Gir Cow farm, our prime concern is to deliver completely natural farm fresh milk. We take utmost care in hygienically packing the milk, in its most natural form.
                                                    The cows are well fed with clean, nutritious and unprocessed foods to produce A2 milk that has the potential to enhance the immune system, fight against diseases and disorders such as joint pain, obesity and asthma. This milk also contains high levels of Omega 3 that regulates the blood vessels. The farm is only allowed to feed the cattle with certified feed which is more natural and healthy thereby producing healthier milk. These cows are also kept free from hormones, steroids or any injections that are given to enhance milk production. Milk is also routinely tested to ensure that no such content is present. This natural diet of foods helps produce nutrient-rich milk for consumption. Cows are not in captivity all the time; they are grazing freely for most of the day in our huge natural farm. Regular check-up of cows by a professional Veterinary doctor is arranged.
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


                    {/*==================== End:Our Company area ====================*/}

                </div>

            </LayoutOne>
        </Fragment>

    );
};

export default OurCompany;