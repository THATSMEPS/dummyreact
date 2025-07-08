import React from 'react';
import './Home.css';

const posts = [
  {
    id: 1,
    user: {
      username: 'alice',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      fullName: 'Alice Smith',
    },
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    likes: 120,
    caption: 'Enjoying the mountains! #nature',
    comments: [
      { user: 'bob', text: 'Wow, amazing view!' },
      { user: 'carol', text: 'So beautiful!' },
    ],
    time: '2 hours ago',
  },
  {
    id: 2,
    user: {
      username: 'bob',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      fullName: 'Bob Johnson',
    },
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    likes: 98,
    caption: 'City lights at night.',
    comments: [
      { user: 'alice', text: 'Love this!' },
    ],
    time: '4 hours ago',
  },
  {
    id: 3,
    user: {
      username: 'carol',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      fullName: 'Carol Lee',
    },
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    likes: 210,
    caption: 'Sunset by the beach.',
    comments: [
      { user: 'alice', text: 'Wish I was there!' },
      { user: 'bob', text: 'Great shot!' },
    ],
    time: '1 day ago',
  },
];

function Home() {
  return (
    <div className="feed">
      {posts.map(post => (
        <div className="post" key={post.id}>
          <div className="post-header">
            <img src={post.user.avatar} alt={post.user.username} className="post-avatar" />
            <div>
              <div className="post-username">{post.user.username}</div>
              <div className="post-time">{post.time}</div>
            </div>
          </div>
          <img src={post.image} alt="post" className="post-image" />
          <div className="post-actions">
            <span role="img" aria-label="like">❤️</span> <b>{post.likes}</b>
          </div>
          <div className="post-caption">
            <span className="post-username">{post.user.username}</span> {post.caption}
          </div>
          <div className="post-comments">
            {post.comments.map((c, i) => (
              <div key={i}><span className="post-username">{c.user}</span> {c.text}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
