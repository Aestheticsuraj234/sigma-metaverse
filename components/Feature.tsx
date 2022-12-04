import React from "react";
import { BsFillFilePostFill } from "react-icons/bs";
import { GiCutDiamond, GiToken } from "react-icons/gi";
import { SlSocialSteam } from "react-icons/sl";

const Feature = () => {
  return (
    <section className="container mx-auto mt-10 ">
      <div className="flex container flex-col space-y-3 justify-center items-center">
        <h2 className="text-indigo-500 text-center drak:text-blue-400 font-bold truncate">
          WHY SIGMA?
        </h2>
        <h1 className="text-black text-center md:text-4xl text-2xl dark:text-white font-extrabold truncate">
          Sigma provides you with the opportunity
          <br />
        </h1>
        <span className="mt-4 text-black   text-center md:text-4xl text-2xl dark:text-white font-extrabold truncate">
          To monetize your content From the Day-1
        </span>
        .
      </div>
      <div className=" mx-auto  w-fit justify-center gap-x-6 gap-y-16 py-6 text-center lg:grid-cols-2 xl:grid-cols-3 mt-7 grid ">
        <div className="">
          <div className="bg-[#fff] dark:bg-gray-900 flex min-h-[330px] max-w-[380px] flex-col items-center gap-y-4 px-4 py-12 rounded-md border-b-[6px] border-indigo-400  shadow-md z-20">
            <div className="grid place-content-center rounded-full p-4 bg-gradient-to-r from-cyan-600 to-cyan-400 ">
              <div>
                <SlSocialSteam className="h-10 w-10" />
              </div>
            </div>
            <p className="text-lg font-bold ">
              Share content that you own and connect freely
            </p>
            <p className="max-w-[80%] text-base">
              The blockchain technology finally makes it possible for you to
              build social profiles that you actually own and no one can take it
              from you, NOBODY. On our decentralized social network, no party
              can block, ban or delete your account nor can anyone remove your
              content. Enjoy your digital freedom!
            </p>
          </div>
        </div>
        <div className="">
          <div className="bg-[#fff] dark:bg-gray-900 flex min-h-[330px] max-w-[380px] flex-col items-center gap-y-4 px-4 py-12 rounded-md border-b-[6px] border-indigo-400  shadow-md z-20">
            <div className="grid place-content-center rounded-full p-4 bg-gradient-to-r from-blue-600 via-green-400 to-yellow-500">
              <div>
                <GiCutDiamond className="h-10 w-10" />
              </div>
            </div>
            <p className="text-lg font-bold ">Reward creators with Diamonds</p>
            <p className="max-w-[80%] text-base">
              The money-native characteristic of the blockchain makes it
              possible to provide users more tools to reward the content and the
              creators they like. Diamond (aka social tipping) is the new like
              button. With one click you can send different amounts of $ to show
              your appreciation to the creator, with no middle party taking a
              fee.
            </p>
          </div>
        </div>
        <div className="">
          <div className="bg-[#fff] dark:bg-gray-900 flex min-h-[330px] max-w-[380px] flex-col items-center gap-y-4 px-4 py-12 rounded-md border-b-[6px] border-indigo-400  shadow-md z-20">
            <div className="grid place-content-center rounded-full p-4 bg-gradient-to-r from-yellow-400 via-green-300 to-green-600 ">
              <div>
                <BsFillFilePostFill className="h-10 w-10" />
              </div>
            </div>
            <p className="text-lg font-bold ">Mint your post as NFT</p>
            <p className="max-w-[80%] text-base">
              Your next post can be worth A LOT! Twitter CEO sold his first-ever
              tweet for $2.9 million dollars as NFT. In Desofy, every post can
              be minted as an NFT with a few simple clicks. This is the first
              time in history where NFTs and social media meet in one place. You
              can now display your art, collectables or precious moments on your
              social profile.
            </p>
          </div>
        </div>
        <div className="">
          <div className="bg-[#fff] dark:bg-gray-900 flex min-h-[330px] max-w-[380px] flex-col items-center gap-y-4 px-4 py-12 rounded-md border-b-[6px] border-indigo-400  shadow-md z-20">
            <div className="grid place-content-center rounded-full p-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
              <div>
                <GiToken className="h-10 w-10" />
              </div>
            </div>
            <p className="text-lg font-bold ">
              Build communities with social tokens
            </p>
            <p className="max-w-[80%] text-base">
              As a creator on our dapp social media, you can have your own
              social token that connects you with your fans closer than its
              ever been possible. You decide what value you want to provide to
              your holders. It could be an early access to your music or 1-on-1
              personal chat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
