import { useParams } from "react-router-dom";

const ServiceDetails = () => {
    const { id } = useParams()
    return (

        <div>
            ServiceDetails of id {id}
        </div>
    );
};

export default ServiceDetails;