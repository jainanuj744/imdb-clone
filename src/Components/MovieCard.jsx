function MovieCard(props) {

  let {watchList, poster_path, movieObj, handleRemoveFromWatchList, handleAddToWatchList, name} = props;

  function isContain(movieObj){
    for(let i=0;i<watchList.length;i++){
      if(watchList[i].id == movieObj.id){
        return true;
      }
    }
    return false;

  }
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <div
          className="m-4 bg-cover bg-center h-[18rem] w-[14rem] 
                    flex items-end rounded-2xl hover:scale-110 cursor-pointer duration-300
                    flex-col justify-between"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
          }}
        >
          {isContain(movieObj) ? (
            <div
              className="m-3 h-10 w-10 bg-gray-900/60 flex items-center justify-center rounded-2xl"
              onClick={() => handleRemoveFromWatchList(movieObj)}
            >
              &#10060;
            </div>
          ) : (
            <div
              className="m-3 h-10 w-10 bg-gray-900/60 flex items-center justify-center rounded-2xl"
              onClick={() => handleAddToWatchList(movieObj)}
            >
              &#128525;
            </div>
          )}

          <div className="text-white bg-gray-500/50 w-full text-center rounded-2xl ">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
