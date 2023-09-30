import { Link } from "react-router-dom";
import "./Styles.css"
import logo from '../images/Logo.png';

const Header = () => {
    return (
        <div className="header">
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
        </div>
    );
}
 
export default Header;