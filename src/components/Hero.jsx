import React from 'react'
import { HashLink } from 'react-router-hash-link'
import video from '../components/images/Video.mp4'


const Hero = () => {
  return (

<section className="relative  flex flex-col items-center justify-end text-center text-white h-screen ">
<div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
  <video
    className="min-w-full min-h-full absolute object-cover"
    src={video}
    type="video/mp4"
    autoPlay={true}
    muted={true}
    loop={true}
  />
</div>
<div className="video-content space-y-2 z-10 pb-5 mb-40  ">

<div className='flex items-center mr-3'>

    <HashLink smooth={true} to="#album">
      <button class="hover:bg-[#75d5c7] bg-white text-[#75d5c7] border-2 border-[#75d5c7] hover:border-white hover:text-white font-bold py-4 px-4 rounded mt-5 mx-3">
        Explore Albums
      </button>
    </HashLink>

  
    <HashLink smooth={true} to="#post">
      <button class="hover:bg-[#75d5c7] bg-white text-[#75d5c7] hover:text-white border-2 border-[#75d5c7] hover:border-white font-bold py-4 px-4 rounded mt-5">
        Posts
      </button>
    </HashLink>

  </div>
</div>
</section>
  )
}

export default Hero