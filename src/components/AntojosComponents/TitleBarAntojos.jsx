import React from "react";

const TitleBarAntojos = ({ title }) => {
  return (
    <div className="title-finde flex items-center justify-center md:justify-between flex-row rounded-lg bg-blue-300 w-[90%] px-4 py-2">
      <h2 className="flex flex-grow-1 font-bold">{title}</h2>

      <div className="hidden md:flex flex-row items-center bg-orange-700">
        <button className="flex group items-center transition-colors duration-300 hover:bg-slate-300 border-stone-600 border justify-center px-4 py-4 rounded-full bg-yellow-400 mx-1">
          {/*<h2 className="font-bold mb-[2px] text-2xl">{"<"}</h2>*/}
          <svg
            className="w-5 h-5 fill-black group-hover:fill-red-600"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
          >
            <path
              id="XMLID_92_"
              d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
                C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"
            />
          </svg>
        </button>

        <button className="flex group hover:bg-slate-300 items-center transition-colors duration-300 border-stone-600 border justify-center py-4 px-4  rounded-full bg-yellow-400">
          {/*<h2 className="font-bold mb-[2px] text-2xl">{">"}</h2>*/}
          <svg
            version="1.1"
            className="w-5 h-5 fill-black group-hover:fill-red-600"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 320"
          >
            <path
              id="XMLID_103_"
              d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21
              l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001
              c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TitleBarAntojos;
