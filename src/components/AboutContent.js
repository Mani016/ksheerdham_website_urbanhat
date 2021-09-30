import React from "react";

const AboutContent = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="about_img h-100">
                            <img src="assets/images/A2_milk.webp" alt="about" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="about_item_tb">
                            <div className="about_item_tbcell">
                                <div className="base-header base_header_left">
                                    <small>Welcome To Our Ksheerdham Farms</small>
                                    <h3>It's A2 Milk !!!</h3>
                                </div>
                                <div className="about_item">
                                    <p>Regular milk has A1 beta-casein protein. It is the reason for many to develop gastric and other problems ...</p>
                                </div>
                                <div className="about_item">
                                    <p>
                                        Regular milk has A1 beta-casein protein. It is the reason for many to develop gastric and other problems ...
                                        Gir Cow Milk has A2 beta-casein protein  which is easier to digest besides other benefits.</p>
                                </div>
                                <div className="about_item d-flex justify-content-end">
                                    <input type="button" id="submit" name="send" onClick={() => console.log('hi')} className="submit-contact submitBnt" value="Read More" />
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
    );
};

export default AboutContent;
