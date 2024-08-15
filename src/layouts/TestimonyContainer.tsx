import CardTestimony from '@components/AboutUsComponents/Body/CardTestimony';
import React from 'react'

type dataTestimony = {
  name:string;
  content:string;
  ranking: number;
}
interface TestimonyContainerProps {
  testimonios: dataTestimony[];
}

const TestimonyContainer: React.FC<TestimonyContainerProps> = ({ testimonios }) => {
  return (
  
    <div className='flex flex-col items-center justify-center w-full md:flex-row p-10'>
      {testimonios.map((testimony, index) => (
        <CardTestimony 
          key={index} 
          name={testimony.name} 
          content={testimony.content} 
          ranking={testimony.ranking} 
        />
      ))}
    </div>
  );
}

export default TestimonyContainer