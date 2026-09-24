"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assests/logo.png";

const Navber = () => {
  const [activeLink, setActiveLink] = useState("Workouts");

  return (
    <div className="bg-base-100">
      <section className="container mx-auto">
        <div className="navbar bg-base-200 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <button
                    onClick={() => setActiveLink("Workouts")}
                    className={`rounded-full px-5 py-2 text-sm font-semibold ${
                      activeLink === "Workouts"
                        ? "bg-lime-900 text-lime-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Workouts
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setActiveLink("My Plan")}
                    className={`rounded-full px-5 py-2 text-sm font-semibold ${
                      activeLink === "My Plan"
                        ? "bg-lime-900 text-lime-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    My Plan
                  </button>
                </li>
              </ul>
            </div>
            <Image src={logo} alt="logo" width={20} height={20} />
            <span className="btn btn-ghost text-md">FITLOG</span>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-2">
              <li>
                <button
                  onClick={() => setActiveLink("Workouts")}
                  className={`rounded-full px-5 py-2 text-sm font-semibold ${
                    activeLink === "Workouts"
                      ? "bg-lime-900 text-lime-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Workouts
                </button>
              </li>

              <li>
                <button
                  onClick={() => setActiveLink("My Plan")}
                  className={`rounded-full px-5 py-2 text-sm font-semibold ${
                    activeLink === "My Plan"
                      ? "bg-lime-900 text-lime-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  My Plan
                </button>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-3">
            <button className="flex items-center gap-2 text-gray-300">
              <span>Plan</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-black">
                0
              </span>
            </button>

            <button className="flex items-center gap-2 text-gray-400">
              <span>Saved</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-600 text-sm text-gray-300">
                0
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navber;
