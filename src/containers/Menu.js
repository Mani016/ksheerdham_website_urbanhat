import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import MobileMenu from "../components/mobile-menu/MobileMenu";
import MobileBtn from "../components/mobile-menu/MobileBtn";


const Menu = () => {
    const triggerSearch = () => {
        const offcanvasMobileMenu = document.querySelector(".search_icon_inr");
        offcanvasMobileMenu.classList.toggle("active");
    };

    return (

        <div className="menu_area">
            {/* Start: header navigation */}
            <div className="navigation">
                <div className="container">
                    <div className="logo">
                        <Link to={process.env.PUBLIC_URL + "/"} style={{ color: ' #1f83ad' }}>
                            Ksheerdham
                            {/* <img src="assets/images/logo.png" alt="" /> */}
                        </Link>
                    </div>

                    <div className="meun_wrp">
                        <Navbar expand="lg" sticky="top" id="navigation">
                            <Nav className="mr-auto">
                                <ul>
                                    <li className="active">
                                        <Link to={process.env.PUBLIC_URL + "/"}>Home </Link></li>
                                    <li className="has-sub"><Link to="/Our-Company">Our Company</Link>
                                        <ul>
                                            <li><Link to="/The-Gir-Cow">The Gir Cow</Link>
                                            </li>
                                            <li><Link to="/A2-Milk">A2 Milk</Link>
                                            </li>
                                            <li><Link to="/How-Milk-Is-Processed">How Milk Is Processed</Link>
                                            </li>
                                            <li><Link to="single-services">Farm Gallery</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li> <Link to="/Our-Categories">Categories</Link></li>
                                    <li> <Link to="/Our-Products">Our Products</Link></li>
                                    <li className="has-sub"><Link to="">More</Link>
                                        <ul>
                                            <li><Link to="/from-md-s-desk">Blog</Link>
                                            </li>
                                            <li><Link to="/contact">Contact Us</Link>
                                            </li>
                                            <li><Link to="/about-us">About Us</Link>
                                            </li>
                                            <li><Link to="/single-services">My Cart</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </Nav>
                        </Navbar>
                    </div>


                    {/* Mobile Menu */}

                    <MobileBtn />

                    <MobileMenu />

                    {/* End:  Mobile Menu */}


                    {/* Start: Cart  */}
                    <div className="header_cart">
                        <ul>
                            <li className="header_search">
                                <Link to="#" onClick={() => triggerSearch()} className="cart-toggler search_icon"><i className="icon-glyph-16"></i></Link>

                                <div className="search_icon_inr">
                                    <form action="#" method="POST">
                                        <div>
                                            <input placeholder="Search" type="text" />
                                            <button className="btn-search" type="submit">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li className="header_cart_icon">
                                <Link to="cart"><i className="icon-glyph-13"></i><span className="number_cart">0</span></Link>
                            </li>
                            <li className="header_cart_icon">
                                <Link to="/login"><i className="fa fa-user"></i></Link>

                            </li>
                         

                        </ul>
                    </div>
                    {/* End: Cart  */}

                </div>
                {/* container */}
            </div>
            {/* End: header navigation */}


        </div>

    );
}


export default Menu;