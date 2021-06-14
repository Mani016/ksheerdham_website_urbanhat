 
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
 
    <div className="header_topbar">
        {/* Logo */}
        <div className="container"> 
                <div className="header_top_right list-unstyled">
                    <ul>
                        <li><i className="fa fa-phone"></i> +91 8851841339
                            (9 AM - 9 PM)</li>
                        <li><i className="fa fa-globe"></i>Gurgaon</li>
                    </ul>
                </div>
                <div className="header_top_left">
                    <ul className="header_socil list-inline pull-left">  
                        <li><i className="fa fa-envelope"></i>mailbox@ksheerdham.com</li>
                        <li>
                            <a href="//facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="//twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="//instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="//pinterest.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest"></i></a>
                        </li>
                    </ul>
                </div>
                <Link to="contact" className="more-link" >Get a quote</Link>
            </div>
 
    </div> 
 
	)
}


export default Header;