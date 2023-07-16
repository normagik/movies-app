import React, { useState } from "react";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";

const SideSection = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className=" w-full max-h-full col-span-1 ">
      <div
        className="flex items-center border border-gray-300 shadow-lg p-4 mb-2 rounded-xl cursor-pointer"
        onClick={handleClick}
      >
        <p className="font-semibold">Sort</p>
        <RiArrowRightSLine className="inline-block mt-1 ml-auto" />
      </div>
      {toggle && (
        <ul className="absolute bg-white  rounded-lg border border-gray-300 shadow-lg p-2 mt-[-10px] w-[248px]">
          <Link href="/">
            <li className="hover:text-[#03B4E4] mt-2 cursor-pointer">
              Popular
            </li>
          </Link>
          <Link href="/top-rated">
            <li className="hover:text-[#03B4E4] mt-2 cursor-pointer">
              Top Rated
            </li>
          </Link>
          <Link href="/upcoming">
            <li className="hover:text-[#03B4E4] my-2 cursor-pointer">
              Upcoming
            </li>
          </Link>
        </ul>
      )}
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
          <div className="flex items-center px-2 text-[#999999] mb-2">
            <p>Show Me</p>
            <AiFillQuestionCircle className="inline-block ml-4" />
          </div>
          <fieldset className="px-2">
            <div>
              <input
                className="bg-cyan-400"
                id="everything"
                type="radio"
                value="1"
                name="everything"
                checked
              />
              <label className="pl-1" for="everything">
                Everything
              </label>
            </div>
            <div>
              <input
                className="bg-cyan-400"
                id="seen"
                type="radio"
                value="2"
                name="seen"
              />
              <label className="pl-1" for="seen">
                Movies I Have Seen
              </label>
            </div>
            <div>
              <input
                className="bg-cyan-400"
                id="not-seen"
                type="radio"
                value="3"
                name="not seen"
              />
              <label className="pl-1" for="not-seen">
                Movies I Haven't Seen
              </label>
            </div>
          </fieldset>
        </div>
        <div className="px-4 py-2 text-sm ">
          <p className="text-[#999999] mb-2">Availabilities</p>
          <div>
            <input
              className="
              bg-cyan-400"
              id="availabilities"
              type="checkbox"
              value=""
              name="availabilities"
              checked
            />
            <label className="pl-1" for="availabilities">
              Everything
            </label>
          </div>
        </div>
        <div className="px-4 py-2 text-sm">
          <p className="text-[#999999] mb-2">Release Dates</p>
          <div className="mb-2">
            <input
              className="bg-cyan-400"
              id="releases"
              type="checkbox"
              value=""
              name="releases"
              checked
            />
            <label className="pl-1" for="releases ">
              Search All Releases?
            </label>
          </div>
          <div>
            <div className="mb-2">
              <label className="text-[#B6B6B6] mr-6" for="from">
                from
              </label>
              <input
                className="border border-gray-400 rounded-sm p-1"
                type="date"
                id="from"
                name="from"
              />
            </div>
            <div>
              <label className="text-[#B6B6B6] mr-10" for="to">
                to
              </label>
              <input
                className="border border-gray-400 rounded-sm p-1 "
                type="date"
                id="to"
                name="to"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-2 text-sm">
          <p className="text-[#999999]">Genres</p>
          <div className="py-2">
            <button className="text-sm py-2 px-4 bg-white text-gray-500 rounded-full border border-gray-400 btn-primary mr-2 ">
              Action
            </button>
            <button className="text-sm py-2 px-4 bg-white text-gray-500 rounded-full border border-gray-400 btn-primary ">
              Adventure
            </button>
          </div>
          <button className="text-sm py-2 px-4 bg-white text-gray-500 rounded-full border border-gray-400 btn-primary mr-2 ">
            Animation
          </button>
          <button className="text-sm py-2 px-4 bg-white text-gray-500 rounded-full border border-gray-400 btn-primary ">
            Comedy
          </button>
        </div>
      </div>
    </div>
  );
};
export default SideSection;
