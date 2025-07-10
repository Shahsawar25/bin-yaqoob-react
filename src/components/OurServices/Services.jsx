import React from 'react';
import './Services.css';
import servicesContect from './services-content'

const Services = () => {
  return (
    <div className='main-container2'>
        <h1>Our Services</h1>
        <div className="container2">
          {servicesContect.map((items,index)=>{
            return(
              <div className="services-container2">
                <img src={items.Image} alt={items.title} />
                <h3>{items.title}</h3>
                <p>{items.description}</p>
                <button>Read More</button>
              </div>
            )

          })}
        </div>
      
    </div>
  )
}

export default Services;
