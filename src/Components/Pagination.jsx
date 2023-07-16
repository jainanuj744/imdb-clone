function Pagination({pageNo,handleClickNext,handleClickPrev}) {

  return (
    <div className="p-5 flex justify-center bg-gray-500 items-center h-4">
        <div onClick={handleClickPrev} className="p-5"><i class="fa-sharp fa-solid fa-left-long hover:cursor-pointer"></i></div>
        <div className="p-5 font-bold hover:cursor-pointer">{pageNo}</div>
        <div onClick={handleClickNext} className="p-5"><i class="fa-sharp fa-solid fa-right-long hover:cursor-pointer"></i></div>
    </div>
  );
}

export default Pagination;
