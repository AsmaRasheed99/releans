import React from 'react'
import {useNavigate } from 'react-router-dom'

const Post = ({post, user}) => {
  const Navigate = useNavigate();


  const handlePosts = ((id)=>{
    Navigate(`/PostDetails/${id}`)
  })
  return (
    <>
  {/* component */}
  {/* post card */}

      <article
      onClick={()=>{handlePosts(post.id)}}
      className="p-6 hover:scale-105 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full h-full flex flex-col justify-between cursor-pointer">
        <div className="flex justify-between items-center mb-5 text-gray-500">
          <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
            <svg
              className="mr-1 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                clipRule="evenodd"
              />
              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
            </svg>
            Post
          </span>
        </div>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
        {post.title} 
        </h2>
        <p className="mb-5 font-light text-gray-500 dark:text-gray-400 ">
        {post.body} 
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              className="w-7 h-7 rounded-full"
              src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
              alt="Bonnie Green avatar"
            />
            <span className="font-medium dark:text-white">{user?.username}</span>
          </div>
   
        </div>
      </article>










</>

  )
}

export default Post