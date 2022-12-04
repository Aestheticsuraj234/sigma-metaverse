import React from "react";

const Information = () => {
  return (
    <div className="flex flex-col md:flex-row mt-8 w-full h-60 bg-indigo-400  dark:bg-blue-400 text-white border-1  ">
      <div className="md:container m-auto grid  gap-x-6  grid-cols-2 md:flex  md:flex-row md:justify-between md:items-center md:space-x-9">
        <div className="border-r-2 m-4 pr-20 text-center border-indigo-100 ">
          <h1 className="md:text-6xl  text-4xl  font-extrabold "> 100K+</h1>
          <span>Subscriber on Youtube</span>
        </div>
        <div className="border-r-2 m-4 pr-20 text-center border-indigo-100 ">
          <h1 className="md:text-6xl  text-4xl font-extrabold ">4.5K+</h1>
          <span>Followers on Instagram</span>
        </div>
        <div className="border-r-2 m-4 pr-20 text-center border-indigo-100 ">
          <h1 className="md:text-6xl  text-4xl font-extrabold ">10K+</h1>
          <span>Followers on LinkedIn</span>
        </div>
        <div className=" border-r-2 m-4 pr-20 text-center border-indigo-100 ">
          <h1 className="md:text-6xl   text-4xl font-extrabold ">11K+</h1>
          <span>Member on Telegram</span>
        </div>
      </div>
    </div>
  );
};

export default Information;
