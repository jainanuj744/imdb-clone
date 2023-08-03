import { useEffect, useState } from "react";
import genreids from "../Utility/genre";

function WishList(props) {
  let { watchList, handleRemoveFromWatchList, setWatchList } = props;

  let [genreList, setGenreList] = useState(["All Genres"]);
  let [currGenre, setCurrGenre] = useState(["All Genres"]);
  let [search, setSearch] = useState("");

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasingRating = () => {
    let sorted = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sorted]);
  };

  let sortDecreasingRating = () => {
    let sorted = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sorted]);
  };

  let sortIncreasingPopularity = () => {
    let sorted = watchList.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    });
    setWatchList([...sorted]);
  };

  let sortDecreasingPopularity = () => {
    let sorted = watchList.sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    });
    setWatchList([...sorted]);
  };

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres",...temp]);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center">
        {genreList.map((genre) => {
          return (
            <div
            key={genre}
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "mx-2 w-[12rem] h-[3rem] bg-blue-400 rounded-2xl flex justify-center items-center text-white cursor-pointer"
                  : "mx-2 w-[12rem] h-[3rem] bg-gray-400 rounded-2xl flex justify-center items-center text-white cursor-pointer"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-[2rem]">
        <input
          onChange={handleSearch}
          value={search}
          placeholder="Search for movies"
          type="text"
          className="w-[15rem] h-[2rem] bg-gray-200 rounded-2xl flex justify-center items-center text-black px-3 outline-none"
        />
      </div>
      <div className="m-5 shadow-md">
        <table className="border w-full text-center">
          <thead className="bg-gray-100 border-b-2">
            <tr>
              <th>Name</th>
              <th>
                <i
                  onClick={sortIncreasingRating}
                  className="fa-solid fa-up-long px-1.5"
                ></i>
                Rating
                <i
                  onClick={sortDecreasingRating}
                  className="fa-solid fa-down-long px-1.5"
                ></i>
              </th>
              <th>
                <i
                  onClick={sortIncreasingPopularity}
                  className="fa-solid fa-up-long px-1.5"
                ></i>
                Popularity
                <i
                  onClick={sortDecreasingPopularity}
                  className="fa-solid fa-down-long px-1.5"
                ></i>
              </th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter((obj) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return genreids[obj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex p-3 items-center">
                      <img
                        className="w-[10rem] h-[7rem] mx-2"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      ></img>
                      <div>{movieObj.original_title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemoveFromWatchList(movieObj)}
                      className="text-red-700"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {/* <h1>WishList Component Works!</h1> */}
    </>
  );
}

export default WishList;
