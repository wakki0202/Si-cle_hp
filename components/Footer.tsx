/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import Link from 'next/link';
import { Fragment } from 'react'


const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Si-cle Inc.
        </span>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link href={"/"}>
              <a className="mr-4 hover:underline md:mr-6">Top</a>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <a className="mr-4 hover:underline md:mr-6">About</a>
            </Link>
          </li>
          <li>
            <Link href={"/service"}>
              <a className="mr-4 hover:underline md:mr-6">Service</a>
            </Link>
          </li>
          <li>
            <Link href={"/news"}>
              <a className="hidden mr-4 hover:underline md:mr-6">News</a>
            </Link>
          </li>
          <li>
            <Link href={"/mail"}>
              <a className="hover:underline">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="" className="hover:underline">
          Si-cle Inc
        </a>
        . All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
