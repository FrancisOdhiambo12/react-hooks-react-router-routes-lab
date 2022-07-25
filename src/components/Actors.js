import React from "react";
import { actors } from "../data";

function Actors() {
  const actor = actors.map((actor) => {
    const actedMovies = actor.movies;

    return (
      <div key={actor.name}>
        <h2>{actor.name}</h2>
        <ul>
          {actedMovies.map((movie, index) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Actors Page</h1>
      {actor}
    </div>
  );
}

export default Actors;

