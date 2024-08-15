import {useApplicationContext} from "../../context/ApplicationContext";

const UserQuestions = () => {

    const { userId } = useApplicationContext();

    return (
        <>
            <h4 className="page-title">User Questions</h4>
            {userId}
        </>
    );
};

export default UserQuestions;