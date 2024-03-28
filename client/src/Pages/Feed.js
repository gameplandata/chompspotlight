import React, { useState, useEffect } from 'react';
import Post from '../Components/Post';
import Header from '../Components/HeaderWithoutSearch';
import Footer from '../Components/Footer';
import axios from 'axios';

function Feed() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios.get('http://localhost:3001/feed')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products:', error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);



  return (
    <div className="relative min-h-screen pt-20 pb-[20vh] flex justify-center items-center">
      <div
        className="fixed inset-0 z-0 w-full h-full bg-cover bg-test bg-center"/>
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


export default Feed;
