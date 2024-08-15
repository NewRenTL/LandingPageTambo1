import React from 'react'

interface SecTwoImagesProps {
  image1: string;
  image2: string;
}

const SecTwoImages: React.FC<SecTwoImagesProps> = ({ image1, image2 }) => {
  return (
    <div className="flex flex-col w-full  md:flex-row md:h-[350px] overflow-y-hidden">
      <img
        src={image1}
        alt="First Image"
        className="w-full flex relative md:w-1/2  object-cover"
      />
      <img
        src={image2}
        alt="Second Image"
        className="w-full flex relative md:w-1/2 h-auto object-cover"
      />
    </div>
  );
};

export default SecTwoImages;
