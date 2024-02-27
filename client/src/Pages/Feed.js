import React, { useState, useEffect } from 'react';
import Post from '../Components/Post';

function Feed() {

    return (
        <div className="bg-white min-h-screen p-4">
           <Post />
           <Post />
           <Post />
           <Post />
        </div>
    );
}

export default Feed;
