import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Popular from "./popular";

export async function getStaticProps() {
  const response =
    await axios(`https://api.themoviedb.org/3/movie/popular?api_key=4f298a53e552283bee957836a529baec
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
        <Popular movies={movies.results} />
      </main>
    </div>
  );
}
