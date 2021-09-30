import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import AboutContent from '../components/AboutContent'; 
import Team from '../components/Team'; 
import WorkProcess from '../components/WorkProcess'; 
import Testimonial from '../components/Testimonial';  
import Breadcrumb from "../components/Breadcrumb";


const About = () => {
 
    return(
        <Fragment>
            <MetaTags>
              <title>Ksheerdham | About</title>
              <meta
                name="description"
                content="Organic Food React JS Template."
              />
            </MetaTags>
            <LayoutOne>
        

           <div className="about-page">
                {/*====================  breadcrumb area ====================*/}

                <Breadcrumb title="About Usa" />
                
                {/*====================  End of breadcrumb area  ====================*/} 

                {/*====================  About area ====================*/}

                    <AboutContent />

                {/*==================== End:  About area ====================*/}


                {/*==================== Team Mamber area  ====================*/} 

                    <Team />

                {/*====================  End Team Mamber area  ====================*/} 

            
                {/*====================  Working Process area  ====================*/}

                    <WorkProcess />

                {/*====================  End: Working Process area  ====================*/} 


                {/*====================  Client Satisfait area  ====================*/} 

                    <Testimonial />

                {/*====================  End: Client Satisfait area  ====================*/} 

            </div>

            </LayoutOne>
        </Fragment>
            
    ); 
};

export default About;   