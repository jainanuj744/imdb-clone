import MovieCard from "./MovieCard";

function Movies() {
  return (
    <div>
      <div className="text-center font-bold text-2xl p-4">Trending Movies</div>
      <div className="flex gap-5 flex-wrap justify-center">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default Movies;
