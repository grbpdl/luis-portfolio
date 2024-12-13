import React from 'react'
import Button from './Button'
import Image from 'next/image'

const PageOne = () => {
  return (
    <div className="w-full bg-[#d9d9d9]">
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-end p-4">
        <Button onClick={() => {}}>Contact</Button>
      </div>
      <div className="flex flex-col flex-grow">
        <div
          className={`flex flex-grow font-anton  items-center justify-center text-[30vw] leading-none font-bold text-[#2b2b2b]`}
        >
          <p className="h-full flex items-center justify-center m-0 p-0 leading-none">
            LU{" "}
            <span className="relative inline-block">
              <Image
                src="/luis_i.png"
                alt="photo"
                className="inline-block"
                height={200} // Optional: Set the height (this is overridden by 'h-full')
                width={200} // Optional: Set the width
                layout="intrinsic" // Keeps the aspect ratio of the image
              />
            </span>{" "}
            S
          </p>
        </div>

        <div className="flex justify-center">
          <p
            className={`font-rubikGlitch text-[10vw] text-black m-0 p-0`}
            style={{
              textShadow:
                "0 0 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 0, 0, 0.4)",
              lineHeight: "1", // Ensures no extra space between lines
            }}
          >
            SHRESTHA
          </p>
        </div>
        <div className="mb-8 flex justify-center">
          <p
            style={{
              textShadow:
                "0 0 10px rgba(0 ,74, 173, 0.8), 0 0 20px rgba(0 ,74 ,173, 0.6), 0 0 30px rgba(0 ,74 ,173, 0.4)",
              lineHeight: "1", // Ensures no extra space between lines
            }}
            className={` font-rubikVinyl text-[5vw] text-[#004aad] m-0 p-0`}
          >
            SLEIGHT OF HAND ARTIST
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PageOne