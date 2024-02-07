import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="shadow-lg">
      <nav className="flex items-center justify-between">
        <img
          className="w-40 h-14 float-left"
          src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
        />
        <ul className="flex justify-between">
          <li className="mr-8 text-lg text-gray-700">
            <NavLink
              to={""}
              className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-gray-700"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mr-8 text-lg text-gray-700">
            <NavLink
              to={"about"}
              className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-gray-700"}`
              }
            >
              About me
            </NavLink>
          </li>
          <li className="mr-8 text-lg text-gray-700">
            <NavLink
              to={"contact"}
              className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-gray-700"}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="mr-8 text-lg text-gray-700">
            <NavLink
              to={"socials"}
              className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-gray-700"}`
              }
            >
              Socials
            </NavLink>
          </li>
        </ul>
        <div>
          <button className="bg-orange-700 px-4 py-1 mr-4 rounded-lg text-white">
            Log in
          </button>
          <button className="bg-gray-700 px-4 py-1 mr-4 rounded-lg text-white">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
}
