import React from 'react';
import './Home.css';

const posts = [
  { id: 1, user: 'alice', image: 'https://source.unsplash.com/random/300x300?sig=1', caption: 'Beautiful day!' },
  { id: 2, user: 'bob', image: 'https://source.unsplash.com/random/300x300?sig=2', caption: 'Enjoying the view.' },
  { id: 3, user: 'carol', image: 'https://source.unsplash.com/random/300x300?sig=3', caption: 'Sunset vibes.' },
];

function Home() {
  return (
    <div className="feed">
      {posts.map(post => (
        <div className="post" key={post.id}>
          <div className="post-header">{post.user}</div>
          <img src={post.image} alt="post" className="post-image" />
          <div className="post-caption">{post.caption}</div>
        </div>
      ))}
    </div>
  );
}

export default Home;
