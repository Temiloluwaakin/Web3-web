import { NavLink, Link } from "react-router-dom";
import "./Styles.css"
import logo from '../images/Logo.png';
import Gtt from './Gtt';
import { slideToggle } from "./slideToggle/index.js"
import { useRef } from "react";
import sicons2 from '../images/sicons2.png'

const Header = () => {

    const dropdowncaret = useRef(null);
    const products = useRef(null);

    return (
        <div className="header">
            <div className="header-content">
                <div className="left">
                    <Link to='/' style={{margin: '0px'}}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                </div>


                <div className="right">
                    <div className='products' onClick={ () => slideToggle(products.current)}>
                        <span style={ { fontSize: "16px", paddingBottom: "0px", marginRight: "20px" } }><span className="drp">Products ˅</span></span>
                        <div ref={products} className="target-div thedropdown" style={{ display: "none"}}>
                            <Link to="/webapi" className='prod-link'>
                                <img src={sicons2} className='services-image' alt='img'/>
                                <div>
                                    <h3>Lithium Web APIs</h3>
                                    <p>Get access to our web APIs with a 100% uptime</p>
                                </div>
                            </Link>
                            <Link to="/about" className='prod-link'>
                                <img src={sicons2} className='services-image' alt='img'/>
                                <div>
                                    <h3>Lithium Staking</h3>
                                    <p>Get access to our web APIs with a 100% uptime</p>
                                </div>
                            </Link>
                            <Link to="/projects" className='prod-link'>
                                <img src={sicons2} className='services-image' alt='img'/>
                                <div>
                                    <h3>Lithium Faucets</h3>
                                    <p>Get access to our web APIs with a 100% uptime</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <NavLink to='/about'>About Us</NavLink>
                    <NavLink to='#'>Blog</NavLink>
                    <NavLink to='/contact'>Contact Us</NavLink>
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
            <Gtt />
        </div>
    );
}
 
export default Header;