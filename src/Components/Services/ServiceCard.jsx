
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    console.log('this', service);
    const { title, id, img, price, details } = service
    return (
        <div className='md:w-80 lg:w-96 p-4 shadow-xl  rounded-xl'>
            <div className='h-[220px] flex justify-center pt-4'>
                <img src={img} className='w-full rounded' alt="" />
            </div>
            <div className='p-2 my-4 space-y-3'>
                <h1 className="text-xl font-semibold">{title}</h1>
                <p>{details}</p>
                <p className='font-medium text-rose-500'>Starts From $ {price}</p>
                <div>
                    <Link to={`/service/${id}`} ><button className='btn rounded-full btn-outline btn-error btn-sm'> Select Options </button></Link >

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
ServiceCard.propTypes = {
    service: PropTypes.object
}