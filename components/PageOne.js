import React from "react";
import Button from "./Button";
import Image from "next/image";

const PageOne = () => {
  const imageSource = "/luis_i.png"; // Your dynamic image source

  return (
    <div className="w-full bg-[#d9d9d9] flex flex-col">
        <div className="flex justify-end p-4">
          <Button onClick={() => { }}>Contact</Button>
        </div>
      <div className="flex flex-col h-screen justify-center items-center ">
   

        {/* Main Content */}
        <div className="flex flex-col justify-center items-center ">
          {/* Main Text with Dynamic Image */}
          <div className="flex items-center justify-center font-anton font-bold text-[#2b2b2b]">
            <div className="flex flex-grow justify-center items-center">
              {/* "LU" */}
              <div className="flex items-center">
                <p className="m-0 text-[60vw] md:text-[30vw] leading-none ">LU</p>
              </div>

              {/* Dynamic Image */}
              <div className="relative flex items-center justify-center leading-none w-[20vw] h-[50vw] md:w-[10vw] md:h-[25vw] pr-2 pl-2">
                <Image
                  src={imageSource}
                  alt="Dynamic Letter I"
                  layout="fill"
                  className="object-cover"
                />
              </div>

              {/* "S" */}
              <div className="flex items-center">
                <p className="m-0 text-[60vw] md:text-[30vw] leading-none">S</p>
              </div>
            </div>
          </div>

          {/* Responsive Text Below */}
          <div className="flex justify-center">
            <p
              className="font-rubikGlitch text-black m-0 p-0 text-6xl lg:text-9xl"
              style={{
                textShadow:
                  "0 0 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 0, 0, 0.4)",
              }}
            >
              SHRESTHA
            </p>
          </div>

          {/* Sleight of Hand Artist Text */}
          <div className="pb-12 flex justify-center items-center">
            <p
              className="font-rubikVinyl text-[#004aad] m-0 p-0 text-2xl md:text-4xl pb-8"
              style={{
                textShadow:
                  "0 0 10px rgba(0 ,74, 173, 0.8), 0 0 20px rgba(0 ,74 ,173, 0.6), 0 0 30px rgba(0 ,74 ,173, 0.4)",
                lineHeight: "1",
              }}
            >
              SLEIGHT OF HAND ARTIST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
