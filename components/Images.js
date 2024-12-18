import Image from "next/image";

export default function FullScreenImageGallery() {
  const images = [
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
  ]; // Replace with your image paths

  return (
    <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory">
      {images.map((src, index) => (
        <div
          key={index}
          className="w-full h-screen relative snap-start"
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      ))}
    </div>
  );
}
