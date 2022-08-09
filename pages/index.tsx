/* This example requires Tailwind CSS v2.0+ */
import { NextPage } from "next"
import React from "react";
import Headertop from "../components/Headertop";
import Footer from "../components/Footer";
import Image from "next/image";
import Head from "next/head";


const Home: React.FC = () => {
  return (
    <div className="bg-first-view ">
      <Head>
        <title>Si-cle</title>
        <meta name="hogehogenyannyan" content="created by かめちゃん" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headertop />
      <div className="h-screen"></div>
      <Footer />
    </div>
  );
}

export default Home
