import React from "react";

const Pfeatures = () => {
  return (
    <section className="container mx-auto mt-10 ">
      <div className="flex container flex-col space-y-3 justify-start items-start">
        <h1 className="text-indigo-500 text-4xl mx-3 text-start drak:text-blue-400 font-bold truncate">
          Why Sigma Enterprise?
        </h1>
      </div>
      <div className=" mx-auto  w-fit justify-center gap-x-6 gap-y-16 py-6 text-center lg:grid-cols-3 xl:grid-cols-3 mt-7 grid ">
        <div className="">
          <div className="bg-[#fff] dark:bg-gray-900 flex min-h-[330px] max-w-[380px] flex-col items-center gap-y-4 px-4 py-12 rounded-md border-b-[6px] border-indigo-400  shadow-md z-20">
          <img src="https://www.piecex.com/assets/img/enterprise/goenterprise_solutions.png" className="object-contain h-40 w-40" />
            <p className="text-lg font-bold ">
              Get Enterprise Solutions For Your Business
            </p>
            <p className="max-w-[80%] text-base">
              SIGMA ”Enterprise” is a service that allows entrepreneurs who want
              to start new businesses to lessen software development for the
              business they want to start.
            </p>
          </div>
        </div>
        <div className="">
          <div className="bg-[#fff] dark:bg-gray-900 flex min-h-[330px] max-w-[380px] flex-col items-center gap-y-4 px-4 py-12 rounded-md border-b-[6px] border-indigo-400  shadow-md z-20">
          <img src="https://www.piecex.com/assets/img/enterprise/goenterprise_solve.png" className="object-contain h-40 w-40" />
            <p className="text-lg font-bold ">
              Solve Complex Selection & Integration
            </p>
            <p className="max-w-[80%] text-base">
              It may be challenging for a starting business to find the
              application or software needed to start their business, which is
              why PieceX Enterprise solutions also provide consultancy services
              for selecting easy to integrate and implement software that can be
              fitted for an organization’s system.
            </p>
          </div>
        </div>
        <div className="">
          <div className="bg-[#fff] dark:bg-gray-900 flex min-h-[330px] max-w-[380px] flex-col items-center gap-y-4 px-4 py-12 rounded-md border-b-[6px] border-indigo-400  shadow-md z-20">
            <img src="https://www.piecex.com/assets/img/enterprise/goenterprise_reduceexpensive.png" className="object-contain h-40 w-40" />
            <p className="text-lg font-bold ">
              Reduce Expensive Software Development Process
            </p>
            <p className="max-w-[80%] text-base">
              Developing large complex enterprise software in-house is resource
              and time consuming and could require lots of expertise which most
              companies do not have.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pfeatures;
