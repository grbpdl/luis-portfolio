import Image from "next/image";
import React, { useEffect, useState } from "react";

const PageTwo = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHoveredImage((prev) => (prev === 9 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#2b2b2b] min-h-screen flex flex-col items-center">
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
          Luis's signature style blends masterful sleight of hand, magic,
          mentalism, improv comedy, and dynamic audience interaction into a
          captivating theatrical experience. His performances are unpredictable,
          funny, and packed with hard-hitting moments.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="w-full flex flex-wrap justify-center items-center px-6 py-6 gap-4 relative">
        {/* Gallery Grid */}
        <div className="flex-1 grid grid-cols-5 gap-2 max-w-[70%]">
          {[...Array(10)].map((_, idx) => (
            <div
              key={idx}
              className={`relative w-full pb-[100%] overflow-hidden rounded-lg animate-image-slide hover:translate-x-4 ${
                hoveredImage === idx ? "scale-110" : ""
              }`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <Image
                src={`/photos/image_${idx + 1}.jpg`} // Replace with actual paths
                alt={`Gallery image ${idx + 1}`}
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 1024px) 50vw, 20vw"
                className="rounded-lg transition-transform duration-0 ease-in-out"
              />
            </div>
          ))}
        </div>

        {/* Main Overlay Image */}
        <div className="relative w-96 h-96 animate-overlay-spin ">
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

/* CSS Animations (Add these to your global CSS file) */
<style jsx>{`
  @keyframes image-slide {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(10px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .animate-image-slide {
    animation: image-slide 1s infinite ease-in-out;
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
