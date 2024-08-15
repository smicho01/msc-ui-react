import {useApplicationContext} from "../../context/ApplicationContext";

const Questions = () => {

    const { isLoggedIn } = useApplicationContext();

    return (
        <>
            <h4 className="page-title">Questions</h4>
            {
                isLoggedIn ? <div>User logged in </div> : <div>Not logged in</div>
            }
        </>
    );
};

export default Questions;