import './Styles.css'
import logo from '../images/Logo.png';
import instagram from '../images/Instagram.png';
import Twitter from '../images/Twitter.png';
import Youtube from '../images/Youtube.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className='top-footer'>
                <div className='f-f'>
                    <img src={logo} className="App-logo" alt="logo" />
                    <span style={{fontSize: '30px'}}>  LITHIUM DIGITAL </span>
                    <p>
                        <a href='http://www.instagram.com/##' className='social-icons-link'>
                            <img src={instagram} className='social-icons' alt='img' />
                        </a>
                        <a href='http://www.twitter.com/##' className='social-icons-link'>
                            <img src={Twitter} className='social-icons' alt='img' />
                        </a>
                        <a href='http://www.youtube.com/##' className='social-icons-link'>
                            <img src={Youtube} className='social-icons' alt='img' />
                        </a>
                    </p>
                </div>
                <div className='s-f'>
                    <h2>Products</h2>
                    <p><Link className='footlinks' to='#'>Lithium Web3 APIs</Link></p>
                    <p><Link className='footlinks' to='#'>Lithium Staking</Link></p>
                    <p><Link className='footlinks' to='#'>Lithium Faucets</Link></p>
                </div>
                <div className='t-f'>
                    <h2>Quick Links</h2>
                    <p><Link className='footlinks' to='#'>About Us</Link></p>
                    <p><Link className='footlinks' to='#'>Blog</Link></p>
                    <p><Link className='footlinks' to='#'>Contact Us</Link></p>
                </div>
                <div className='fo-f'>
                    <h2>Services</h2>
                    <p><Link className='footlinks' to='#'>Infrastructure</Link></p>
                    <p><Link className='footlinks' to='#'>Software Solutions</Link></p>
                    <p><Link className='footlinks' to='#'>Lithium Capital</Link></p>
                </div>
            </div>
            <div className='lower-footer'>
                <p>© 2023 Lithium Digital Reserved.</p>
                <p>Terms & Conditions | Privacy Policy</p>
            </div>
        </div>
    );
}
 
export default Footer;