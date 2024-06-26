import caliperIcon from "./../../img/caliper-icon.jpg"

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="logo-container">
                <a className="logo-link" href="./index.html">
                    <img className="logo-img" src={caliperIcon} alt="caliper" />
                </a>
            </div>
            <ul className="nav-list">
                <li>
                    <a className="nav-list-link" href="./index-calc-drilling.html">Calculate drilling</a>
                </li>
                <li>
                    <a className="nav-list-link" href="./index-calc-turning.html">Calculate turning</a>
                </li>
                <li>
                    <a className="nav-list-link" href="./index-calc-milling.html">Calculate milling</a>
                </li>
                <li>
                    <a className="nav-list-link" href="./index-calc-boring.html">Calculate boring</a>
                </li>
                <li>
                    <a href="./index-contacts.html">
                        <svg className="phone-icon" viewBox="0 0 20 20">
                            <path
                                d="M13.372,1.781H6.628c-0.696,0-1.265,0.569-1.265,1.265v13.91c0,0.695,0.569,1.265,1.265,1.265h6.744c0.695,0,1.265-0.569,1.265-1.265V3.045C14.637,2.35,14.067,1.781,13.372,1.781 M13.794,16.955c0,0.228-0.194,0.421-0.422,0.421H6.628c-0.228,0-0.421-0.193-0.421-0.421v-0.843h7.587V16.955z M13.794,15.269H6.207V4.731h7.587V15.269z M13.794,3.888H6.207V3.045c0-0.228,0.194-0.421,0.421-0.421h6.744c0.228,0,0.422,0.194,0.422,0.421V3.888z">
                            </path>
                        </svg>
                        Contacts
                    </a>
                </li>
            </ul>

            <div id="menu-burger">
                <button className="c-burger c-burger-line">
                    <span>Menu-burger</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;