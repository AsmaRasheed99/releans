import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostComments } from "../../actions/postComments";
import  { fetchPostDetails } from "../../actions/postDetails";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    loading: PostDetailsLoading,
    data: PostDetailsData,
    error: PostDetailsError,
  } = useSelector((state) => state.PostDetails);

  const {
    loading: postCommentsLoading,
    data: postCommentsData,
    error: postCommentsError,
  } = useSelector((state) => state.PostComments);

 

  useEffect(() => {
    dispatch(fetchPostComments(id));
    dispatch(fetchPostDetails(id));
  }, [dispatch]);



  return (
    <>
      <section className="w-screen text-gray-600 body-font ">
        <div className="container w-screen px-5 py-24 mx-auto">
          <div className="flex w-full flex-wrap justify-center ">
            <div className="p-4 md:w-full">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="p-6 ">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {PostDetailsData?.title}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {PostDetailsData?.body}
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      {postCommentsData.length}
                    </span>
                    <div className="w-full bg-white rounded-lg border p-2 my-4">
                      <h3 className="font-bold">Discussion</h3>
                      <form>
                        {postCommentsData.map((comment) => {
                          return (
                            <div className="flex flex-col" key={comment.id}>
                              <div className="border rounded-md p-3 ml-3 my-3">
                                <div className="flex gap-3 items-center">
                                  <img
                                    src="https://avatars.githubusercontent.com/u/22263436?v=4"
                                    className="object-cover w-8 h-8 rounded-full 
                   border-2 border-emerald-400  shadow-emerald-400
                   "
                                  />
                                  <h3 className="font-bold">{comment.name}</h3>
                                </div>
                                <p className="text-gray-600 mt-2">
                                  {comment.body}
                                </p>
                              </div>
                            </div>
                          );
                        })}

                        <div className="w-full px-3 my-2">
                          <textarea
                            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                            name="body"
                            placeholder="Type Your Comment"
                            required=""
                            defaultValue={""}
                          />
                        </div>
                        <div className="w-full flex justify-end px-3">
                          <input
                            type="submit"
                            className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
                            defaultValue="Post Comment"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetails;
