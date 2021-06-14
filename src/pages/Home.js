import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Slides from '../components/Slides';
import AboutContent from '../components/AboutContent';
import ServiceContent from '../components/ServiceContent';
import Funfact from '../components/Funfact';
import WorkProcess from '../components/WorkProcess';
import ChooseUs from '../components/ChooseUs';
import ProductsList from '../components/ProductsList';
import PricingList from '../components/PricingList';
import GalleryContent from '../components/GalleryContent';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import BlogList from '../components/BlogList';
import ClinetCarousel from '../components/ClinetCarousel';
import ContactForm from '../components/ContactForm';

const Home = () => {
  let slideImages = [
    {
      img: 'ksheerdham_slider_1.webp',
      // smallTitle: 'Professional Cleaning Services',
      // title:"A huge variety fruits & vegetables.",
      // description:"As quas equidem noluisse et, ex pro semper fierent oporteat. Te epic urei ullam corper usu, eos et voluptaria rationibus. Usu cu eligendi ad ipisci sed  altera dae reformidans ea, inermis ration ibus necessitatibus eu eum.",
    },
  ];
  return (
    <Fragment> 
      <MetaTags>
        <title>FuodBorne | Home</title>
        <meta
          name="description"
          content="Organic Food React JS Template."
        />
      </MetaTags>
      <LayoutOne>

        <Slides slideImages={slideImages} />
        <AboutContent />
        <ServiceContent />
        <Funfact />
        <WorkProcess />
        <ChooseUs />
        <ProductsList />
        <PricingList />
        <GalleryContent />
        <Team />
        <Testimonial />
        <BlogList />
        <ClinetCarousel />
        <ContactForm />

      </LayoutOne>
    </Fragment>
  );
};

export default Home;
