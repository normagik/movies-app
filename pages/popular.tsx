import SideSection from "../components/side-section";
import Card from "../components/card";

const popular = ({ movies }) => {
  return (
    <section className="ml-8">
      <h1 className="text-xl font-bold mb-4">Popular Movies</h1>
      <div className=" grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 ">
        <SideSection />
        <div className="lg:col-span-4 md:col-span-2 sm:col-span-1">
          <div className="grid lg:grid-cols-4 lg:grid-rows-5 md:grid-cols-3 sm:grid-cols-1 gap-y-3">
            {movies?.map((movie: any) => (
              <Card movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default popular;
