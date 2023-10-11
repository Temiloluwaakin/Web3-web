import { NavLink, Link } from "react-router-dom";
import "./Styles.css"
import logo from '../images/Logo.png';
//import Gtt from './Gtt';
import { slideToggle } from "./slideToggle/index.js"
import { useRef, useState } from "react";
import sicons2 from '../images/sicons2.png'

const Header = () => {

    //const dropdowncaret = useRef(null);
    const products = useRef(null);

    const [showHidprod, setShowhidprod] = useState(false);
    let [menuchage, setMenuchage] = useState(true) 
    const handleHidprod = () => {
        setShowhidprod(!showHidprod)
        setMenuchage(!menuchage)
    };


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



                <span onClick={handleHidprod} className="menuff" >{menuchage ? 'menu' : 'X'}</span>
                {showHidprod &&
                    <div className="hidprod" style={{position:'absolute', top:'70px', display:'flex', paddingTop:'20px',
                     flexDirection:'column', height:'100vh', width:'100vh', background:'#1314149c', left:'0'}}>
                        <span style={{marginLeft:'20px'}}>Products</span >
                        <span style={{display:'flex', flexDirection:'column', marginLeft:'20px'}}>
                            <Link to='/webapi' className="nav-link">Lithium Web APIs</Link>
                            <Link to='#' className="nav-link">Lithium Satking</Link>
                            <Link to='/webapi' className="nav-link">Lithium Faucet</Link>
                        </span>
                        <NavLink to='/about' className='nav-link'>About Us</NavLink>
                        <NavLink to='#' className='nav-link'>Blog</NavLink>
                        <NavLink to='/contact' className='nav-link'>Contact Us</NavLink>
                        <button className="menubtn">Get Started</button>
                    </div>
                }
            </div>
        </div>
    );
}
 
export default Header;