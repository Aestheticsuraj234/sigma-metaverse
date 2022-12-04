import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
const HeroSection = () => {
  const [text, count] = useTypewriter({
    words: [
      "Welcome to Our World",
      `Hey!, This is SIGMA `,
      "Guy-who-loves-coffee.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" font-medium sm:text-4xl md:text-4xl mb-2 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-l dark:from-purple-600   dark:to-blue-400 text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-blue-600">
              {text}
              <Cursor cursorColor="indigo" />
            </h1>
            <p className="mb-8 leading-relaxed">
              {" "}
              Sigma is a new Decentralized Content Platform. You can create and
              share content quickly, safely and in high quality. Using our token
              called SIGMA, you can tip artists, reward users for the good
              content they make and even help them become World best content
              creator.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex  border-0 py-2 px-6 focus:outline-none dark:bg-primary bg-indigo-500   rounded-md text-white hover:bg-primary-dark transition-all">
                Projects
              </button>
              <button className="ml-4 inline-focus:outline-none border-2  border-indigo-400   py-2 px-7 rounded-md dark:text-white text-gray-900 hover:bg-primary-dark transition-all">
                Blog
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center w-full h-full "
              src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2Fbzfszobhjsgbjk2xb2ha_275f4fb989.png&w=3840&q=75"
              width={376}
              height={456}
              alt="stats"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
