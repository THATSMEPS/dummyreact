import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <div className="profile-header">
        <img className="profile-avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" />
        <div>
          <h2>john_doe</h2>
          <p>100 posts • 250 followers • 180 following</p>
        </div>
      </div>
      <div className="profile-gallery">
        {[1,2,3,4,5,6].map(i => (
          <img key={i} src={`https://source.unsplash.com/random/100x100?sig=${i+10}`} alt="gallery" className="profile-gallery-img" />
        ))}
      </div>
    </div>
  );
}

export default Profile;
