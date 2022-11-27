import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetails = ({ cardata, handleDelete }) => {
  const {
    _id,
    email,
    model,
    price,
    phone,
    location,
    description,
    category,
    boughtdate,
    condition,
    image,
    postdate,
    booked,
  } = cardata;

  return (
    <div>
      <div className='card md:card-side bg-base-100 shadow-xl md:w-1/2 btn-ghost btn-outline '>
        <figure>
          <img src={image} alt='Movie' className='md:h-full w-96 rounded p-4' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Model: {model} </h2>
          <p>Price: ${price}</p>
          <p>Description: {description}</p>
          <p>Brand: {category}</p>
          <p>First Buying Date: {boughtdate}</p>
          <p>Condition: {condition}</p>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
          <p>Place: {location}</p>
          <p>Posted for sell on: {postdate}</p>
          <div className='btn-group-vertical m-5'>
            {booked === false ? (
              <Link className='btn bg-green-700 text-white'>Advertise</Link>
            ) : (
              ''
            )}
            <Link
              onClick={() => {
                handleDelete(_id);
              }}
              className='btn btn-circle mx-2  text-white'
            >
              X
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
