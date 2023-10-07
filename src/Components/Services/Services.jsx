import ServiceCard from "./ServiceCard";
import PropTypes from 'prop-types'
const Services = ({ services }) => {
    console.log('ser', services);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 my-8 ">
            {
                services?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)

            }
        </div>
    );
};

export default Services;
Services.propTypes = {
    services: PropTypes.array
}