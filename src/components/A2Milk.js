import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Gir from '../assets/images/Gir.webp';
import Sahiwal from '../assets/images/Sahiwal.gif';
import Kankrej from '../assets/images/Kankrej.webp';
import Jersey from '../assets/images/Jersey.webp';
import Holstein_Friesian from '../assets/images/Holstein_Friesian.webp';
import Slides from './Slides';
import Breadcrumb from './Breadcrumb';
const A2Milk = () => {
    const galleryListArray = [
        {
            image: Gir,
            title: 'Gir',
            category: 'Indian Cows',
        },
        {
            image: Sahiwal,
            title: 'Sahiwal',
            category: 'Indian Cows',
        },
        {
            image: Kankrej,
            title: 'Kankrej',
            category: 'Indian Cows',
        },
        {
            image: Jersey,
            title: 'Jersey',
            category: 'European Cows',
        },
        {
            image: Holstein_Friesian,
            title: 'Holstein Friesian',
            category: 'European Cows',
        },

    ]

    const galleryListtMap = galleryListArray.map((valu, i) => {
        return (

            <div className="col-md-12 col-sm-12 web graphics" key={i}>
                <div className="single-project-item" style={{ backgroundImage: `url(${valu.image})` }}>
                    <div className="project-hover">
                        <div className="project_cnt">
                            <h6><Link to={`${valu.link}`}>{valu.title}</Link></h6>
                            <span><Link to={`${valu.link}`}>category : {valu.category}</Link></span>
                        </div>
                    </div>
                </div>
            </div>

        )
    });
    let slideImages = [
        {
            img: 'A2_Milk_1.webp',
        },
        {
            img: 'A2_Milk_2.webp',
        },
        {
            img: 'A2_Milk_3.webp'
        },
    ];




    return (
        <Fragment>
            <MetaTags>
                <title>Ksheerdham | A2 Milk</title>
                <meta
                    name="description"
                    content="A2 Milk"
                />
            </MetaTags>
            <LayoutOne>

                <div className="single-blog">

                    {/*====================  breadcrumb area ====================*/}

                    <Breadcrumb title="A2 Milk" />

                    {/*====================  End of breadcrumb area  ====================*/}

                    <div className="blog_container single_blog_container">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-9 col-xs-12 blog-area">
                                    <div className="blog-post-list">

                                            <Slides slideImages={slideImages} />
                                        <div className="blog_wrp">

                                            <div className="blog_info">

                                                <Link to="single-blog">
                                                    <h4>
                                                        YES THIS IS A2 MILK !!!</h4>
                                                    <h3> It Is About How Milk Protein Gets Digested</h3>
                                                </Link>
                                                <p>Cow's milk is about 87 percent water and 13 percent solids—the solids being a combination of fat, carbohydrates in the form of lactose, minerals and protein. The major component of the milk proteins is casein; in turn about 30-35 percent of the casein (equivalent to two teaspoons in a litre of milk) is beta-casein, of which there are several varieties, determined by the genes of the cow. The most common of these variants are A1 and A2.</p>
                                                <div className="blog_quote">
                                                    <p>A2 cows are the earlier breeds of cows like the desi Indian cows or the African cows that produce this protein in their milk along with an amino acid called Proline. In the new hybrid breeds, A1 cows that include breeds like Holstein, Friesian, Brown Swiss, Belgian Blue and Ayrshire, the proline amino acid got converted to Histidine due to alteration of genes over the years. Proline is strongly bonded to a small protein called BCM 7, which prevents it from getting into the milk produced by A2 cows. On the other hand, Histidine holds a weak bond with BCM 7, so it is easily released in the GI tract of animals and can enter the human body on consumption of milk from A1 cows and interact with the digestive system and internal organs.</p>
                                                    {/* <h3>Benefits of summer cleaning tips how to clean office</h3> */}
                                                    <h6 className="marked">
                                                        Indian Desi Cow Milk
                                                        <span>
                                                            <ul>
                                                                <li>Indian Desi cows produce A2 milk which contain A2 beta-casien protein</li>
                                                                <li>
                                                                    Desi cow milk contains only A2 protein and no A1.
                                                                </li>
                                                                <li>
                                                                    High level of Omega-3 that cleans the cholesterol deposits of blood vesels
                                                                </li>
                                                                <li>
                                                                    Cerebrosides present in A2 milk increase brain power
                                                                </li>
                                                                <li>
                                                                    Strontium of A2 milk enhances the body immunity and protects from harmful radiation.
                                                                </li>
                                                            </ul>
                                                        </span>
                                                    </h6>
                                                    <h6 className="marked">

                                                        Ordinary Milk
                                                        <span>
                                                            <ul>
                                                                <li>Jersey cow produces A1 milk which contains A1 beta-casein protein.</li>
                                                                <li>
                                                                    All ordinary milk has a mixture of A1 and A2 proteins.
                                                                    Harmful to human body
                                                                </li>
                                                                <li>
                                                                    Autism, Schizophrenia, Stomach Ulcer, Type 1 diabetes and cardiac diseases
                                                                </li>
                                                                <li>
                                                                    Holsteins and Friesians are not native breeds of India.
                                                                </li>
                                                                <li>
                                                                    Strontium of A2 milk enhances the body immunity and protects from harmful radiation.
                                                                </li>
                                                            </ul>
                                                        </span>
                                                    </h6>
                                                    <p>
                                                        In his book, ‘Devil in the Milk: Illness, Health and the Politics of A1 and A2 Milk’, Dr. Keith Woodford reveals the real milk issue. It is the breed of the cow that matters. It is only cows of European ancestry which produce A1 beta-casein.
                                                        A1 beta-casein on digestion releases a peptide (a protein fragment) called beta -casomorphin-7 (BCM7), whereas this does not occur with A2 beta-casein. Even the European Food Safety Report in 2009 conceded that this is correct. There is also no doubt that this peptide has opioid characteristics. It is a well-established scientific fact.</p>
                                                    <p>
                                                        Russian researchers have quite clearly proven that it does pass into the blood of babies fed infant formula. They have also shown that a proportion of these babies are unable to metabolize the BCM7 efficiently between feeds and these particular babies have delayed psycho-motor (brain-to-muscle) development.
                                                        Russian workers have also found BCM7 in the urine of all children on normal milk diets. Polish researchers have even found that mothers who are themselves drinking cow milk can pass bovine BCM7 to their babies in breast milk.
                                                        For further reference <a className="text-primary text-decoration" href="https://keithwoodford.wordpress.com/2010/02/20/russian-breakthrough-unravels-bcm7-mysteries/"> click here</a>.
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* Blog Area */}


                                {/*  Widget Area */}
                                <div className="col-lg-3 col-xs-12 blog-area">
                                    {galleryListtMap}
                                </div>

                                {/* End: Widget Area */}

                            </div>
                        </div>
                    </div>


                </div>

            </LayoutOne>
        </Fragment>

    )

}



export default A2Milk;