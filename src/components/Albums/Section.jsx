import React from "react";
import Card from "./Card";
import { fetchAlbums } from "../../actions/albums";
import { useDispatch, useSelector } from "react-redux";
import { useEffect , useState} from "react";
import Pagination from "@mui/material/Pagination";

const Section = () => {
  const {
    loading: albumsLoading,
    data: albumsData,
    error: albumsError,
  } = useSelector((state) => state.Albums);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);




  const [currentPageAlbums, setCurrentPageAlbums] = useState(1);
  let totalItemsAlbums;

  let totalPagesAlbums;

  let slicedArrayAlbums;

  const itemsPerPage = 9;

  totalItemsAlbums = albumsData?.length;

  totalPagesAlbums = Math.ceil(totalItemsAlbums / itemsPerPage);

  const startIndexAlbums = (currentPageAlbums - 1) * itemsPerPage;

  const endIndexAlbums = startIndexAlbums + itemsPerPage;

  slicedArrayAlbums = albumsData?.slice(startIndexAlbums, endIndexAlbums);

  const handlePageChangeAlbums = (event, pageNumber) => {
    setCurrentPageAlbums(pageNumber);
  };
  return (
    <>
    <div className="grid lg:grid-cols-3 gap-10 px-5 place-items-center my-5 sm:grid-cols-1 md:grid-cols-2 ">
      {slicedArrayAlbums?.map((album) => {
        return <Card key={album.id } album={album} />;
      })}
    </div>
     <div className="flex w-full justify-center mt-5">
     {
       <Pagination
         count={totalPagesAlbums}
         page={currentPageAlbums}
         onChange={handlePageChangeAlbums}
       />
     }
   </div>
   </>
  );
};

export default Section;
