import React from 'react'

const NotFound = () => {
  return (
    <div className="w-full bg-Background">
      <div className="pt-[88px] lg:pt-36 mx-4 max-w-screen-md px-0 md:px-8 md:mx-auto">
        <div className="bg-404 bg-center bg-contain bg-no-repeat h-screen max-h-[700px] w-full"></div>
        <p className="ibm-plex-sans-regular text-center text-base lg:text-20/30 text-[#101010] mt-2">
          Let’s get you back 
          <span>
            <a href="/" className='text-[#001F3D] ibm-plex-sans font-bold mx-1'>
              Home
            </a>
          </span>
        </p>
      </div>
    </div>
  )
}

export default NotFound