import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from '../actions/photos';
import { useEffect } from 'react';

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
<div className="grid grid-cols-2 md:grid-cols-10 gap-4 p-10">
  {selectedAlbumImages?.map((photo)=>{
     return (
        <a href={photo.url} key={photo.id} target='_blank'>
        <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src={photo.thumbnailUrl}
          alt=""
        />
        </div> 
        </a>
     )
  })}
</div>
  )
}

export default Photos

