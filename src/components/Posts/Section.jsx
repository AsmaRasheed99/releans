import React, { useState } from "react";
import { fetchPosts } from "../../actions/posts";
import { fetchUsersData } from "../../actions/users";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { HashLink } from "react-router-hash-link";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PostSection = () => {

  

  const {
    loading: postsLoading,
    data: postsData,
    error: postsError,
  } = useSelector((state) => state.Posts);

  const {
    loading: usersLoading,
    data: usersData,
    error: userError,
  } = useSelector((state) => state.usersData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsersData());
  }, [dispatch]);
  //   console.log(postsData)


  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
    <div 
    id="post"
    className="bg-base-200 sm:p-0 lg:p-5">
      <section className=" dark:bg-gray-900 m-24">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Posts
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
          </p>
        </div>
      </section>
      <div data-aos="zoom-in-up" data-aos-duration="1000" className="grid lg:grid-cols-3 gap-10  place-items-center sm:grid-cols-1 md:grid-cols-2 m-16">
        {postsData.slice(-3)?.map((post) => {
          const user = usersData?.filter((user) => {
            return user.id == post.userId;
          });
          // console.log(user, post.userId)
          return <Post key={post.id} post={post} user={user[0]} />;
        })}
      </div>
      <div className="flex justify-center">
        <HashLink to="/AllPosts#">
          <button className="btn hover:bg-white bg-[#75d5c7a8] text-white  hover:text-black border-white border-2 hover:border-black">Check more posts</button>{" "}
        </HashLink>
      </div>
      </div>
    </>
  );
};

export default PostSection;
