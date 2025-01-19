import { LOGO_URL, PROFILE_ICON } from "./utils/constants";

const Header = () => {
    return (
        <div className="header">
            <img className="logo" alt="logo" src={LOGO_URL} />
            <ul className="nav-items">
                <li>About</li>
                <li>Gallery</li>
                <li>Receipes</li>
            </ul>
            <div>
                <img className="profile-icon" alt="profile" src={PROFILE_ICON}/>
            </div>
        </div>
    )
};

export default Header;