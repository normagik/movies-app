import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { BsLink } from "react-icons/bs";

import axios from "axios";

function currencyFormat(num: any) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export async function getStaticProps(context: any) {
  const { id } = context.params;
  const response =
    await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4f298a53e552283bee957836a529baec
  `);
  const movie = response.data;
  return {
    props: { movie },
  };
}

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

const credits = ({ movie }) => {
  console.log(movie.cast);
  return (
    <div>
      <section>
        <div className="flex w-full h-screen">
          <div className="text-xl font-bold ml-8 mt-10 ">
            <p>Top Billed Cast</p>
            <div className="mt-8">
              <div className="shadow-lg rounded-md w-auto h-auto cursor-pointer py-2 ">
                <Image
                  className="rounded-md"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="movie poster"
                  width={138}
                  height={175}
                />
                <div className="pl-4">
                  <h3 className="text-sm font-extrabold pt-4 pr-2 hover:text-[#03B4E4] ">
                    <p>lorem</p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <div className="flex mt-10 mr-40  divide-x ">
              <div className=" flex ">
                <Link href="">
                  <FaFacebook className="text-2xl mr-2" />
                </Link>
                <Link href="">
                  <BsTwitter className="text-2xl mr-2" />
                </Link>
                <Link href="">
                  <FiInstagram className="text-2xl mr-2 " />
                </Link>
              </div>
              <Link href="">
                <BsLink className="text-4xl pl-2 pb-2" />
              </Link>
            </div>
            <div>
              <p className="font-bold">Status</p>
              <p>{movie.status}</p>
              <p className="font-bold">Original Language</p>
              <p>{movie.original_language}</p>
              <p className="font-bold">Budget</p>
              <p>{currencyFormat(movie.budget)}</p>
              <p className="font-bold">Revenue</p>
              <p>{currencyFormat(movie.revenue)}</p>
            </div>
          </div>
        </div>
        <div>
          <p></p>
        </div>
      </section>
    </div>
  );
};
export default credits;
