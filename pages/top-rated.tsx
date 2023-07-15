import SideSection from "../components/side-section";
import axios from "axios";
import Card from "../components/card";

export async function getStaticProps() {
  const response =
    await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=4f298a53e552283bee957836a529baec
  `);
  const top = response.data;
  return {
    props: { top },
  };
}

const top = ({ top }) => {
  console.log(top);
  return (
    <section className="ml-8">
      <h1 className="text-xl font-bold mb-4">Top Rated Movies</h1>
      <div className=" lg:grid lg:grid-cols-4 ">
        <SideSection />
        <div className="col-span-4">
          <div className="grid grid-cols-4 grid-rows-5 gap-y-3">
            {top.results.map((movie: any) => (
              <Card movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default top;
