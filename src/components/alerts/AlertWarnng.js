import {useApplicationContext} from "../../context/ApplicationContext";

const AlertWarning = () => {

    const { userId } = useApplicationContext();

    return (
        <>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <span className="bi-exclamation-triangle fs-20 mr-10"></span> <span><strong>Warning -</strong>
                A simple warning alert—check it out!</span>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert"
                        aria-label="Close"></button>
            </div>
        </>
    );
};

export default AlertWarning;