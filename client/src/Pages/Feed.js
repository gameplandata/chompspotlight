import React, { useState, useEffect } from 'react';
import Post from '../Components/Post';
import Header from '../Components/HeaderWithoutSearch';
import Footer from '../Components/Footer';

const mockPost = [
    {
      id: 1,
      username: "test1",
      profilePicture: "tori.jpg",
      url: "tori.jpg",
      caption: "An engaging caption goes here.",
      instagram: "instagram",
      tiktok: "tiktok",
      x: "x",
    },
    {
      id: 2,
      username: "test1",
      profilePicture: "tori.jpg",
      url: "/images/profile/post2.jpg",
      caption: "An engaging caption goes here.",
      instagram: "instagram",
      tiktok: "tiktok",
      x: "x",
    }
  ];
  
  function Feed() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      setPosts(mockPost);
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
