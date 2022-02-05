import React from 'react';

const CardInfo = ({ location }) => {
  return (
    <>
        <div className='main col-7 col-s-6'>
            <h4 className='spacing'><i className='fas fa-map-marker-alt' style={{color: 'red'}}></i> {location.country}</h4>
            <h1>{location.place}</h1>
            <h4>{location.time_period}</h4>
            <p>{location.description}</p>
        </div>
    </>
  )
};

export default CardInfo;
