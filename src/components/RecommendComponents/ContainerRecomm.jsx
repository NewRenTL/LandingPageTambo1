import React from "react";
import LayX from "@assets/img/LAYX.png";
import CardItemRecomm from "@components/RecommendComponents/CardItemRecomm.jsx";

const ContainerRecomm = () => {
  return (
    <div className="recommendation-container flex flex-col md:flex-row rounded-lg w-[90%] my-2 px-5 py-5 bg-[#9E318A]">
      <div className="flex items-center px-1 py-2 justify-center bg-transparent rounded-lg md:w-[20%]">
        <svg
          className="flex w-10 h-10"
          fill="#ffff00"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          width="800px"
          height="800px"
          viewBox="0 0 349.078 349.078"
        >
          <g>
            <path
              d="M198.779,322.441v-58.245c0-7.903,6.406-14.304,14.304-14.304c28.183,0,43.515-28.904,45.643-85.961h-45.643
		c-7.897,0-14.304-6.41-14.304-14.304V26.64c0-7.9,6.406-14.301,14.304-14.301h121.69c7.896,0,14.305,6.408,14.305,14.301v122.988
		c0,27.349-2.761,52.446-8.181,74.611c-5.568,22.722-14.115,42.587-25.398,59.049c-11.604,16.917-26.132,30.192-43.155,39.437
		c-17.152,9.304-37.09,14.026-59.267,14.026C205.186,336.745,198.779,330.338,198.779,322.441z M14.301,249.887
		C6.404,249.887,0,256.293,0,264.185v58.257c0,7.896,6.404,14.298,14.301,14.298c22.166,0,42.114-4.723,59.255-14.026
		c17.032-9.244,31.558-22.508,43.161-39.437c11.29-16.462,19.836-36.328,25.404-59.061c5.423-22.165,8.178-47.263,8.178-74.6V26.628
		c0-7.9-6.41-14.301-14.304-14.301H14.301C6.404,12.327,0,18.734,0,26.628v122.988c0,7.899,6.404,14.304,14.301,14.304h45.002
		C57.201,220.982,42.09,249.887,14.301,249.887z"
            />
          </g>
        </svg>
      </div>
      <div className="flex items-center justify-center md:w-[60%] px-5 py-2 mb-2 mt-4 my-1 bg-transparent rounded-lg">
        <p className="flex text-center md:text-start font-semibold text-wrap text-white">
          El otro dia probé el café de Tambo y la verdad es que me sorprendio.
          Desde que lo abri, el cromo era increible , como si te envolviera en
          un abrazo de chocolate y caramelo
        </p>
      </div>
      
      <div className="flex md:w-[20%]">
        <CardItemRecomm
          price={(27.8).toFixed(2)}
          name="Combo 02 Pizzas Hawaiana Tambo"
          img={LayX}
        />
      </div>
      
    </div>
  );
};

export default ContainerRecomm;
