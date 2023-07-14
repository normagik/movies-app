import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";
import testimage from "../public/test.jpeg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movies App</title>
        <meta
          name="description"
          content="Find your favorite movies and tv shows"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="ml-8">
          <h1 className="text-xl font-bold mb-4">Popular Movies</h1>
          <div className=" grid ">
            <div className="grid w-1/4 col-span-1">
              <div className="flex items-center border border-gray-300 shadow-lg p-4 mb-2 rounded-xl cursor-pointer">
                <p className="font-semibold">Sort</p>
                <RiArrowRightSLine className="inline-block mt-1 ml-auto" />
              </div>
              <div className=" flex items-center border border-gray-300 shadow-lg p-4 rounded-xl cursor-pointer">
                <p className="font-semibold">Where To Watch</p>
                <RiArrowRightSLine className="inline-block mt-1 ml-auto" />
              </div>

              <div className="border border-gray-300 shadow-lg my-2 rounded-xl divide-y">
                <div className="flex items-center p-4">
                  <h2 className="font-semibold">Filters</h2>
                  <MdOutlineKeyboardArrowDown className="inline-block ml-auto " />
                </div>
                <div className="p-2 text-sm">
                  <div className="flex items-center px-2 text-[#999999]">
                    <p>Show Me</p>
                    <AiFillQuestionCircle className="inline-block ml-4" />
                  </div>
                  <fieldset className="px-2">
                    <div>
                      <input
                        className="accent-[#03B4E4]"
                        id="everything"
                        type="radio"
                        value=""
                        name="everything"
                        checked
                      />
                      <label className="pl-1" htmlFor="everything">
                        Everything
                      </label>
                    </div>
                    <div>
                      <input
                        className="accent-[#03B4E4]"
                        id="seen"
                        type="radio"
                        value=""
                        name="seen"
                      />
                      <label className="pl-1" htmlFor="seen">
                        Movies I Have Seen
                      </label>
                    </div>
                    <div>
                      <input
                        className="accent-[#03B4E4]"
                        id="not-seen"
                        type="radio"
                        value=""
                        name="not seen"
                      />
                      <label className="pl-1" htmlFor="not-seen">
                        Movies I Haven't Seen
                      </label>
                    </div>
                  </fieldset>
                </div>
                <div className="px-4 py-2 text-sm">
                  <p className="text-[#999999]">Availabilities</p>
                  <div>
                    <input
                      className="
                       accent-[#03B4E4]"
                      id="availabilities"
                      type="checkbox"
                      value=""
                      name="availabilities"
                      checked
                    />
                    <label className="pl-1" htmlFor="availabilities">
                      Everything
                    </label>
                  </div>
                </div>
                <div className="px-4 py-2 text-sm">
                  <p className="text-[#999999]">Release Dates</p>
                  <div>
                    <input
                      className="accent-[#03B4E4]"
                      id="releases"
                      type="checkbox"
                      value=""
                      name="releases"
                      checked
                    />
                    <label className="pl-1" htmlFor="releases">
                      Search All Releases?
                    </label>
                  </div>
                  <p className="text-[#B6B6B6]">from</p>

                  <p className="text-[#B6B6B6]">to</p>
                </div>
                <div className="px-4 py-2 text-sm">
                  <p className="text-[#999999]">Genres</p>
                  <div className="py-2">
                    <button className="py-2 px-4 bg-white text-gray-500 rounded-full border border-gray-400 btn-primary mr-2 ">
                      Action
                    </button>
                    <button className="py-2 px-4 bg-white text-gray-500 rounded-full border border-gray-400 btn-primary ">
                      Adventure
                    </button>
                  </div>
                  <button className="py-2 px-4 bg-white text-gray-500 rounded-full border border-gray-400 btn-primary mr-2 ">
                    Animation
                  </button>
                  <button className="py-2 px-4 bg-white text-gray-500 rounded-full border border-gray-400 btn-primary ">
                    Comedy
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-3/4 col-span-1 ">
            <div className="grid w-1/4 col-span-4">
              <div className="shadow-lg rounded-md w-[200px] h-auto cursor-pointer ">
                <div className="relative  bg-gray-400 opacity-50 w-8 h-8 rounded-full mb-[-40px] ml-40">
                  <div className="absolute text-white text-2xl left-2 bottom-2">
                    ...
                  </div>
                </div>
                <Image
                  className="rounded-md"
                  src={testimage}
                  alt="movie poster"
                  width="200"
                  height="200"
                />
                <div className="relative bg-[#081C22] w-12 h-12 rounded-full mt-[-24px] ml-4">
                  <div className="absolute text-white text-sm left-2.5 top-3">
                    80%
                  </div>
                </div>
                <div className="pl-4">
                  <h3 className="text-sm font-extrabold pt-4 hover:text-[#03B4E4] ">
                    hola
                  </h3>
                  <p className="text-sm pb-2 text-[#626664]">hola</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
