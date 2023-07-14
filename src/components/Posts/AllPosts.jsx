import React from "react";
import { fetchPosts } from "../../actions/posts";
import { fetchUsersData } from "../../actions/users";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";

const AllPosts = () => {


  
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

  return (
    <div className="grid lg:grid-cols-3 gap-10  place-items-center sm:grid-cols-1 md:grid-cols-2 m-16">
      {postsData?.map((post) => {
        const user = usersData?.filter((user) => {
          return user.id == post.userId;
        });
        console.log(user, post.userId)
        return <Post key={post.id} post={post} user={user[0]}/>;
      })}
    </div>
  );
};

export default AllPosts;
