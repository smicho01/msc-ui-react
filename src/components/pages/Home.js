import {useApplicationContext} from "../../context/ApplicationContext";

const Home = () => {

    const {userId} = useApplicationContext();

    return (
        <>
            <h4 className="page-title">Home page</h4>
            {userId}
        </>
    );
};
export default Home;