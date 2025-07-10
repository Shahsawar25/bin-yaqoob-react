import React from "react";
import "./CapitalDistrict.css";
import image from "../../assets/capital-district-downtown-7547.png";

const CapitalDistrict = () => {
  return (
    <div className="main-container1">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="text-container">
        <h3>Capital District DownTown</h3>
        <p>
          Welcome to Capital District Downtown, a premier high-rise apartment<br/>
          gated community designed to redefine modern living. Nestled in a prime<br/>
          location, this iconic development combines luxury, convenience, and<br/>
          security to create an unparalleled residential experience. With its<br/>
          contemporary architecture, state-of-the-art amenities, and<br/>
          meticulously crafted interiors,
        </p>
        <ul>
            <li>View Details</li>
        </ul>
      </div>
    </div>
  );
};

export default CapitalDistrict;
