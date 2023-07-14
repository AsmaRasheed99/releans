import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { fetchPostComments } from "../../actions/postComments";
import { useDispatch, useSelector } from "react-redux";

const Post = ({post, user}) => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    loading: postCommentsLoading,
    data: postCommentsData,
    error: postCommentsError,
  } = useSelector((state) => state.PostComments);

  useEffect(() => {
    dispatch(fetchPostComments(post.id));
  }, [dispatch]);


  const handlePosts = ((id)=>{
    Navigate(`/PostDetails/${id}`)
  })
  return (
    <>
  {/* component */}
  {/* post card */}
  <div className="flex bg-white shadow-lg rounded-lg  h-44 w-96 "  onClick={()=>{handlePosts(post.id)}}>

    <div className="flex items-start px-4 py-6">
      <img
        className="w-12 h-12 rounded-full object-cover mr-4 shadow"
        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
      />
      <div className="">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 -mt-1">
          </h2>
        </div>
        <p className="text-gray-700">
                      {user?.username}

          </p>
        <p className="mt-3 text-gray-700 text-sm">
        {post.title} 

        </p>
        <div className="mt-4 flex items-center">
     
          <div className="flex  text-gray-700 text-sm mr-8">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <span>
              {postCommentsData.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</>

  )
}

export default Post