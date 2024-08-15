import {useApplicationContext} from "../../context/ApplicationContext";
import {Link} from "react-router-dom";

const ModeSwitcher = () => {

    const {userId} = useApplicationContext();

    const modeSwitcher = () => {
        var element = document.getElementById("mode-switch");
        element.classList.toggle("dark-mode");
    }

    return (
        <>
            <nav className="navbar nav-doc navbar-light bg-white">
                <div className="container-fluid">

                    <button onClick="navMobile()" type="button" className="navbar-toggler mobile-nav-toggler">
                        <span className="nav-link main-nav-link first-link">
                            <i className="bi-list fs-28 va-middle"></i>
                        </span>{/*<!-- / nav-link -->*/}
                    </button>
                    {/*<!-- / navbar-toggler -->*/}

                    <ul className="list-inline navbar-button p-0 m-0 ml-auto">
                        <li className="nav-item">
                            <a href="#x" onClick={modeSwitcher}
                               className="btn btn-highlight mode-switch-toggler">
                                <span className="dark-mode-btn">
                                    <i className="bi-moon-stars switch-icon icon-dark-mode"></i>
                                    <span className="mode-label">Dark Mode</span>
                                </span>

                                <span className="light-mode-btn">
                                    <i className="bi-sun switch-icon icon-light-mode"></i>
                                    <span className="mode-label">Light Mode</span>
                                </span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <button className="btn btn-primary layout-switcher" type="button"
                                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasLayouts"
                                    aria-controls="offcanvasLayouts">
                                <i className="bi-window-sidebar mr-5"></i>
                                <span>Layouts</span>
                            </button>
                        </li>
                    </ul>
                    {/*<!-- / navbar-button --> */}
                </div>
                {/*<!-- / container-fluid -->*/}
            </nav>
        </>
    );
};

export default ModeSwitcher;