import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const SocialCommunity = () => {
  return (
    <section className="h-screen w-screen flex flex-col  justify-center items-center  ">
      <div className="text-center items-center">
        <h1 className=" text-3xl md:text-5xl  font-extrabold px-4 py-4">
          Join our Communtiy
        </h1>
        <p className="text-xl m-2 font-bold text-gray-500 truncate text-center">
          If you would like to keep up on the latest posts and projects,
          <br /> come by and connect with us on the following links.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-4 m-2 p-4 grid-cols-2 mx-auto space-x-10">
        <div className="flex flex-col mx-4 my-4">
          <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FYoutube_Oct_Denoiser_Beauty_001_copy_6a63d8ef65.png&w=2048&q=75" />
          <h2 className="font-bold inline-block text-3xl text-red-600">
            <BiLinkExternal className="inline-block" /> Youtube
          </h2>
        </div>
        <div className="flex flex-col mx-4 my-4">
          <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FLinked_In_Oct_Denoiser_Beauty_001_copy_b6e0b974bb.png&w=2048&q=75" />
          <h2 className="font-bold inline-block text-3xl text-blue-400">
            <BiLinkExternal className="inline-block" /> LinkedIn
          </h2>
        </div>
        <div className="flex flex-col mx-4 my-4">
          <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FDiscord_Oct_Denoiser_Beauty_001_copy_a253ed4d28.png&w=2048&q=75" />
          <h2 className="font-bold inline-block text-3xl text-indigo-400">
            <BiLinkExternal className="inline-block" /> Discord
          </h2>
        </div>
        <div className="flex flex-col mx-4 my-4">
          <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FTelegram_Oct_Denoiser_Beauty_002_copy_fa9aeac119.png&w=2048&q=75" />
          <h2 className="font-bold inline-block text-3xl text-blue-300">
            <BiLinkExternal className="inline-block" /> Telegram
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SocialCommunity;
