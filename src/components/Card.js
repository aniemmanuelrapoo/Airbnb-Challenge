import React from 'react'
import locations from '../Data';
import CardInfo from './CardInfo';

const Card = () => {
  return (
    <>
    {locations.map((location) => (
    <div className='containerAll col-9 col-s-11' key={location._id}>
        <div className='all'>
            <div className='side col-4 col-s-5'>
                <img src={location.image} alt="" className='imgbox' />
            </div>
            <CardInfo location={location} />
        </div>
    </div>
    ))}
    </>
  )
};

export default Card
