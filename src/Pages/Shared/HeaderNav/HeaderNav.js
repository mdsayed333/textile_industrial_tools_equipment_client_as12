import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const HeaderNav = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const menuItems = (
    <>
      <li>
        <Link to="/" className="myButtonSm mr-2 mb-2">Home</Link>
      </li>
      <li>
        <Link to="/blog" className="myButtonSm mr-2 mb-2">Blogs</Link>
      </li>
      <li>
        <Link to="/portfolio" className="myButtonSm mr-2 mb-2">My Portfolio</Link>
      </li>
      
      
      <li>{user && <Link to="/dashboard" className="myButtonSm mr-2 mb-2">Dashboard</Link>}</li>
      
      <li>
        {user ? (
          <button className="myButtonSm" onClick={handleSignOut}>
            Log Out
          </button>
        ) : (
          <Link to="/login" className="myButtonSm">Login</Link>
        )}
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">
            Textile Industrial <br /> Tools And Equipment
          </a> */}
          <Link to="/" className="font-bold text-2xl">Textile Industrial <br /> Tools And Equipment</Link>
        </div>
        {/* Dashboard Open Sidebar Icon */}
        <div className="navbar-end">
          <label
            tabIndex="1"
            htmlFor="my-drawer-2"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
