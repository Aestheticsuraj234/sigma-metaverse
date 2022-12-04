import Link from "next/link";
import React, { useState } from "react";
import { BsFillCloudMoonFill, BsFillCloudSunFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState<boolean>(false);

  const { theme, setTheme } = useTheme();
  return (
    <>
      <nav className="flex sticky top-0 z-50 item-center justify-between py-6 shadow-md shadow-slate-600 dark:shadow-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 ">
        <Link href="/">
          <div className="flex items-center cursor-pointer ml-4">
            <span className="font-bold  text-primary">σ I G Σ A</span>
          </div>
        </Link>
        <ul className=" big-screen hidden md:flex items-center">
          <Link href="/">
            <li className="mr-6 font-medium dark:text-gray-200 text-gray-900">
              <a href="#">Home</a>
            </li>
          </Link>
          <Link href="/projects">
            <li className="mr-6 font-medium dark:text-gray-200 text-gray-900">
              <a href="#">Projects</a>
            </li>
          </Link>
          <Link href="/blog">
            <li className="mr-6 font-medium dark:text-gray-200 text-gray-900">
              <a href="#">Blog</a>
            </li>
          </Link>
          <Link href="/App">
            <li className="mr-6 font-medium dark:text-gray-200 text-gray-900">
              <a href="#">OurWorld</a>
            </li>
          </Link>
        </ul>
        <ul className=" hidden  md:flex items-center">
          <button
            className="mr-6  font-medium"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <BsFillCloudMoonFill className="text-2xl text-indigo-600" />
            ) : (
              <BsFillCloudSunFill className="text-2xl text-gray-100" />
            )}
          </button>

          {router.asPath == "/projects" ? (
            <button className="mr-6 font-medium">
              <div className="bg-red-600  animate-bounce h-4 w-4  rounded-full text-white text-center">
                <span className="text-center text-xs  relative bottom-1">
                  3
                </span>
              </div>
              <AiOutlineShoppingCart className="text-2xl text-indigo-600 dark:text-gray-100" />
            </button>
          ) : (
            <span></span>
          )}

          <li className="mr-6 font-medium dark:text-gray-200 text-gray-900">
            <a href="#" className="hover:text-gray-400">
              Log in
            </a>
          </li>

          <li className=" font-medium mr-6 dark:text-gray-200 text-gray-900">
            <a
              href="#"
              className="dark:bg-primary bg-indigo-500  py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all"
            >
              Sign up
            </a>
          </li>
        </ul>
        <ul className="mobile md:hidden flex flex-row">
          <button
            className="mr-6  font-medium"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <BsFillCloudMoonFill className="text-2xl text-indigo-600" />
            ) : (
              <BsFillCloudSunFill className="text-2xl text-gray-100" />
            )}
          </button>
          {router.asPath == "/projects" ? (
            <button className="mr-6 font-medium">
              <div className="bg-red-600  animate-bounce h-4 w-4  rounded-full text-white text-center">
                <span className="text-center text-xs  relative bottom-1">
                  3
                </span>
              </div>
              <AiOutlineShoppingCart className="text-2xl text-indigo-600 dark:text-gray-100" />
            </button>
          ) : (
            <span></span>
          )}
          <BiMenuAltRight
            onClick={() => {
              setToggle(!toggle);
            }}
            className="text-4xl px-13 mr-2 text-gray-900 dark:text-gray-100"
          />
          {toggle && (
            <nav className="flex flex-col absolute top-[5.2rem] right-0 z-50 item-center justify-start  py-6 h-screen w-52 shadow-md shadow-slate-600 dark:shadow-gray-400 bg-gradient-to-r from-indigo-200 to-blue-200   dark:bg-gradient-to-r  dark:from-gray-700 dark:via-gray-900 dark:to-black ">
              <ul className=" big-screen flex space-y-5 flex-col md:hidden  items-center">
                <Link href="/">
                  <li className="mr-6 font-medium dark:text-gray-200 text-gray-900">
                    <a href="#">Home</a>
                  </li>
                </Link>
                <Link href="/projects">
                  <li className="mr-6 font-medium dark:text-gray-200 text-gray-900">
                    <a href="#">Projects</a>
                  </li>
                </Link>
                <Link href="/blog">
                  <li className="mr-6 font-medium dark:text-gray-200 text-gray-900">
                    <a href="#">Blog</a>
                  </li>
                </Link>
                <Link href="/App">
                  <li className="mr-6 font-medium dark:text-gray-200 text-gray-900">
                    <a href="#">OurWorld</a>
                  </li>
                </Link>
                <li className="  mr-6 font-medium dark:text-gray-200 text-gray-900">
                  <a
                    href="#"
                    className="hover:text-gray-700 border-2 dark:border-blue-800 border-indigo-500 py-2 px-4  rounded-md"
                  >
                    Log in
                  </a>
                </li>

                <li className=" font-medium mr-6 dark:text-gray-200 text-gray-900">
                  <a
                    href="#"
                    className="dark:bg-blue-600  bg-indigo-500  py-2 px-4 rounded-md text-white hover:bg-primary-dark transition-all"
                  >
                    Sign up
                  </a>
                </li>
              </ul>
              <ul className=" hidden  md:flex items-center">
                <button
                  className="mr-6  font-medium"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {theme === "light" ? (
                    <BsFillCloudMoonFill className="text-2xl text-indigo-600" />
                  ) : (
                    <BsFillCloudSunFill className="text-2xl text-gray-100" />
                  )}
                </button>
              </ul>
            </nav>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
