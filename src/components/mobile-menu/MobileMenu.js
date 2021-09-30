import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  useEffect(() => {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(`.subMenu`);
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        `<span class="menuExpand"><i></i></span>`
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menuExpand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }
  });

  const sideMenuExpand = e => {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.remove("active");
  };
  const token = localStorage.getItem("token")


  return (
    <div className="offcanvasMobileMenu" id="offcanvas-mobile-menu">
      <button
        className="offcanvasMenuClose"
        id="mobile-menu-close-trigger"
        onClick={() => closeMobileMenu()}
      >
        <i className="icon-glyph-146"></i>
      </button>

      <div className="offcanvasWrapper">
        <div className="offcanvasInnerContent">
          <nav className="offcanvasNavigation" id="offcanvas-navigation">

            <ul>
              <li className="active">
                <Link to={process.env.PUBLIC_URL + "/"}>Home </Link></li>
              <li className="menuItemHasChildren"><Link to="/Our-Company">Our Company</Link>
                <ul>
                  <li><Link to="The-Gir-Cow">The Gir Cow</Link>
                  </li>
                  <li><Link to="/A2-Milk">A2 Milk</Link>
                  </li>
                  <li><Link to="/How-Milk-Is-Processed">How Milk Is Processed</Link>
                  </li>
                  <li><Link to="single-services">Farm Gallery</Link>
                  </li>
                </ul>
              </li>
              <li> <Link to="/Our-Products">Our Products</Link></li>
              <li className="menuItemHasChildren"><Link to="">More</Link>
                <ul>
                  <li><Link to="/from-md-s-desk">Blog</Link>
                  </li>
                  <li><Link to="/contact">Contact Us</Link>
                  </li>
                  <li><Link to="/about-us">About Us</Link>
                  </li>
                  <li><Link to={token ? "/user-dashboard/my-cart" : "/"}>My Cart</Link>
                  </li>
                </ul>
              </li>
            </ul>


          </nav>

          {/* Search Form */}
          <div className="offcanvasMobileSearchArea">
            <form action="#">
              <input type="search" placeholder="Search ..." />
              <button type="submit">
              </button>
            </form>
          </div>

          {/* Contact Info  */}

          <div className="header_top_right list-unstyled">
            <ul>
              <li><i className="fa fa-phone"></i> +91 8851841339
                (9 AM - 9 PM)</li>
              <li><i className="fa fa-globe"></i>Gurgaon</li>
            </ul>
          </div>

          {/* Social Icon*/}
          <div className="header_top_left">
            <ul className="header_socil list-inline">
              <li> 
                {/* eslint-disable-next-line */}
                <a href="https://www.facebook.com/ksheerdham" target="_blank" rel="noopener noreferrer" className="fa fa-facebook"></a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href="https://www.instagram.com/ksheerdham/" target="_blank" rel="noopener noreferrer" className="fa fa-instagram"></a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href="https://twitter.com/ksheerdham" target="_blank" rel="noopener noreferrer" className="fa fa-twitter"></a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href="https://www.youtube.com/channel/UCsy2Oz2Uq6MmpBSaslva71A" rel="noopener noreferrer" className="fa fa-youtube"></a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
