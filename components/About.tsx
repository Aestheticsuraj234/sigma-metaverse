import React from "react";

const About = () => {
  return (
    <section className="mt-10">
      <div className="relative overflow-hidden">
        <img
          src="https://codehelp.s3.ap-south-1.amazonaws.com/ggcp5ffn7v6vdnrrd53d_e563995c50.svg"
          alt="bg-illus"
          className="absolute top-0 left-0 h-[850px] w-[100vw] object-cover md:-translate-y-72 -translate-y-52"
        />
        <div className="absolute bottom-10 -left-40 -z-40 h-[490px] w-[490px] rounded-full bg-indigo blur-[100px]"></div>
        <div className="relative mx-auto max-w-screen px-6 py-12">
          <div className="flex justify-between items-center px-6 py-12">
            <p className="font-bold text-4xl">
              Meet Founder of
              <span className="font-extrabold text-4xl mx-3 text-indigo-400 dark:text-blue-400">
                SIGMA
              </span>
            </p>

            <a href="#Projects">
              <button className="cursor-pointer rounded-md bg-indigo-400 dark:bg-blue-400 text-[#fff] border-brand font-rubik xl:text-lg text-sm border md:px-7 md:py-3 px-4 py-2  md:text-base whitespace-nowrap">
                Explore
              </button>
            </a>
          </div>
          <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 h-1 w-full"></div>
          <div className="space-y-4 mt-4 flex justify-center items-center">
            <img
              className="w-44 h-44 mb-4 rounded-full shadow-lg  bg-gray-100 dark:bg-gray-800"
              src="https://www.piecex.com/assets/img/common/howItWorks3.png"
              alt="Bonnie image"
            />
          </div>
          <div className="text-center">
            <p className="text-3xl tracking-tight dark:text-gray-100 text-black font-bold">
              Suraj Kumar Jha
            </p>
            <p className="text-md tracking-tight text-gray-400 font-semibold">
              Founder, SIGMA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
