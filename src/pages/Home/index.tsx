import React from "react";
import { States, useFetch } from "../../hooks/useFetch";
import movieApi from "../../movieApi";
import MovieCard from "../../components/MovieCard";
import { GridContainer } from "./styles";

function Home() {
  const [data, state] = useFetch(() => movieApi.discover.popularMovies(), {});

  if ([States.IDLE, States.LOADING].includes(state)) {
    return <p>Loading</p>;
  }

  return (
    <GridContainer>
      {data.results?.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          imagePath={movie.poster_path}
          releaseDate={movie.release_date}
        />
      ))}
    </GridContainer>
  );
}

export default Home;
