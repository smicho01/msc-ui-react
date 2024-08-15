import {useApplicationContext} from "../../context/ApplicationContext";

const Questions = () => {

    const { userId } = useApplicationContext();

    return (
        <>
            <h4 className="page-title">Questions</h4>
            {userId}
        </>
    );
};

export default Questions;