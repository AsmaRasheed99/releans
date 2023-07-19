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

  const itemsPerPage = 6;

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
    <section id="album" className=" dark:bg-gray-900 m-24">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
             Albums
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
          </p>
        </div>
      </section>
    <div className="grid lg:grid-cols-3 gap-10 lg:px-28 md:px-10 sm:px-0 place-items-center my-5 sm:grid-cols-2 md:grid-cols-2 ">
      {slicedArrayAlbums?.map((album) => {
        return <Card key={album.id } album={album} />;
      })}
    </div>
     <div className="flex w-full justify-center mt-16 mb-8">
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
