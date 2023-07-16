import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import SideSection from "../components/side-section";
import Card from "../components/card";

export async function getStaticProps() {
  const response =
    await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=4f298a53e552283bee957836a529baec
  `);
  const movies = response.data;
  return {
    props: { movies },
  };
}

export default function Home({ movies }) {
  console.log(movies);
  return (
    <div>
      <Head>
        <title>Movies App</title>
        <meta
          name="description"
          content="Find your favorite movies and tv shows"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="ml-8">
          <h1 className="text-xl font-bold mb-4"> Movies</h1>
          <div className=" grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 ">
            <SideSection />
            <div className="lg:col-span-4 md:col-span-2 sm:col-span-1">
              <div className="grid lg:grid-cols-4 lg:grid-rows-5 md:grid-cols-3 sm:grid-cols-1 gap-y-3">
                {movies.results?.map((movie: any) => (
                  <Card movie={movie} key={movie.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
