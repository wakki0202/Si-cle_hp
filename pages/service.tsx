/* This example requires Tailwind CSS v2.0+ */
import type { NextPage } from 'next'
import Link from 'next/link';
import Image from "next/image";
import Head from 'next/head';
import { Fragment } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";



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
        <div className='w-10/12 m-auto'>
          <h1 className=' lg:text-5xl  mt-20 font-bold'>Service.</h1>
          <span className='text-1xl font-bold'>サービス</span>
        </div>

        <div className='w-10/12 m-auto mt-28'>
          <h1 className="lg:text-4xl font-bold mb-10">金融・決済を起点として<br />
            社会のDXを実現</h1>
          <p className="mb-32">社会のDXを担う企業として「BaaS（Banking as a Service）プラットフォーム事業」
            「コンサルティング事業」「加盟店向けソリューション事業」を展開しています。</p>



        </div>

        <div>
            <div className="h-72 w-full bg-service1 bg-cover bg-center"></div>
          <div className='w-10/12 m-auto mt-32 '>


            <h1 className=" text-5xl font-bold">タイトル１</h1>
            <h3 className="mt-8 text-2xl font-bold">タイトル１の説明</h3>
            <p className="mt-8">詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細</p>

          </div>
        </div>

        <div className="mt-32">
          <div className="h-60 w-full bg-service1 bg-cover bg-center"></div>
          <div className='w-10/12 m-auto mt-32'>

            <h1 className="text-5xl font-bold">タイトル2</h1>
            <h3 className=" mt-8 text-2xl font-bold">タイトル2の説明</h3>
            <p className="mt-8">詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細</p>

          </div>
        </div>

        <div className="mt-32 mb-32">
        <div className="h-60 w-full bg-service1 bg-cover bg-center "></div>
          <div className='w-10/12 m-auto mt-32'>

            <h1 className="text-5xl font-bold">タイトル3</h1>
            <h3 className="mt-8 text-2xl font-bold">タイトル3の説明</h3>
            <p className="mt-8">詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細詳細</p>

          </div>
        </div>



      </main>
      <Footer />
    </div>
  );
};

export default Home
