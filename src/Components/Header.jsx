import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex m-3">
      <img
        className="m-4"
        src="https://icon-library.com/images/movies-icon-png/movies-icon-png-8.jpg"
        class="h-[5rem] w-[5rem]"
      />
      <Link to={'/'} className="m-4 my-6 text-3xl text-sky-600 font-bold hover:cursor-pointer">Movies</Link>
      <Link to={'/watchlist'} className="m-4 my-6 text-3xl text-sky-600 font-bold hover:cursor-pointer">Watchlist</Link>
    </div>
  );
}

export default Header;
