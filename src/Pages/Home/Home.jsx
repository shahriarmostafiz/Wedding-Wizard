// import { useContext } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/banner";
import Services from "../../Components/Services/Services";
import Reviews from "../../Components/Reviews/Reviews";

const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className="lg:max-w-7xl lg:mx-auto">
            <Banner></Banner>
            <Services services={data} ></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;