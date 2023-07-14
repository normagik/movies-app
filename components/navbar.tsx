import { AiOutlineSearch } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";

const movie = () => {
  return (
    <nav className=" flex items-center justify-between py-0 mb-4 bg-[#032541]">
      <ul className="flex items-center text-white">
        <li className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-cyan-500 from-teal-500 ml-8 mr-4">
          <a href="/">TMDB</a>
        </li>
        <li>
          <a className="mr-4" href="">
            Movies
          </a>
        </li>
        <li>
          <a className="mr-4" href="#">
            TV Shows
          </a>
        </li>
        <li>
          <a className="mr-4" href="#">
            People
          </a>
        </li>
        <li>
          <a className="mr-4" href="#">
            More
          </a>
        </li>
      </ul>

      <ul className="flex items-center text-white  ">
        <li>
          <a className="" href="#">
            <FiPlus />
          </a>
        </li>
        <li>
          <a className="mx-4" href="#">
            EN
          </a>
        </li>
        <li>
          <a className="mr-4" href="#">
            Login
          </a>
        </li>
        <li>
          <a className="mr-4" href="#">
            Join TMDB
          </a>
        </li>
        <li>
          <a className="text-[#00B4E4] text-2xl ml-4 mr-10" href="#">
            <AiOutlineSearch />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default movie;
