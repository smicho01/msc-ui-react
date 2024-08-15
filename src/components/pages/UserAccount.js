import {useApplicationContext} from "../../context/ApplicationContext";

const UserAccount = () => {

    const { isLoggedIn } = useApplicationContext();

    return (
        <>
            <h4 className="page-title">User Account</h4>
            {
                isLoggedIn ? <div>User logged in </div> : <div>Not logged in</div>
            }
        </>
    );
};

export default UserAccount;