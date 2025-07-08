import React from 'react';
import './Explore.css';

function Explore() {
  return (
    <div className="explore-grid">
      {[1,2,3,4,5,6,7,8,9].map(i => (
        <img key={i} src={`https://source.unsplash.com/random/150x150?sig=${i+20}`} alt="explore" className="explore-img" />
      ))}
    </div>
  );
}

export default Explore;
