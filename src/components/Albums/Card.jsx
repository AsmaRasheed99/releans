import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({album}) => {
    // console.log(album)
 const navigate = useNavigate()

    const handlePhotos = (id) => {
    navigate(`/photos/${id}`)
    }

  return (
    <>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{album.title}</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"
      onClick={()=>{handlePhotos(album.id)}}>Explore</button>
    </div>
  </div>
</div>

   
   
</>
  )
}

export default Card