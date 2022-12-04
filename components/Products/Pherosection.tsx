import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";

const Pherosection = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" font-medium text-3xl md:text-4xl mb-2 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-l dark:from-purple-600   dark:to-blue-400 text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-blue-600">
              The AI-powered Marketplace for
              <br />
              Buying & Selling Source Code
            </h1>
            <p className="mb-8 leading-relaxed">
              {" "}
              Accelerate software development with ready-to-use source code.
              Earn recurrent revenue by selling your own source code.
            </p>
            <SearchBar/>
            <div className="flex justify-center">
              <button className="inline-flex  border-0 py-2 px-6 focus:outline-none dark:bg-primary bg-indigo-500   rounded-md text-white hover:bg-primary-dark transition-all">
                Buy Code
              </button>
              <button className="ml-4 inline-focus:outline-none border-2  border-indigo-400   py-2 px-7 rounded-md dark:text-white text-gray-900 hover:bg-primary-dark transition-all">
                Sell Code
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center w-full h-full "
              src="https://www.piecex.com/assets/img/common/seller_home.png"
              alt="stats"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Pherosection;
