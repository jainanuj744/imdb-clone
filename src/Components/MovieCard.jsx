function MovieCard(props) {
    return (
        <div>
            <div className="flex flex-wrap justify-center">
                <div
                    className="m-4 bg-cover bg-center h-[12rem] w-[10rem] flex items-end rounded-2xl hover:scale-110 cursor-pointer duration-300"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.poster_path})`,
                    }}
                >
                    <div className="text-white bg-gray-500/50 w-full text-center rounded-2xl ">
                        {props.name}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
