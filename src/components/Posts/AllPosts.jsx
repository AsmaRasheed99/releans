import React, { useState } from "react";
import { fetchPosts } from "../../actions/posts";
import { fetchUsersData } from "../../actions/users";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import Pagination from "@mui/material/Pagination";
import AddPost from "./AddPost"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { AddNewPost } from "../../actions/addPost";
const AllPosts = () => {
  const [filterdPosts, setFilterdPosts] = useState(null);


  
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

  const {
    loading: addPostLoading,
    data: addPostData,
    error: addPostError,
  } = useSelector((state) => state.AddNewPost);
  
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsersData());
  }, [dispatch]);
 
  useEffect(()=>{
    setFilterdPosts(postsData)
  },[postsData])

  useEffect(() => {
    const addedComment = [...postsData] ;
    addedComment.unshift(addPostData)
    setFilterdPosts(addedComment)
  }, [addPostData,dispatch]);
  
  // pagination 
  const [currentPagePosts, setCurrentPagePosts] = useState(1);

  let totalItemsPosts;

  let totalPagesPosts;

  let slicedArrayPosts;

  const itemsPerPage = 6;

  totalItemsPosts = filterdPosts?.length;

  totalPagesPosts = Math.ceil(totalItemsPosts / itemsPerPage);

  const startIndexPosts = (currentPagePosts - 1) * itemsPerPage;

  const endIndexPosts = startIndexPosts + itemsPerPage;

  slicedArrayPosts = filterdPosts?.slice(startIndexPosts, endIndexPosts);

  const handlePageChangePosts = (event, pageNumber) => {
    setCurrentPagePosts(pageNumber);
  };

// search 
const [searchPost, setSearchPost] = useState("");

const filteredPostsByTitle = (searchTermPost) => {
  const filteredDataPost = postsData.filter((item) =>
    item.title.toLowerCase().includes(searchTermPost.toLowerCase())
  );
  setFilterdPosts(filteredDataPost);
  setCurrentPagePosts(1);
};



  return (
    <div className="bg-base-200 px-16">
       <div className="relative w-full flex justify-center items-center pt-5 ">
      <input
        type="search"
        id="search-dropdown"
        className="block  p-2.5 w-[50%] z-10 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
        placeholder="Search by username..."
        required=""
        value={searchPost}
        onChange={(e) => {
          setSearchPost(e.target.value);
          filteredPostsByTitle(e.target.value);
        }}
      />
     {/* <button className="btn bg-[#75d5c7a8] text-white  ">Add new posts</button> */}
     {localStorage.user !== undefined ?
     
     <AddPost />

     :
     
     <Link to="/Login">
      <button className="bg-[#75d5c7a8] text-white hover:bg-white hover:text-black h-10 p-1 rounded-md" 
       >Log In to Add post</button>
   </Link>
     }
     {" "}

    </div>
    <div className="grid lg:grid-cols-3 gap-10 mx-5  place-items-center sm:grid-cols-1 md:grid-cols-2 mt-16">
      {slicedArrayPosts?.map((post) => {
        const user = usersData?.filter((user) => {
          return user.id == post.userId;
        });
        return <Post key={post.id} post={post} user={user[0]}/>;
      })}
    </div>
     <div className="flex w-full justify-center py-14">
     {
       <Pagination
         count={totalPagesPosts}
         page={currentPagePosts}
         onChange={handlePageChangePosts}
       />
     }
   </div>
   </div>
  );
};

export default AllPosts;
