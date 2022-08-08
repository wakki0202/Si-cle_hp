import type { NextPage } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { client } from "../libs/client";
import { Information } from "../src/types/information";


type Props = {
  information: Array<Information>
}

export default function Home({ information }: Props) {
  return (
    <>
      <Header />
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        記事一覧
      </h1>
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {information.map((information) => (
          <div
            className="rounded overflow-hidden shadow-lg"
            key={information.id}
          >
            <div className="px-6 py-4 bg-slate-100">{information.title}</div>
            <div className="px-6 pt-4 pb-2">
              <img
                className="w-full h-[350px]"
                src={information.eye_catch.url}
                alt="Sunset in the mountains"
              />
              <div className=" pb-4">{information.body}</div>
              {information.tag && (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{information.tag}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

 export const getServerSideProps = async () => {
   const data = await client.get({ endpoint: "information" });

   return {
     props: {
       information: data.contents,
     },
   };
 };
