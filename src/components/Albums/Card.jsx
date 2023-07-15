import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({album}) => {
    // console.log(album)
 const navigate = useNavigate()

    const handlePhotos = (id) => {
    navigate(`/photos/${id}`)
    }
    const backgroundImageUrl = 'https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=600';

  return (
    <>
<div  style={{ backgroundImage: `url(${backgroundImageUrl})` }} className="card w-96 h-52 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{album.title}</h2>
    <div className="flex h-full card-actions justify-end items-end">
      <button className="btn bg-[#75d5c7]"
      onClick={()=>{handlePhotos(album.id)}}>Explore</button>
    </div>
  </div>
</div>

   
   
</>
  )
}

export default Card