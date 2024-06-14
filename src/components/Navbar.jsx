
// react rout linking
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import React from "react";

const Navbar = () => {

  const isClassActive = ({isActive}) => 
    isActive ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'

  return (
    <div>
      <nav class="bg-indigo-700 border-b border-indigo-500">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="flex h-20 items-center justify-between">
            <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">

              {/* <!-- Logo --> */}
              <NavLink
                className="flex flex-shrink-0 items-center mr-4"
                to="/"
              >
                <img
                  class="h-10 w-auto"
                  //   react dynamic variable
                  src={logo}
                  alt="React Jobs"
                />
                <span class="hidden md:block text-white text-2xl font-bold ml-2">
                  React Jobs
                </span>
              </NavLink>

              {/* Navbar Here */}
              <div class="md:ml-auto">
                <div class="flex space-x-2">

                  <NavLink to='/' className={isClassActive} >
                    Home
                  </NavLink>

                  <NavLink to='/jobs' className={isClassActive}>
                    Jobs
                  </NavLink>

                  <NavLink to='/add-job' className={isClassActive}>
                    Add Job
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
