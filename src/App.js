import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Gallery from "./pages/Gallery";
// import GalleryTwo from "./pages/GalleryTwo";
// import Contact from "./pages/Contact";
// import SingleService from "./pages/SingleService";
// import Team from "./pages/Team";
import Shop from "./pages/Shop";
// import SingleShop from "./pages/SingleShop";
// import BlogPageTwo from "./pages/BlogPageTwo";
import FromMDsDesk from "./components/FromMDsDesk";
// import SingleBlog from "./pages/SingleBlog";
// import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import A2Milk from "./components/A2Milk";
import The_Gir_Cow from "./components/TheGirCow";
import How_Milk_Is_Processed from "./components/HowMilkIsProcessed";
import OurCompany from "./components/OurCompany";
import BlogDetails from "./components/BlogDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";
import Categories from "./components/Categories";
import SubCategories from "./components/Categories/SubCategories";
import 'react-calendar/dist/Calendar.css';
function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={Home}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/home"}`}
            component={Home}
          />
          {/* <Route
            path={`${process.env.PUBLIC_URL + "/about"}`}
            component={About}
          /> */}
          <Route
            path={`${process.env.PUBLIC_URL + "/A2-Milk"}`}
            component={A2Milk}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/The-Gir-Cow"}`}
            component={The_Gir_Cow}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/How-Milk-Is-Processed"}`}
            component={How_Milk_Is_Processed}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/Our-Company"}`}
            component={OurCompany}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/from-md-s-desk"}`}
            component={FromMDsDesk}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-details"}`}
            component={BlogDetails}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/Our-Products"}`}
            component={Shop}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/login"}`}
            component={Login}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/register"}`}
            component={Register}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/user-dashboard"}`}
            component={UserDashboard}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/Our-Categories"}`}
            component={Categories}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/categories/:id/sub-categories"}`}
            component={SubCategories}
          />
          {/* <Route
            path={`${process.env.PUBLIC_URL + "/services"}`}
            component={Services}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/gallery"}`}
            component={Gallery}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/gallery-two"}`}
            component={GalleryTwo}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            component={Contact}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/single-services"}`}
            component={SingleService}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/team"}`}
            component={Team}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/single-shop"}`}
            component={SingleShop}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog"}`}
            component={FromMDsDesk}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-two"}`}
            component={BlogPageTwo}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/single-blog"}`}
            component={SingleBlog}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/single-blog"}`}
            component={SingleService}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/cart"}`}
            component={Cart}
          />
         */}
          <Route
            path={`${process.env.PUBLIC_URL + "/checkout"}`}
            component={Checkout}
          />
          <Route exact component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
