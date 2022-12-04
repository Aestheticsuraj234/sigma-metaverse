import React from "react";

const Disadvantage = () => {
  return (
    <section className="h-screen w-screen container mx-auto  ">
      <div className="relative  mx-auto grid max-w-full grid-cols-1 space-x-6 items-center py-24 md:grid-cols-2 md:justify-start">
        <div className="absolute top-0 -left-1/2 h-[2px] w-full bg-gradient-to-r   from-indigo-400 dark:from-[#fff] "></div>
        <div className="mx-auto w-[90%] md:w-fit md:pl-10 md:text-start xl:pl-0">
          <p className=" text-base font-semibold uppercase md:text-xl  ">
            <span className="dark:text-[#6e96cf] text-indigo-800">
              Say Bye-Bye👋
            </span>
          </p>
          <p className=" mt-5 mb-8  text-2xl font-extrabold md:text-3xl   leading-7 md:leading-[2.8rem] ">
            <span className="dark:text-[#dbd8d3] text-gray-800  space-y-2">
              To the Social Gaints <br />
              Who sells your data to corporations
            </span>
          </p>
          <p>
            <span className="section_subheading text-[#989082]">
              Our App offers you top-notch Decentrality🤞.
            </span>
          </p>
        </div>
        <div className="relative grid place-content-center py-16 md:py-0 ">
          <video
            autoPlay
            muted
            playsInline
            loop
            className=" container rounded-lg w-72 h-72 md:h-full md:w-full"
          >
            <source
              src="https://www.piecex.com/assets/video/heros/homepage_nov30_2022.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Disadvantage;
