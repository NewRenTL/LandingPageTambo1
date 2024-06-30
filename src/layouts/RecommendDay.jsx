import React from 'react'
import TitleBarRecommendDay from '@components/RecommendComponents/TitleBarRecommendDay.jsx';
import ContainerRecomm from '@components/RecommendComponents/ContainerRecomm';

const RecommendDay = () => {
  return (
    <div className='flex flex-col my-3 justify-center items-center w-full'>
        <TitleBarRecommendDay/>
        <ContainerRecomm/>
    </div>
  )
}

export default RecommendDay;