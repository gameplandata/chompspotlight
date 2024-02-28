import React, { useState, useEffect } from 'react';
import Post from '../Components/Post';
import Header from '../Components/HeaderWithoutSearch';
import Footer from '../Components/Footer';

function Feed() {

    return (
        <div className="relative bg-white min-h-screen pt-20 pb-[10vh]">
            <Header />
            <div className="my-5">
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            <Footer />
        </div>
    );
}

export default Feed;
