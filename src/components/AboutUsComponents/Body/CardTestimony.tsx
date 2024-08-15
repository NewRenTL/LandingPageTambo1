import React from 'react'

type dataTestimony = {
    name:string;
    content:string;
    ranking: number;
}

const CardTestimony = (data: dataTestimony) => {
  return (
    <div className='flex flex-col w-full md:w-3/12 p-10 mx-5 my-3 bg-[#F4F4F3]'>
        <div className='headercard flex w-full mb-4'>
            <h2 className='font-bold'>{data.name}</h2>
        </div>
        <div className='bodycard flex w-full mb-3'>
            <p>"{data.content}"</p>
        </div>
        <div className='flex flex-row w-full'>
            {
                Array.from({ length: data.ranking }).map((_, index) => (
                    <span key={index} className='text-yellow-500'>&#9733;</span> // Unicode for star
                ))
            }
        </div>
    </div>  
  )
}

export default CardTestimony