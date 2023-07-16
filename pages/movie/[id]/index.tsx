import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import Credits from "../../../components/credits";
import { IoListCircleSharp } from "react-icons/io5";
import { BiSolidHeartCircle } from "react-icons/bi";
import { RiFileMarkFill } from "react-icons/ri";
import { MdStars } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";

import axios from "axios";

export async function getStaticProps(context: any) {
  const { id } = context.params;
  const response =
    await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=4f298a53e552283bee957836a529baec
  `);
  const movie = response.data;
  return {
    props: { movie },
  };
}
// https://api.themoviedb.org/3/movie/upcoming?api_key=4f298a53e552283bee957836a529baec
//https://api.themoviedb.org/3/movie/top_rated?api_key=4f298a53e552283bee957836a529baec

export async function getStaticPaths() {
  const response =
    await axios(`https://api.themoviedb.org/3/movie/popular?api_key=4f298a53e552283bee957836a529baec
`);
  const movies = response.data.results;
  const ids = movies.map((movie: any) => movie.id);
  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

const detail = ({ movie }) => {
  console.log(movie);
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
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 bg-[#907D57]  px-8 py-8 lg:h-screen">
          <div className="lg:cols-span-1 w-2/4 h-auto">
            <Image
              className="rounded-md"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="movie poster"
              width={300}
              height={600}
            />
          </div>
          <div className="lg:cols-span-1 lg:w-full pr-12">
            <div className="lg:ml-[-250px] h-auto ">
              <h1 className="text-3xl text-white font-bold mt-4 ">
                {movie.title}
                <span className="font-light ml-2">(2023)</span>
              </h1>
              <div className="flex justify-between text-white text-sm w-2/4 mb-6">
                <p>R</p>
                <p>{movie.release_date} (MX)</p>
                <p>lorem ipsum</p>
                <p>1h 40m</p>
              </div>
              <div className="flex items-center">
                <div className="relative bg-[#081C22] w-12 h-12 rounded-full cursor-pointer ">
                  <div className="absolute text-white text-sm left-2.5 top-3 ">
                    {movie.vote_average.toFixed(0) * 10}%
                  </div>
                </div>
                <p className="text-white mx-2">User Score</p>
                <IoListCircleSharp className="text-5xl cursor-pointer mr-4" />
                <BiSolidHeartCircle className="text-5xl cursor-pointer mr-4" />
                <RiFileMarkFill className="text-5xl cursor-pointer w-8 h-8 rounded-full mr-4" />
                <MdStars className="text-5xl cursor-pointer mr-4" />
                <BsFillPlayFill className="text-white text-5xl cursor-pointer" />
                <p className="text-white cursor-pointer">Play Trailer</p>
              </div>
              <p className="text-white text-md font-light italic my-4">
                {movie.tagline}
              </p>
              <h2 className="text-xl text-white font-bold my-2">Overview</h2>
              <p className="text-white text-sm mb-4">{movie.overview}</p>
              <div className="flex ">
                <div>
                  <h3 className="text-white text">Lorem Ipsum</h3>
                  <h3 className="text-white text-sm font-light ">Director</h3>
                </div>
                <div className="ml-40">
                  <h3 className="text-white text">Lorem Ipsum</h3>
                  <h3 className="text-white text-sm font-light ">Character</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Credits movie={movie} key={movie.id} />
    </div>
  );
};
export default detail;
