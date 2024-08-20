import React from "react";
import inst_icon from '@assets/img/insta-iconNewSize.png'

const Contactos = () => {
  const handleFacebookClick = () => {
    window.location.href = "https://www.facebook.com/PractitiendasTambo"; // Reemplaza con la URL de tu página de Facebook
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/tu_numero_telefonico"; // Reemplaza con la URL de tu cuenta de WhatsApp
  };

  const handleTikTokClick = () => {
    window.location.href = "https://www.tiktok.com/@tiendas_tambo"; // Reemplaza con la URL de tu cuenta de TikTok
  };

  const handleInstagramClick = () => {
    window.location.href = "https://www.instagram.com/practitiendatambo"; // Reemplaza con la URL de tu cuenta de Instagram
  };

  return (
    <div className="flex flex-col w-full md:w-[30%] justify-center items-center px-2 py-2 my-2 bg-transparent">
      <div className="flex justify-center items-center py-1 px-2 bg-transparent">
        <h2 className="text-center font-futuraFont text-xl md:text-md text-[#8A3C82]">contacto@tambo.pe</h2>
      </div>

      <div className="flex justify-center items-center py-1 px-2 my-2 mx-1 bg-transparent">
        <div onClick={handleFacebookClick} className="facebook-icon flex px-1 py-1 hover:scale-110 hover:cursor-pointer transition duration-200">
          <svg
            className="flex w-10 h-10"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 291.319 291.319"
          >
            <g>
              <path
                className="fill-blue-600"
                d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66c0,80.45-65.21,145.659-145.66,145.659
		        S0,226.109,0,145.66C0,65.219,65.21,0,145.659,0z"
              />
              <path
                className="fill-white"
                d="M163.394,100.277h18.772v-27.73h-22.067v0.1c-26.738,0.947-32.218,15.977-32.701,31.763h-0.055
		        v13.847h-18.207v27.156h18.207v72.793h27.439v-72.793h22.477l4.342-27.156h-26.81v-8.366
		        C154.791,104.556,158.341,100.277,163.394,100.277z"
              />
            </g>
          </svg>
        </div>
        <div className="whatapp-icon flex px-1 py-1  hover:scale-110 hover:cursor-pointer transition duration-200">
          <svg
            className="flex w-10 h-10"
            viewBox="-4.16 -4.16 40.32 40.32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            strokeWidth="0.00032"
          >
            <g
              id="SVGRepo_bgCarrier"
              strokeWidth="0"
              transform="translate(0,0), scale(1)"
            >
              <rect
                x="-4.16"
                y="-4.16"
                width="40.32"
                height="40.32"
                rx="20.16"
                fill="#5BD066"
              />
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.32"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z"
                fill="#BFC8D0"
              />
              <path
                d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
                fill="url(#paint0_linear_87_7264)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z"
                fill="white"
              />
              <path
                d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_87_7264"
                  x1="26.5"
                  y1="7"
                  x2="4"
                  y2="28"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5BD066" />
                  <stop offset="1" stopColor="#27B43E" />
                </linearGradient>
              </defs>
            </g>
          </svg>
        </div>
        <div onClick={handleTikTokClick} className="tiktok-icon flex px-1 py-1  hover:scale-110 hover:cursor-pointer transition duration-200">
          <svg
            fill="#FFFFFF"
            className="flex w-10 h-10"
            viewBox="-1.54 -1.54 17.08 17.08"
            role="img"
            focusable="false"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#FFFFFF"
            strokeWidth="0.00014"
          >
            <g
              id="SVGRepo_bgCarrier"
              strokeWidth="0"
              transform="translate(0,0), scale(1)"
            >
              <rect
                x="-1.54"
                y="-1.54"
                width="17.08"
                height="17.08"
                rx="8.54"
                fill="#000000"
              />
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.16799999999999998"
            />
            <g id="SVGRepo_iconCarrier">
              <path d="m 4.9520184,12.936803 c -1.12784,-0.2039 -2.19411,-0.9875 -2.66789,-1.9606 -0.32895,-0.6757 -0.45541,-1.3901003 -0.37418,-2.1137003 0.15054,-1.3412 0.84482,-2.4395 1.92406,-3.0439 0.56899,-0.3186 1.38421,-0.4769 1.991,-0.3867 l 0.35091,0.052 9e-5,1.0725 9e-5,1.0725 -0.332,-0.014 c -0.79998,-0.033 -1.39595,0.3096 -1.70379,0.9784 -0.1473,0.32 -0.18461,0.8887 -0.081,1.2351 0.12773,0.4273003 0.50542,0.8132003 0.96145,0.9825003 0.15535,0.058 0.32344,0.08 0.61152,0.079 0.35862,-4e-4 0.42448,-0.013 0.67663,-0.1323 0.36505,-0.1726 0.63141,-0.4231 0.78797,-0.7411 0.10147,-0.2061003 0.13414,-0.3430003 0.16587,-0.6951003 0.0217,-0.2412 0.0401,-2.2122 0.0409,-4.38 l 10e-4,-3.94149998 0.68371,0 c 0.37605,0 0.8277,0.012 1.00368,0.027 l 0.31995,0.027 0,0.1584 c 0,0.3813 0.22299,1.1127 0.45156,1.4812 0.0571,0.092 0.2564996,0.3178 0.4431796,0.5018 0.36068,0.3555 0.66494,0.5352 1.13352,0.6692 0.138,0.04 0.28359,0.089 0.32353,0.109 0.0399,0.02 0.11522,0.038 0.16728,0.038 0.0521,4e-4 0.13701,0.012 0.18876,0.026 l 0.0941,0.025 0,0.9948 0,0.9948 -0.17773,-0.019 c -0.9611,-0.1037 -1.72925,-0.3601 -2.3423096,-0.782 -0.30468,-0.2096 -0.33102,-0.222 -0.30218,-0.1422 0.0104,0.029 0.003,1.1249 -0.0164,2.436 -0.0336,2.2728 -0.0396,2.3992 -0.12781,2.7173003 -0.33904,1.2222 -1.09994,2.1297 -2.10183,2.5068 -0.6126,0.2306 -1.39679,0.2932 -2.09405,0.1671 z" />
            </g>
          </svg>    
        </div>
        <div onClick={handleInstagramClick} className="instagram-icon flex px-1 py-1 hover:scale-110 hover:cursor-pointer transition duration-200">
          <img src={inst_icon} className="flex w-12 h-12"></img>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
