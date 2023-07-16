import axios from "axios";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

function Movies() {

  let [movies, setMovies] = useState([]);

  let [pageNo,setPageNo] = useState(1);

    let handleClickPrev = () => {
        if(pageNo>1)
        setPageNo(pageNo-1);
    }

    let handleClickNext = () => {
        setPageNo(pageNo+1);
    }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=23c7a8ad79d43490f5f66984e0bdb17b&page=${pageNo}`)
      .then(function (res) {
        // console.log(pageNo);
        setMovies(res.data.results);
      })
  },[pageNo])

  return (
    <div>
      <div className="text-center font-bold text-2xl p-4">Trending Movies</div>
      <div className="flex flex-wrap justify-center">
        {movies.map((movieObj) => {
          console.log(movieObj);
          return <MovieCard key={movieObj.id} name={movieObj.title} poster_path={movieObj.poster_path} />
        })}
      </div>
      <Pagination pageNo={pageNo} handleClickPrev={handleClickPrev} handleClickNext={handleClickNext}/>
    </div>
  );
}

export default Movies;
