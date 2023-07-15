import Image from "next/image";
import testimage from "../public/test.jpeg";

const card = ({ movie }) => {
  return (
    <div className="w-full mt-2 ml-8 mb-0 ">
      <div className="shadow-lg rounded-md w-[200px] h-[400px] cursor-pointer ">
        <div className="relative  bg-gray-400 opacity-50 w-8 h-8 rounded-full mb-[-40px] ml-40">
          <div className="absolute text-white text-2xl left-2 bottom-2">
            ...
          </div>
        </div>
        <Image
          className="rounded-md"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="movie poster"
          width={200}
          height={200}
        />
        <div className="relative bg-[#081C22] w-12 h-12 rounded-full mt-[-24px] ml-4">
          <div className="absolute text-white text-sm left-2.5 top-3">80%</div>
        </div>
        <div className="pl-4">
          <h3 className="text-sm font-extrabold pt-4 hover:text-[#03B4E4] ">
            {movie.title}
          </h3>
          <p className="text-sm pb-2 text-[#626664]">{movie.release_date}</p>
        </div>
      </div>
    </div>
  );
};
export default card;
