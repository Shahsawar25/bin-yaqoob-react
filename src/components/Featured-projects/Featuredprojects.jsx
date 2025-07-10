
import React from 'react'
import featureData from './featuredData'
import './Featuredprojects.css'

const Featuredprojects = () => {
  return (
     <div className='main-container'>
        <h1>Featured Projects</h1>
        <p>We embrace cutting-edge technologies and sustainable practices<br/>
             in our designs and construction processes, ensuring that our projects<br/>
              are not only modern but also environmentally responsible.
</p>
        <div className="container">
          {featureData.map((items,index)=>{
            return(
              <div className="services-container">
                <img src={items.Image} alt={items.title} />
                <h3>{items.title}</h3>
                <p>{items.description}</p>
                <button>View Projects</button>
              </div>
            )

          })}
        </div>
      
    </div>
  )
}

export default Featuredprojects
