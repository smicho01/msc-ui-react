import {useApplicationContext} from "../../context/ApplicationContext";
import {Link} from "react-router-dom";

const Sidebar = () => {

    const {userId} = useApplicationContext();

    return (
        <>
            <nav className="nav doc-side-navbar nav-inverse">
                <div className="navbar-collapse collapse show" id="navbar-toggle">
                    <ul className="p-0 m-0" id="main-collapse">
                        <li className="sidenavbar-logo">
                            <Link to="/" className="logo-link">
                                <img src="assets/images/academi-chain-logo-inversed.webp" alt=""/>
                                <span>AcademiChain</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className="bi-clock"></i>
                                <span>Home</span>
                            </Link>
                            <Link to="/questions" className="nav-link">
                                <i className="bi-clock"></i>
                                <span>Questions</span>
                            </Link>
                        </li>
                        {/*}<!-- / nav-item --> */}

                        <li className="nav-item">
                            <a className="nav-link has-collapse collapsed" href="#dd-components"
                               data-bs-toggle="collapse" data-bs-target="#dd-components" aria-expanded="false"
                               aria-controls="dd-components">
                                <i className="bi bi-person-vcard"></i>
                                <span>Your Account</span>
                            </a>
                            <div className="collapse" id="dd-components" data-bs-parent="#main-collapse">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link to="/user-account" className="nav-link sidenav-sub-item">
                                            <i className="bi bi-person-bounding-box"></i>
                                            <span>Account</span>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/user-questions" className="nav-link sidenav-sub-item">
                                            <i className="bi bi-question-circle"></i>
                                            <span>Questions</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                    {/*<!-- / main-collapse -->*/}
                </div>
                {/*<!-- / collapse -->*/}
            </nav>
            {/* <!-- / side-nav -->*/}
        </>
    );
};

export default Sidebar;