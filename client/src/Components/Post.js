import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faAddressBook, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Post = () => {
    return (
        <div className="mx-auto w-[28rem] pb-4">
            <div className="flex-col justify-center items-center border-2 border-gray rounded-xl p-1">
                <div className="self-stretch flex flex-row justify-start items-center pt-2">
                    <img src="tori.jpg" alt="Profile Picture" class="w-24 h-24 object-cover rounded-full flex-shrink-0"></img>
                    <div className="text-left text-2xl pl-4"> Username </div>
                    <div className="flex justify-between items-center w-full px-12">
                        <div className="text-center">
                            <a href={`https://www.instagram.com/`} target="_blank" rel="noopener noreferrer">
                                <img src="/images/profile/instagram.jpg" alt="Instagram" className="mx-auto w-6 h-6 cursor-pointer" />
                            </a>
                        </div>
                        <div className="text-center">
                            <a href={`https://www.tiktok.com/`} target="_blank" rel="noopener noreferrer">
                                <img src="/images/profile/tiktok.jpg" alt="TikTok" className="mx-auto w-6 h-6 cursor-pointer" />
                            </a>
                        </div>
                        <div className="text-center">
                            <a href={`https://twitter.com/`} target="_blank" rel="noopener noreferrer">
                                <img src="/images/profile/x.jpg" alt="X" className="mx-auto w-6 h-6 cursor-pointer" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start items-center pt-4">
                    <div className="text-center text-lg leading-4"> This is where you would put your caption when making a post. It is important that this works so we can make sure that the posts show correctly. </div>
                </div>
                <div className="flex justify-center items-center pt-4">
                    <img src="tori.jpg" alt="Profile Picture" class="w-[28rem] h-[28rem] object-cover"></img>
                </div>
                <div className="flex justify-between pt-2 pb-1">
                    <div className="flex justify-start items-center">
                        <FontAwesomeIcon icon={faThumbsUp} size="2x" />
                        <div className="text-center text-md leading-4 pl-2"> Like </div>
                    </div>
                    <div className="flex justify-start items-center">
                        <FontAwesomeIcon icon={faComment} size="2x" />
                        <div className="text-center text-md leading-4 pl-2"> Comment </div>
                    </div>
                    <div className="flex justify-start items-center">
                        <FontAwesomeIcon icon={faAddressBook} size="2x" />
                        <div className="text-center text-md leading-4 pl-2"> Contact </div>
                    </div>
                    <div className="flex justify-start items-center">
                        <FontAwesomeIcon icon={faUserPlus} size="2x" />
                        <div className="text-center text-md leading-4 pl-2"> Follow </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
