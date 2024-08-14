import React from 'react'
import tambo from "@assets/img/tambo.png"

const IconStore = () => {
  return (
    <div className='hidden p-3 mx-1 sm:w-1/5 sm:flex justify-center items-center'>
        <img className='w-6/6 md:w-3/6 lg:2/6 xl:w-2/6 transition-all duration-250' src={tambo}>
        </img>
    </div>
  )
}

export default IconStore