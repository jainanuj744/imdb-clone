import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import WishList from "./Components/WishList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
            <>
              <Banner />
              <Movies />
            </>
          }
        ></Route>
        <Route path="/watchlist" element={
            <>
              <WishList />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
