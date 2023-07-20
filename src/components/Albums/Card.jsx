import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const AlbumCard = ({album}) => {
    // console.log(album)
 const navigate = useNavigate()

    const handlePhotos = (id) => {
    navigate(`/photos/${id}`)
    }

  return (
<>
<div className="sm:w-56 md:w-72 lg:w-96 h-96 cursor-pointer"
onClick={()=>{handlePhotos(album.id)}}

>
      <CardHeader floated={false} className="h-64 ">
        <img className='hover:scale-105 h-full w-full' src="https://images.pexels.com/photos/6177640/pexels-photo-6177640.jpeg?auto=compress&cs=tinysrgb&w=600" alt="album-picture" />
      </CardHeader>
      <CardBody className="text-center h-32">
        <Typography variant="h4" color="blue-gray" className="mb-2 lg:w-80 md:w-60">
        {album.title}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </div>







</>
  )
}

export default AlbumCard