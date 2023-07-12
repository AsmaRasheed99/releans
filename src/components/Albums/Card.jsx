import React from 'react'

const Card = ({album}) => {
    console.log(album)
  return (
    <>
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{album.title}</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Explore</button>
    </div>
  </div>
</div>

   
   
</>
  )
}

export default Card