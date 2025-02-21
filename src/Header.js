import * as constants from "./utils/constants";
import { useState } from "react";
import { Link } from "react-router"

const Header = () => {
    const [loginBtn, setLoginBtn] = useState('Login');
    
    return (
        <div className="header">
            <Link to="/"><img className="logo" alt="logo" src={constants.LOGO_URL} /></Link>
            <ul className="nav-items">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li>Gallery</li>
                <li><Link to="/receipes">Receipes</Link></li>
            </ul>
            <div>
                {/* <img className="profile-icon" alt="profile" src={constants.PROFILE_ICON}/> */}
                <button className="login-btn" onClick={() => (loginBtn === 'Login') ? setLoginBtn('Logout') : setLoginBtn('Login')}>
                    { loginBtn }
                </button>
            </div>
        </div>
    )
};

export default Header;