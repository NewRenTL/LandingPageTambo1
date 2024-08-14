import React from 'react'
import TopImageSec1 from "@assets/img/TopImageSec1.jpg"

const SecImage = () => {
  return (
    <div className="flex flex-col w-full overflow-y-hidden lg:h-[600px]">
        <img src={TopImageSec1} className="object-center flex relative lg:top-[-200px]"></img>
      </div>
  )
}

export default SecImage