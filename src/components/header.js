import { Link } from "react-router-dom";
import "./Styles.css"
import logo from '../images/Logo.png';

import { slideToggle } from "./slideToggle/index.js"
import { useRef } from "react";

const Header = () => {

    const dropdowncaret = useRef(null);


    return (
        <div className="header">
            <div className="header-content">
                <div className="left">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="right">
                    <Link to='#'>Products ˅</Link>
                    <Link to='#'>About Us</Link>
                    <Link to='#'>Blog</Link>
                    <Link to='#'>Contact Us</Link>
                    <button>Get Started</button>
                </div>
                <div className='dropdowncaret' onClick={ () => slideToggle(dropdowncaret.current)}>
                    <span style={ { fontSize: "20px", paddingBottom: "0px", marginLeft: "20px" } }><span className="drpd">menu</span></span>
                    <div ref={dropdowncaret} className="target-div thedropdown" style={{ display: "none"}}>
                        <Link to="/" className='nav-link'> Products </Link>
                        <Link to="/about" className='nav-link'> About Us </Link>
                        <Link to="/projects" className='nav-link'> Blogs </Link>
                        <Link to="/contact" className='nav-link'> Contact Us </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Header;