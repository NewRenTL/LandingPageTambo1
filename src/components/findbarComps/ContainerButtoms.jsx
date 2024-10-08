import React from "react";
import IconButtom from "./IconButtom";
import IconUserButtom from "./IconUserButtom";
const ContainerButtoms = () => {
  return (
    <div className="w-4/5 sm:w-1/5 justify-center flex sm:justify-end">
      <IconButtom
        viewBox="0 0 278 278"
        enaBack="new 0 0 278 278"
        dpath="M205.333,65H179.5V28.167C179.5,12.636,167.198,0,151.667,0H127c-15.531,0-28.5,12.636-28.5,28.167V65H73.333
          c-4.142,0-7.833,3.358-7.833,7.5v198c0,4.142,3.691,7.5,7.833,7.5h132c4.142,0,7.167-3.358,7.167-7.5v-198
          C212.5,68.358,209.475,65,205.333,65z M113.5,28.167C113.5,20.906,119.739,15,127,15h24.667c7.26,0,12.833,5.906,12.833,13.167V65
          h-51V28.167z"
        seeCounter={false}
        seePop={true}
        seeWishes={false}
      />
      <IconButtom
        viewBox={"0 0 122.88 107.41"}
        enaBack={"new 0 0 122.88 107.41"}
        dpath={
          "M60.83,17.19C68.84,8.84,74.45,1.62,86.79,0.21c23.17-2.66,44.48,21.06,32.78,44.41 c-3.33,6.65-10.11,14.56-17.61,22.32c-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.56C29.16,76.9,0.95,55.93,0.02,29.95 C-0.63,11.75,13.73,0.09,30.25,0.3C45.01,0.5,51.22,7.84,60.83,17.19L60.83,17.19L60.83,17.19z"
        }
        seeCounter={false}
        seePop={false}
        seeWishes={true}
      />
      <IconUserButtom seePop={true} />
    </div>
  );
};

export default ContainerButtoms;
