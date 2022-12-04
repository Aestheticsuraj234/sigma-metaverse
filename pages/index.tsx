import React from "react";
import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Information from "../components/Information";
import Feature from "../components/Feature";
import About from "../components/About";
import Disadvantage from "../components/Disadvantage";
import SocialCommunity from "../components/SocialCommunity";

const index = () => {
  return (
    <div>
      <Head>
        <title>sigmas Blog </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <Information />
        <Feature />
        <About />
        <Disadvantage />
        <SocialCommunity />
      </main>
    </div>
  );
};

export default index;
