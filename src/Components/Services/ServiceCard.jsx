import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    console.log('this', service);
    const { title, id, img, price, details } = service
    return (
        <div className='w-96 p-4 shadow-xl  rounded-xl'>
            <div className='h-[200px] flex justify-center'>
                <img src={img} className='h-full' alt="" />
            </div>
            <div>
                <h1 className="text-lg font-medium">{title}</h1>
                <p>{details}</p>
                <p>Starts From $ {price}</p>
                <Link to={`/details/${id}`} ><button className='btn rounded-full btn-outline btn-error'> Select Options </button></Link >
            </div>
        </div>
    );
};

export default ServiceCard;
ServiceCard.propTypes = {
    service: PropTypes.object
}