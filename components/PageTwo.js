import Image from "next/image";
import React, { useState } from "react";

const PageTwo = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="w-full bg-[#2b2b2b] min-h-screen flex flex-col items-center relative">
      {/* Paragraph Section */}
      <div className="px-6 py-8 text-center">
        <p
          className="text-white mx-auto"
          style={{
            fontFamily: "Chap-Regular",
            fontWeight: 500,
            fontSize: "1.5rem",
            lineHeight: "1.6",
          }}
        >
          Luis&apos;s signature style blends masterful sleight of hand, magic,
          mentalism, improv comedy, and dynamic audience interaction into a
          captivating theatrical experience. His performances are unpredictable,
          funny, and packed with hard-hitting moments.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="w-full flex  items-center px-6 py-6 gap-4">
        {/* Gallery Grid */}
        <div className="flex flex-col gap-4 w-full overflow-hidden ">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2  animate-scroll-row">
            {[...Array(10)].map((_, idx) => (
              <div
                key={idx}
                className={`relative w-full pb-[100%] overflow-hidden rounded-lg ${
                  hoveredImage === idx ? "scale-110" : ""
                }`}
                onMouseEnter={() => setHoveredImage(idx)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src={`/photos/image_${idx + 1}.jpg`} // Replace with actual paths
                  alt={`Gallery image ${idx + 1}`}
                  layout="fill"
                  objectFit="cover"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="rounded-lg transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
          {/* <div className="grid grid-cols-5 gap-2 animate-scroll-row-reverse">
            {[...Array(10)].map((_, idx) => (
              <div
                key={idx}
                className={`relative w-full pb-[100%] overflow-hidden rounded-lg ${
                  hoveredImage === idx ? "scale-110" : ""
                }`}
                onMouseEnter={() => setHoveredImage(idx)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src={`/photos/image_${idx + 1}.jpg`} // Replace with actual paths
                  alt={`Gallery image ${idx + 1}`}
                  layout="fill"
                  objectFit="cover"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="rounded-lg transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </div> */}
        </div>

        {/* Main Overlay Image */}
        <div className=" w-50 h-50 md:w-96 md:h-full animate-overlay-spin hidden md:block ">
          <Image
            src={`/overlay.png`} // Replace with actual overlay image path
            alt={`Overlay image`}
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
            objectFit="contain"
            className="rounded-lg transition-transform duration-700 ease-in-out hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default PageTwo;

/* CSS Animations (Add these to your global CSS file or use Tailwind CSS custom utilities) */
<style jsx>{`
  @keyframes scroll-row {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes scroll-row-reverse {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .animate-scroll-row {
    animation: scroll-row 10s linear infinite;
  }

  .animate-scroll-row-reverse {
    animation: scroll-row-reverse 10s linear infinite;
  }

  @keyframes overlay-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .animate-overlay-spin {
    animation: overlay-spin 1s linear infinite;
  }
`}</style>
