import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import testimage from "../public/test.jpeg";
import { BiSolidHeartCircle } from "react-icons/bi";
import { RiFileMarkFill } from "react-icons/ri";
import { MdStars } from "react-icons/md";

const movie = () => {
  return (
    <div>
      <nav className=" flex items-center justify-center pb-4 sticky">
        <ul className="flex">
          <div className="flex items-center mr-6">
            <li className="hover:underline">Overview</li>
            <IoMdArrowDropdown className="inline-block ml-1" />
          </div>
          <div className="flex items-center mr-6">
            <li>Media</li>
            <IoMdArrowDropdown className="inline-block ml-1" />
          </div>
          <div className="flex items-center mr-6">
            <li>Fandom</li>
            <IoMdArrowDropdown className="inline-block ml-1" />
          </div>
          <div className="flex items-center mr-6">
            <li>Share</li>
            <IoMdArrowDropdown className="inline-block ml-1" />
          </div>
        </ul>
      </nav>
      <section>
        <div className="grid grid-cols-2 bg-[#907D57] px-8 py-8 h-screen">
          <div className="cols-span-1 w-2/4">
            <Image className="rounded-md" src={testimage} alt="movie poster" />
          </div>
          <div className="cols-span-1 w-full">
            <div className="ml-[-250px]">
              <h1 className="text-5xl text-white font-bold mt-16 ">
                The Grand Budapest Hotel<span>(2013)</span>
              </h1>

              <div className="flex items-center">
                <div className="relative bg-[#081C22] w-12 h-12 rounded-full cursor-pointer ">
                  <div className="absolute text-white text-sm left-2.5 top-3">
                    80%
                  </div>
                </div>
                <BiSolidHeartCircle className="text-4xl cursor-pointer" />
                <RiFileMarkFill className="text-4xl cursor-pointer rounded-full" />
                <MdStars className="text-4xl cursor-pointer" />
              </div>
              <h2 className="text-md text-white font-bold">Overview</h2>
              <p className="text-white text-sm">
                The Grand Budapest Hotel tells of a legendary concierge at a
                famous European hotel between the wars and his friendship with a
                young employee who becomes his trusted protégé. The story
                involves the theft and recovery of a priceless Renaissance
                painting, the battle for an enormous family fortune and the slow
                and then sudden upheavals that transformed Europe during the
                first half of the 20th century.
              </p>
              <h3 className="text-white text">Wes Anderson</h3>
              <h3>Hugo Guinnes</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default movie;
