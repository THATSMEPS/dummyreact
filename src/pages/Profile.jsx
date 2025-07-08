import React from 'react';
import './Profile.css';

const user = {
  username: 'john_doe',
  fullName: 'John Doe',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  bio: 'Photographer & Traveler | Love to capture moments',
  posts: 128,
  followers: 1020,
  following: 890,
  gallery: [
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80',
  ],
};

function Profile() {
  return (
    <div className="profile">
      <div className="profile-header">
        <img className="profile-avatar" src={user.avatar} alt="avatar" />
        <div>
          <h2>{user.username}</h2>
          <div className="profile-fullname">{user.fullName}</div>
          <div className="profile-bio">{user.bio}</div>
          <div className="profile-stats">
            <span><b>{user.posts}</b> posts</span>
            <span><b>{user.followers}</b> followers</span>
            <span><b>{user.following}</b> following</span>
          </div>
        </div>
      </div>
      <div className="profile-gallery">
        {user.gallery.map((img, i) => (
          <img key={i} src={img} alt="gallery" className="profile-gallery-img" />
        ))}
      </div>
    </div>
  );
}

export default Profile;
