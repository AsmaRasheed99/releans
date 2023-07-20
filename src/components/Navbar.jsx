import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  LifebuoyIcon,
  PowerIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  const navigate = useNavigate();

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
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal"
        onClick={() => setOpenNav(false)}
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal"
        onClick={() => setOpenNav(false)}
      >
        <Link to="/AllPosts" className="flex items-center">
          Posts
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal"
        onClick={() => setOpenNav(false)}
      >
        <Link to="/About" className="flex items-center">
          About us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal"
        onClick={() => setOpenNav(false)}
      >
        <Link
          to="/Contact"
          className="flex items-center"
          onClick={() => setOpenNav(false)}
        >
          Contact us
        </Link>
      </Typography>
    </ul>
  );

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setLoggedIn(false);
    setOpenNav(false);
    navigate("/");
  };

  const profileMenuItems = [
    {
      label: "Profile",
      icon: LifebuoyIcon,
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
    },
  ];
  function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = (label) => {
      setIsMenuOpen(false);

      if (label == "Sign Out") {
        localStorage.removeItem("user");

        window.location.href = "http://localhost:3000/";
      } else if (label == "Profile") {
        window.location.href = "http://localhost:3000/Profile";
      }
    };

    return (
      <div className="hidden lg:inline-block">
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 "
            >
              <svg
                xmlns="https://source.unsplash.com/MP0IUfwrn0A"
                className="h-7 w-7 text-[#75d5c7]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {" "}
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform text-black ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </MenuHandler>
          <MenuList className="p-1">
            {profileMenuItems.map(({ label, icon }, key) => {
              const isLastItem = key === profileMenuItems.length - 1;
              return (
                <MenuItem
                  key={label}
                  onClick={() => {
                    closeMenu(label);
                  }}
                  className={`flex items-center gap-2 rounded  ${
                    isLastItem
                      ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                      : ""
                  }`}
                >
                  {React.createElement(icon, {
                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                    strokeWidth: 2,
                  })}
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? "red" : "inherit"}
                  >
                    {label}
                  </Typography>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </div>
    );
  }
  return (
    <>
      <Navbar className="sticky top-0 z-20 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <Typography
              id="logo"
              className="mr-4 cursor-pointer  font-bold text-2xl"
            >
              <span className=" text-[#75d5c7]">R</span>eleanse
            </Typography>
          </Link>

          <div className="flex items-center gap-4 ">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className=" absolute right-5 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
          {localStorage.user !== undefined && loggedIn ? (
            <>
              <ProfileMenu />
            </>
          ) : (
            <Link to="LogIn">
              <Button size="sm" className="hidden lg:inline-block bg-[#75d5c7]">
                <span>Log In</span>
              </Button>
            </Link>
          )}
        </div>
        <Collapse open={openNav}>
          {navList}

          {localStorage.user !== undefined ? (
            <>
              <Link to="/Profile">
                <Button
                  onClick={() => setOpenNav(false)}
                  size="sm"
                  fullWidth
                  className="mb-2 bg-[#75d5c7]"
                >
                  <span>Profile</span>
                </Button>{" "}
              </Link>

              <Button
                size="sm"
                className=" w-full lg:inline-block bg-[#75d5c7]"
                onClick={handleLogOut}
              >
                <span>Log Out</span>
              </Button>
            </>
          ) : (
            <Link to="/Login">
              <Button
                onClick={() => setOpenNav(false)}
                size="sm"
                fullWidth
                className="mb-2 bg-[#75d5c7]"
              >
                <span>Log In</span>
              </Button>{" "}
            </Link>
          )}
        </Collapse>
      </Navbar>
    </>
  );
}
