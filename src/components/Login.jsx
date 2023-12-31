import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersData } from "../actions/users";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("")

const Navigate = useNavigate()
  const {
    loading: usersLoading,
    data: usersData,
    error: userError,
  } = useSelector((state) => state.usersData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);
 


  const handleSubmit =  (e) => {
    e.preventDefault();
    usersData.map((user)=>{

      if (user.email === email) {

        if (user.email === password) {
          setError("")
          localStorage.setItem("user", JSON.stringify(user));
          window.location.href = "/";
        } else {

          setError("Incorrect password or email");
        }
      }
    })
  };
  return (
    <>
      <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12 bg-base-200">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#75d5c7] to-[#F9D1DC] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Login</h1>
              </div>
              <form
                className="divide-y divide-gray-200"
                onSubmit={handleSubmit}
              >
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      className="bg-[#75d5c7] text-white rounded-md px-2 py-1"
                      type="submit"
                    >
                      Submit
                    </button>
                    <p className="text-sm text-red-500">{Error}</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
