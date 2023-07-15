import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/AllPosts" className="flex items-center">
          Posts
        </Link>
      </Typography>
    </ul>
  );
   

  const handleLogOut = ()=> {
    localStorage.removeItem("user");
    setLoggedIn(false);

  }

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <Typography className="mr-4 cursor-pointer  font-bold text-lg">
              <img className="h-auto w-20" src="https://o.remove.bg/downloads/6d615658-6489-4c1d-9663-afd0fad8ce1d/Screenshot_2023-07-15_121906-removebg-preview.png" alt="" />
            </Typography>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {localStorage.user !== undefined && loggedIn ? (
              <>
              <Link to="/Profile">
                <Button
                  size="sm"
                  className="hidden lg:inline-block bg-[#75d5c7]"
                >
                  <span>Profile</span>
                </Button>
              </Link>
                <Button
                  size="sm"
                  className="hidden lg:inline-block bg-[#75d5c7]"
                  onClick={handleLogOut}
                >
                  <span>Log Out</span>
                </Button>
              </>
            ) : (
              <Link to="LogIn">
                <Button
                  size="sm"
                  className="hidden lg:inline-block bg-[#75d5c7]"
                >
                  <span>Log In</span>
                </Button>
              </Link>
            )}

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
         
          <Link to="/Login">
            <Button size="sm" fullWidth className="mb-2 bg-[#75d5c7]">
              <span>Log In</span>
            </Button>{" "}
          </Link>
        </MobileNav>
      </Navbar>
    </>
  );
}
