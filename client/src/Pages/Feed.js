import React, { useState, useEffect } from 'react';
import Post from '../Components/Post';
import Header from '../Components/HeaderWithoutSearch';
import Footer from '../Components/Footer';
import axios from 'axios';

// const mockPost = [
//   {
//     id: 1,
//     username: "test1",
//     profilePicture: "tori.jpg",
//     url: "tori.jpg",
//     caption: "An engaging caption goes here.",
//     instagram: "instagram",
//     tiktok: "tiktok",
//     x: "x",
//   },
//   {
//     id: 2,
//     username: "test1",
//     profilePicture: "tori.jpg",
//     url: "/images/profile/post2.jpg",
//     caption: "An engaging caption goes here.",
//     instagram: "instagram",
//     tiktok: "tiktok",
//     x: "x",
//   }
// ];

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
    <div className="relative bg-white min-h-screen pt-20 pb-[20vh] flex justify-center items-center">
      <Header />
      <div className="my-5">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <Footer />
    </div>
  );
}


export default Feed;
