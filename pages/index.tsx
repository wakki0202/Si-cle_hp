/* This example requires Tailwind CSS v2.0+ */
import { NextPage } from "next"
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";


const Home: React.FC = () => {
  return (
    <div className='bg-first-view '>
      <Header />
      <div className="h-screen">

      </div>
      <Footer />
    </div>
  );
}

export default Home
