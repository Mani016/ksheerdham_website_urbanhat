import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import Slides from "./Slides";
import { Row, Col } from "react-bootstrap";


const The_Gir_Cow = () => {
    let slideImages1 = [
        {
            img: 'Gir_Cow_1.webp',
        },
        {
            img: 'Gir_Cow_2.webp',
        },
    ];
    let slideImages2 = [
        {
            img: 'Gir_Cow_3.webp'
        },
        {
            img: 'Gir_Cow_4.webp'
        },
        {
            img: 'Gir_Cow_5.webp'
        },
    ];
    return (
        <Fragment>
            <MetaTags>
                <title>Ksheerdham |
                    The Gir Cow</title>
                <meta
                    name="description"
                    content="The Gir Cow"
                />
            </MetaTags>
            <LayoutOne>


                <div className="about-page">
                    {/*====================  breadcrumb area ====================*/}

                    <Breadcrumb title="The Gir Cow" />

                    {/*====================  End of breadcrumb area  ====================*/}

                    {/*==================== The Gir Cow area ====================*/}
                    <Row className="ml-0 mr-0 mt-2 justify-content-center">
                        <Col lg={6} >
                            <div className="content">
                                <h6 className="marked">
                                    <p>
                                        "matrah sarva bhutanam,
                                        gavah sarv sukh prada"
                                    </p>

                                </h6>
                            </div>
                        </Col>
                    </Row>



                    <section className="about-section pb-0 pt-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="about_img h-100">
                                        <Slides slideImages={slideImages1} />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="about_item_tb scrollbar" style={{ height: '699px' }}>
                                        <div className="about_item_tbcell">
                                            <div className="base-header base_header_left">
                                                <small>Meaning, the cow being mother of all living entities gives all pleasures to everyone.
                                                </small>
                                                <h3>The Gir cow is one of the prime Zebu breed cows. </h3>
                                            </div>
                                            <div className="about_item">
                                                <p> This breed originated in the Gir forest and surrounding districts in the state of Gujarat. Moderate to a large size breed, Girs are considered to be the most gentle of the Zebu breeds.</p>
                                            </div>
                                            <div className="about_item">
                                                <p>It is known for its distinct appearance, weight and height that makes it different from the Jersey, Brown Swiss, Holstein, Belgian Blue, HF etc. Noted for its milk producing qualities, the Gir cow is resistant to tropical diseases and hot temperatures.</p>
                                            </div>
                                            <div className="about_item">
                                                <p>There is a prominent hump in all Vedic Cows and this hump has a specific vein called <b>Surya Ketu Nadi</b> which is absent in non Vedic ones. This nadi (vein) absorbs all the energies and radiations from sun, moon and all constellations from universe and puts them in cow products like milk, urine, dung, ghee (clarified butter) etc. In cow products of non Vedic species this divine effect of Surya Ketu Nadi is absent.</p>
                                            </div>
                                            <div className="about_item">
                                                <p>Surya ketu Vein, on interaction with solar rays produces gold salts in her blood. These salts are present in the cow’s milk and cow’s other bodily fluids. Just Because of that the Vedic cow’s milk, butter and ghee has golden hue. Ancient scripture state that “Suryaketu” nerve on cow’s back absorbs harmful radiations and cleanses atmosphere.</p>
                                            </div>
                                            <div className="about_item">
                                                <p>A recent research shows the traces of gold in Gir cow urine</p>
                                            </div>
                                            <div className="content">
                                                <h6 className="marked">
                                                    <span>
                                                        <b>
                                                            Surya Ketu Vein of Vedic Cow, enriches her milk with:
                                                        </b>
                                                        <ul>
                                                            <li>6 Types of Vitamins</li>
                                                            <li>8 Types of protein</li>
                                                            <li>25 Types of Minerals</li>
                                                            <li>21 Types of Amino Acids</li>
                                                            <li>4 Types of Basic Phosphorus</li>
                                                            <li>2 Types of Glucose</li>
                                                        </ul>
                                                    </span>

                                                </h6>
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

                    <section className="about-section ">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-6 col-sm-12">
                                    <div className="about_item_tb" >
                                        <div className="about_item_tbcell " >
                                            <div className="about_item">
                                                <p>
                                                    Also, the presence of <b>DEWLAP</b>, a prominent specific fold of skin below neck which is prominently present in Vedic cows <b>gives immunity power to cow and cow products.</b></p>
                                            </div>
                                            <div className="about_item">
                                                <p>Being a world-renowned breed, the Gir is able to survive and produce in a difficult environment. It is resistant to various tropical diseases. It also has been imported and bred successfully in many other countries.</p>
                                            </div>
                                            <div className="about_item">
                                                <p>There is a prominent hump in all Vedic Cows and this hump has a specific vein called <b>Surya Ketu Nadi</b> which is absent in non Vedic ones. This nadi (vein) absorbs all the energies and radiations from sun, moon and all constellations from universe and puts them in cow products like milk, urine, dung, ghee (clarified butter) etc. In cow products of non Vedic species this divine effect of Surya Ketu Nadi is absent.</p>
                                            </div>
                                            <div className="about_item">
                                                <p>Rated among the best dairy breeds in the world, the Gir cow has gone global with a rise in demand for this breed in many African and Southeast Asian countries. For a long period of time, the dairy industry has focused on buffalo’s milk as a major contributor resulting in the decrease of the Gir breed. Today, this breed is on the verge of extinction due to irrational crossbreeding and lack of proper breeding programs.  Nevertheless, efforts are being made to create awareness in saving this high-quality breed of Gujarat. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*about_wrp*/}
                                <div className="col-md-6 col-sm-12">
                                    <div className="about_img h-100">
                                        <Slides slideImages={slideImages2} />
                                    </div>
                                </div>
                            </div>
                            {/* row */}
                        </div>
                        {/* container */}
                    </section>


                    {/*==================== End: The Gir Cow area ====================*/}

                </div>

            </LayoutOne>
        </Fragment>

    );
};

export default The_Gir_Cow;