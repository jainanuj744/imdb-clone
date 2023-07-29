function WishList() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[12rem] h-[3rem] bg-blue-400 rounded-2xl flex justify-center items-center text-white">All Genre</div>
      </div>
      <div className="flex justify-center my-[2rem]">
        <input placeholder="Search for movies" type="text" className="w-[15rem] h-[2rem] bg-gray-200 rounded-2xl flex justify-center items-center text-black px-3 outline-none" />
      </div>
      <div className="m-5 shadow-md">
        <table className="border w-full text-center">
          <thead className="bg-gray-100 border-b-2">
            <tr>
              <th>Name</th>
              <th>
                <i className="fa-solid fa-up-long px-1.5"></i>Rating
                <i className="fa-solid fa-down-long px-1.5"></i>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2">
              <td className="flex p-3 items-center">
                <img
                  className="w-[8rem] h-[5rem] mx-2"
                  src="https://static1.colliderimages.com/wordpress/wp-content/uploads/the-avengers-movie-poster-banners-slice-03.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
                ></img>
                <div>abc</div>
              </td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td className="text-red-700">Delete</td>
            </tr>
            <tr className="border-b-2">
              <td className="flex p-3 items-center">
                <img
                  className="w-[8rem] h-[5rem] mx-2"
                  src="https://static1.colliderimages.com/wordpress/wp-content/uploads/the-avengers-movie-poster-banners-slice-03.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
                ></img>
                <div>abc</div>
              </td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td className="text-red-700">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <h1>WishList Component Works!</h1> */}
    </>
  );
}

export default WishList;
