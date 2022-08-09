import type { NextPage } from 'next'
import Link from 'next/link';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="">
      <Header />
      <main>
        <div className="w-10/12 m-auto">
          <h1 className=" text-3xl  mt-20 font-bold">Contact.</h1>
          <span className="text-1xl">お問い合わせ</span>
          <p className="text-center mt-8 mb-8 text-xs">
            下記のフォームをご記入の上、 お問い合わせください。
          </p>
        </div>

        <div className="w-9/12 m-auto">
          <label className="block font-bold pb-3 " htmlFor="">
            お問い合わせの種類*
          </label>
          <select className="w-full bg-gray-100 p-1 h-14 lg:h-16" name="" id="">
            <option disabled>選択してください</option>
            <option value="">新規お取引に関して</option>
            <option value="">採用に関して</option>
            <option value="">サービスに関して</option>
            <option value="">その他</option>
          </select>
        </div>
        <div className="w-9/12 m-auto pt-8">
          <label className="block font-bold pb-3" htmlFor="">
            お名前*
          </label>
          <input
            className="w-full bg-gray-100 p-2 h-14 lg:h-16"
            name=""
            id=""
            placeholder="サイクル太郎"
          ></input>
        </div>
        <div className="w-9/12 m-auto pt-8">
          <label className="block font-bold pb-3" htmlFor="">
            メールアドレス*
          </label>
          <input
            className="w-full bg-gray-100 p-2 h-14 lg:h-16"
            name=""
            id=""
            placeholder="xxx@example.com"
          ></input>
        </div>
        <div className="w-9/12 m-auto pt-8">
          <label className="block font-bold pb-3" htmlFor="">
            お問い合わせ内容*
          </label>
          <textarea
            className="w-full bg-gray-100 h-14 p-2"
            name=""
            id=""
            placeholder="お問い合わせ内容を入力してください"
          ></textarea>
        </div>

        <div className="text-center mt-10 mb-20 border border-gray-300  w-9/12 m-auto py-5">
          <Link href="/contact">
            <a className="font-bold">確認画面へ</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
