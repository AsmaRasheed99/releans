import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from '../actions/photos';
import { useEffect } from 'react';
import { Card } from '@material-tailwind/react';


const Photos = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    // console.log(id)
    const { loading: photosLoading, data: photosData, error: photosError } = useSelector((state) => state.Photos);
    const [selectedAlbumImages, setSelectedAlbumImages] = useState([]);
    
    useEffect(()=> {
        dispatch(fetchPhotos())
      },[dispatch]);
    //   console.log(photosData)

    useEffect(()=>{
      const Images = photosData?.filter((photo) =>{

       return photo.albumId == id;
       
      })
      setSelectedAlbumImages(Images);
    },[photosData])

    // console.log(selectedAlbumImages)
  return (
<div  className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4  gap-4 place-items-center py-10 bg-base-200">
  {selectedAlbumImages?.map((photo)=>{
     return (
        <a data-aos="flip-up" data-aos-duration="1000" href={photo.url} key={photo.id} target='_blank' >
          <Card>
        <div className='flex flex-row p-3 hover:scale-105 h-52 lg:w-80'>
        <img
          className="h-auto max-w-full rounded-lg"
          src={photo.thumbnailUrl}
          alt=""
        />
        <div className='p-4 h-5'>{photo.title}</div>
        </div> 
        </Card>
        </a>
     )
  })}
</div>
  )
}

export default Photos

