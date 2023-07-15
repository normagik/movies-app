import SideSection from "../components/side-section";
import Card from "../components/card";

const popular = ({ movies }) => {
  return (
    <section className="ml-8">
      <h1 className="text-xl font-bold mb-4">Popular Movies</h1>
      <div className=" grid grid-cols-5 ">
        <SideSection />
        <div className="col-span-4">
          <div className="grid grid-cols-4 grid-rows-5 gap-y-3">
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
