import SideSection from "../components/side-section";
import axios from "axios";
import Card from "../components/card";

export async function getStaticProps() {
  const response =
    await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=4f298a53e552283bee957836a529baec
  `);
  const movies = response.data;
  return {
    props: { movies },
  };
}

const upcoming = ({ movies }) => {
  console.log(movies);
  return (
    <section className="ml-8">
      <h1 className="text-xl font-bold mb-4">Upcoming Movies</h1>
      <div className=" lg:grid lg:grid-cols-4 ">
        <SideSection />
        <div className="col-span-4">
          <div className="grid grid-cols-4 grid-rows-5 gap-y-3">
            {movies.results?.map((movie: any) => (
              <Card movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default upcoming;
