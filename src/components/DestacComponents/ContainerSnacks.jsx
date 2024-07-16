import React from 'react'
import SnackConfe from "@components/DestacComponents/SnackConfe"
const ContainerSnacks = () => {
  return (
    <div className= "w-full flex flex-col md:flex-row">
        <SnackConfe name="Snacks" bgcolor='bg-[#B32C8A]' textColor='text-[#F7EA22]'/>
        <SnackConfe name="Deck" bgcolor='bg-[#F7EA22]' textColor='text-[#B32C8A]' ></SnackConfe>
    </div>
  )
}

export default ContainerSnacks