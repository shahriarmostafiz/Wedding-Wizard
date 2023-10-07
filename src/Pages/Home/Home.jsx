// import { useContext } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/banner";
import Services from "../../Components/Services/Services";

const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className="lg:max-w-7xl lg:mx-auto">
            <Banner></Banner>
            <Services services={data} ></Services>
        </div>
    );
};

export default Home;