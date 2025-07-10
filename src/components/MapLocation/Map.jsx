import React from 'react';

const LocationMap = () => {
  return (
    <div style={{ width: '100%', height: '450px', margin: '40px 0' }}>
      <iframe
        title="Bin Yaqoob Arcade Location"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13291.181478661096!2d72.87158538373227!3d33.610613512571625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20%20Bin%20Yaqoob%20Arcade%2C%20JV5J%2BQ5Q%2C%20Block%20C%20Faisal!5e0!3m2!1sen!2s!4v1752133918432!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationMap;
