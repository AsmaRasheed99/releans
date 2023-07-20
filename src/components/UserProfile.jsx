import React, { useEffect, useState } from "react";
import { fetchPosts } from "../actions/posts";
import { useDispatch, useSelector } from "react-redux";
import Icon from "@mdi/react";
import { mdiDelete } from "@mdi/js";
import axios from "axios";
import EditPost from "./Posts/EditPost";
import Swal from "sweetalert2";
import profile from '../components/images/profile.jpg'

const UserProfile = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [user, setUser] = useState();

  const {
    loading: postsLoading,
    data: postsData,
    error: postsError,
  } = useSelector((state) => state.Posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
    const userPosts = postsData?.filter((post) => {
      return post.userId === userData.id;
    });
    setUserPosts(userPosts);
  }, [postsData]);
  console.log(user);

  const handleDelete = async(id) => {
 
  try {
     const deleted = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
     Swal.fire({
      title: `Your post was successfully deleted`,
      icon: "success",
      confirmButtonText: "OK",
    });
  } catch (error) {
    
    Swal.fire({
      title: "Error",
      text: "something went wrong",
      icon: "error",
      confirmButtonText: "OK",
    });
    console.error(error.message)
  }


  }

  return (
    <>
      <div className="h-fullp-8">
        <div className="bg-white rounded-lg shadow-xl pb-8">
          <div className="w-full h-[350px]">
            <img
              src={profile}
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAMAAAALZFNgAAAAMFBMVEXh4eGjo6Pk5OSgoKDAwMCnp6fU1NTc3NzZ2dnIyMitra3Pz8+7u7vMzMywsLCdnZ0Coyz1AAADHUlEQVR4nO2b2XLrIAxAQZjVLP//twUnvWlSOyhmceeOzkOb9KVnhCKDRBgjCIIgCIIgiBEAANPG6O3FhRbGeik2pLfmIhdgIXIh+J38KgZ2gQoo97D4dnFqtglon/gOyeupKmCk2PPIUZFmogkoua9RkPOWB9SxRmGaiX4Tjy0mepJIPMiPf3kSp2iArXhkEztjcWoLM2txYKkGJIdkmRCSukZhuAaE3Yr6SgqjQwIesTJ5bfxoEUyqFoana6WoPlCDRQJqZfLahLEeiGp2Fxlc01BVZBMZXElI5JfIX8kRtmJF1rEezGALmhkswhxOxI32+DPPGlC4p+/4DTSgkkSO3xihPsBzNq2uvnkenqoFqJcSsU45YsFSydc0Y+u88f6ENel8VdDv0kS4WSfOYnIcExEnemSOCqzwUzXK+YbvqAg+pYA8mzD/2jUS0l/RzWNgFsfFraNXfrllZtfqWYUp66PMRG/VJdF4uGwtZ7i08UwQBEH8t5THizZKqXXNP4xmF4w683/UJj94nZR5B5BS3gRI6fIj2OiJMsBM8E4k8Xu4mP/ofDATNgTA9Oodf1V41uHOr3qoDLC1DJyPJR4y0q+jVPJ2zPOE7Fxll8T9iE0b6BAxsXiOSwydx8AAweGD8TMsLnT8FOXUkKg+0R5JdksWMLWxZiUssc8xA9a9M91HJrxLv6TWDcGQlnaPtmX5pr1ngmurIkwauwS9PBpNADs4Q5m0TGD7aRTOBwQ7nMHR0AVGTiKwnG4Do2e8WM7OgrHTKiynp1qmrwfnZ6daYDtU9wfpfLJCn/p+Q8SGOoK9G4Gh6f5E7cbZJ7QN17oV+aYCv5lgZ/AVj/YRTheTLjcFOph0urHQbNLt5gSENpF+V8FAHd2jRYSj6/1WMO5ktU+u8+wEljOnG8H7T15Bff7gEXHEXQVg9rN2gBB2UIsE2Afrk1dlYNMIzK+J4oGG9IMHfKCtrHVKRJJ2wj19AFXaecdL4rya1OIE0Gpxkr80F8s76Ralp7Z9i4xd4jb43eAuLnayxA+b2/d87t/0oYkrQRAEQRAEMYIvzRkca8qfsGEAAAAASUVORK5CYII="
              className="w-40 border-4 border-white rounded-full"
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">{user?.username}</p>
            </div>
            <p className="text-blue-500">
              <a href={user?.website} target="_blank">
              {user?.website}
              </a>
            </p>
            <p className="text-sm text-gray-500">{user?.address.city}</p>
          </div>
        </div>
        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="w-full flex flex-col 2xl:w-1/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
              <ul className="mt-2 text-gray-700">
                <li className="flex border-y py-2">
                  <span className="font-bold w-24">Full name:</span>
                  <span className="text-gray-700">{user?.name}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Work At:</span>
                  <span className="text-gray-700">{user?.company.name}</span>
                </li>

                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Mobile:</span>
                  <span className="text-gray-700">{user?.phone}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Email:</span>
                  <span className="text-gray-700">{user?.email}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Location:</span>
                  <span className="text-gray-700">
                    {user?.address.city}, {user?.address.street}
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Suite:</span>
                  <span className="text-gray-700">{user?.address.suite}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Zipcode:</span>
                  <span className="text-gray-700">{user?.address.zipcode}</span>
                </li>
                <li className="flex items-center border-b py-2 space-x-2">
                  <span className="font-bold w-24">Elsewhere:</span>
              
                  <a href="https://www.linkedin.com/in/asma-rasheed-18b441267/" target="_blank" title="LinkedIn">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 333333 333333"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path
                        d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
                        fill="#0077b5"
                      />
                    </svg>
                  </a>
                  <a href="https://github.com/AsmaRasheed99?tab=repositories" target="_blank" title="Github">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={0}
                      height={0}
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0 640 640"
                    >
                      <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full 2xl:w-2/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
              <h4 className="text-xl text-gray-900 font-bold">My Posts:</h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
                {userPosts?.map((post) => {
                  return (
                    <div
                      className="relative px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl"
                      key={post.id}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-indigo-600">
                          {user?.username}
                        </span>
                        <span>
                          <EditPost id={post.id}/>
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-between mt-6">
                        <div className="font-bold">{post.title}</div>
                        <div className="flex flex-col">
                          <div className="my-5">{post.body}</div>
                        </div>
                      </div>
                      <Icon onClick={()=>{handleDelete(post.id)}} className="absolute left-2 bottom-2 cursor-pointer" color={"red"} path={mdiDelete} size={1}  />
                    </div>
                  );
                })}
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
