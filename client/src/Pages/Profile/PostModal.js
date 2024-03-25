import React from 'react';
import Post from '../../Components/Post';

const PostModal = ({ post, showInteractions, deletable, onDelete, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
      <div className="bg-black bg-opacity-70 absolute inset-0"></div>
      <div className="bg-white p-4 rounded-lg max-w-[95%] max-h-[95%] overflow-auto shadow-xl relative">
        {deletable &&
        <div className="flex justify-center">
          <button onClick={onDelete} className="bg-gray-400 hover:bg-gray-300 text-white py-2 px-4 rounded-lg mb-4">Delete</button>
        </div>}
        <Post post={post} showInteractions={showInteractions}/>
        <button onClick={onClose} className="absolute top-0 right-0 m-4 text-3xl font-semibold">🗙</button>
      </div>
    </div>
  );
};

export default PostModal;
