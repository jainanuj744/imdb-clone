import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import WishList from "./Components/WishList";
import { useState } from "react";

function App() {
  let [watchList, setWatchList] = useState([]);

  let handleAddToWatchList = (movieObj) => {
    // watchList.push(movieId); it will not work since the reference is same
    let list = [...watchList, movieObj];
    localStorage.setItem("IMDB", JSON.stringify(list));
    setWatchList(list);
  };

  let handleRemoveFromWatchList = (movieObj) => {
    // watchList.push(movieId); it will not work since the reference is same
    let filterdList = watchList.filter((movie) => {
      return movie.id !== movieObj.id;
    });
    localStorage.setItem("IMDB", JSON.stringify(filterdList));
    setWatchList(filterdList);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies
                watchList={watchList}
                handleAddToWatchList={handleAddToWatchList}
                setWatchList={setWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            </>
          }
        ></Route>
        <Route
          path="/watchlist"
          element={
            <>
              <WishList watchList={watchList}
                setWatchList={setWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}/>
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
