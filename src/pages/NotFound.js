import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";  
import LayoutOne from "../layouts/LayoutOne";


const NotFound = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>FuodBorne | Not Found</title>
        <meta
          name="description"
          content="404 page of React JS Organic Food Template."
        />
      </MetaTags> 
      <LayoutOne> 
        <div className="errorPage" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/bg_3.jpg"})` }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center"> 
                    <h2>OOPS!</h2>
                    <span>404 - PAGE NOT FOUND</span>
                    <p>The page you are looking for was moved, removed, renamed or might never existed.</p>
                    <Link className="more-link" to={process.env.PUBLIC_URL + "/"}>
                      Go Home
                    </Link> 
              </div> 
            </div>
          </div>
        </div> 

        </LayoutOne>
    </Fragment>
  );
};

export default NotFound;
