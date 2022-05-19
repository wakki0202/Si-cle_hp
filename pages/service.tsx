/* This example requires Tailwind CSS v2.0+ */
import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head';
import { Fragment } from 'react'
import Header from "../components/Header";


// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }


const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name='hogehogenyannyan' content='created by かめちゃん' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <main>
        <div className='w-9/12 m-auto'>
          <h1 className=' lg:text-5xl  mt-20 font-bold'>Service.</h1>
          <span className='text-1xl font-bold'>サービス</span>
        </div>

      </main>
    </div>
  );
};

export default Home