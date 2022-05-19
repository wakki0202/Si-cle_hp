import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from "../components/Header";

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
          <h1 className=' text-5xl  mt-20 font-bold'>About Us.</h1>
          <span className='text-1xl font-bold'>会社概要</span>
        </div>
        <div className='w-9/12 m-auto'>
          <h1 className=' text-3xl  mt-36 font-bold'>Social Vision.</h1>
          <div className='w-11/12 m-auto mt-20'>
            <h1 className='font-bold text-4xl'>テクノロジーの力で、<br />
              社会に新しい価値と利便性を生み出す。</h1>
            <p className='mt-8 leading-relaxed'>世界では今、金融のデジタル化が加速し、様々なサービスと金融機能がつながることで、これまでにない価値や体験が生まれています。こうした時代の変化の真ん中で、私たちは金融デジタル化の要となるBaaS（Banking-as-a-Service）プラットフォームや、新しい事業の開発を行い、社会のDXを推し進めています。決済・金融領域における豊富な知見を武器に、世の中に新しい価値を生み出していく。インフキュリオンは、生活者と事業者、金融、行政をつなぐ新しいデジタル基盤を構築し、社会全体のDXを実現します。</p>
          </div>
        </div>
        <div className='w-9/12 m-auto'>
          <h1 className=' text-3xl  mt-32 font-bold'>Overview.</h1>
          <div className='mt-20'>

            <div>
              <table className='text-sm w-full lg:w-10/12 m-auto mt-10'>
                <tr className='py-5 text-lg'>
                  <th className='border-b border-t py-4'>会社名</th>
                  <td className='text-center border-b border-t border-red'>Si-cle Inc.（株式会社サイクル）</td>
                </tr>

                <tr className='text-lg'>
                  <th className='border-b border-t py-4'>設立</th>
                  <td className='text-center border-b border-red'>2021/07/01</td>
                </tr>

                <tr className='text-lg'>
                  <th className='border-b py-4'>役員</th>
                  <td className='text-center border-b border-red'>亀田けい</td>
                </tr>

                <tr className='text-lg'>
                  <th className='border-b py-4'>資本金</th>
                  <td className='text-center border-b border-red'>50万円</td>
                </tr>

                <tr className='text-lg'>
                  <th className='border-b py-4'>Mail</th>
                  <td className='text-center border-b border-red'>info@si-cle.co.jp</td>
                </tr>

                <tr className='py-6 text-lg'>
                  <th className='border-b'>TEL</th>
                  <td className='text-center border-b border-red  py-4'>08061039185</td>
                </tr>

                <tr className='text-lg'>
                  <th className='border-b py-4'>住所</th>
                  <td className='text-center border-b border-red'> 〒577-0806 大阪府東大阪市上小阪3-13-9 </td>
                </tr>

              </table>
            </div>

          </div>
        </div>
        <div className='w-9/12 m-auto mb-32'>
          <h1 className=' text-3xl  mt-32  font-bold'>Map.</h1>
          <div className='mt-10'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.0296394273455!2d135.58186431432742!3d34.65395439322988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000df9f1dacaadb%3A0x1fa96d4ef2aeac20!2z44CSNTc3LTA4MDYg5aSn6Ziq5bqc5p2x5aSn6Ziq5biC5LiK5bCP6Ziq77yT5LiB55uu77yR77yT4oiS77yZ!5e0!3m2!1sja!2sjp!4v1652458501394!5m2!1sja!2sjp" className='w-full h-96' ></iframe>
          </div>
          <p className='pt-5'>〒577-0806 大阪府東大阪市上小阪3-13-9</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
