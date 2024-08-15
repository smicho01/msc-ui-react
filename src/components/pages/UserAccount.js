import {useApplicationContext} from "../../context/ApplicationContext";
import AlertWarning from "../alerts/AlertWarnng";

const UserAccount = () => {

    const { userId } = useApplicationContext();

    return (
        <>
            <h4 className="page-title">User Account</h4>
            {userId}
        </>
    );
};

export default UserAccount;