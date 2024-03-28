import React, { useState, useEffect } from 'react';
import Post from '../Components/Post';
import Header from '../Components/HeaderWithoutSearch';
import Footer from '../Components/Footer';
import axios from 'axios';

function SponsorFeed() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios.get('http://localhost:3001/feed/sponsor')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the athlete posts:', error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);



  return (
    <div className="relative min-h-screen pt-20 pb-[20vh] flex justify-center items-center">
      <div
        className="fixed inset-0 z-0 w-full h-full bg-cover bg-feed bg-center"/>
        <Header/>
      <div className="my-5 z-10">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <Footer />
    </div>
  );
}


export default SponsorFeed;
