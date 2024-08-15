const LayoutsSelector = () => {

    const  layoutNavRight = () => {
        var element = document.getElementById("mode-switch");
        element.classList.add("right-nav");
        element.classList.remove("detached-nav-left");
        element.classList.remove("detached-nav-right");
    }

    const layoutDetachedLeft = () => {
        var element = document.getElementById("mode-switch");
        element.classList.add("detached-nav-left");
        element.classList.remove("right-nav");
        element.classList.remove("detached-nav-right");
    }

    const layoutDetachedRight = () => {
        var element = document.getElementById("mode-switch");
        element.classList.add("detached-nav-right");
        element.classList.remove("right-nav");
        element.classList.remove("detached-nav-left");
    }

    return (
        <>
            <div className="offcanvas offcanvas-sm offcanvas-end" tabIndex="-1" id="offcanvasLayouts"
                 aria-labelledby="offcanvasLayoutsLabel">
                <div className="offcanvas-header">
                    <h6 id="offcanvasLayoutsLabel">LAYOUTS</h6>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                </div>

                <div className="offcanvas-body text-center">
                    <a href="" className="d-block m-x-auto mb-30">
                        <img src="assets/images/layout-1.jpg" alt="" className="rounded mb-15"/>
                        <h6 className="mb-0 text-uppercase fs-12">Default Layout</h6>
                    </a>

                    <a href="#x" data-bs-dismiss="offcanvas" onClick={layoutNavRight}
                       className="d-block m-x-auto mb-30">
                        <img src="assets/images/layout-2.jpg" alt="" className="rounded mb-15"/>
                        <h6 className="mb-0 text-uppercase fs-12">Layout Right Side-Nav</h6>
                    </a>

                    <a href="#x" data-bs-dismiss="offcanvas" onClick={layoutDetachedLeft}
                       className="d-block m-x-auto mb-30">
                        <img src="assets/images/layout-3.jpg" alt="" className="rounded mb-15"/>
                        <h6 className="mb-0 text-uppercase fs-12">Layout Detached Left Side-Nav</h6>
                    </a>

                    <a href="#x" data-bs-dismiss="offcanvas" onClick={layoutDetachedRight}
                       className="d-block m-x-auto mb-0">
                        <img src="assets/images/layout-4.jpg" alt="" className="rounded mb-15"/>
                        <h6 className="mb-0 text-uppercase fs-12">Layout Detached Right Side-Nav</h6>
                    </a>
                </div>

            </div>
        </>
    );
};
export default LayoutsSelector;