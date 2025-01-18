import React from "react";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";

const PageThree = () => {
  return(
    <div className="m-60 relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-80 bg-gray-900  rounded-3xl"
      style={{ backgroundImage: "url('/photos/image_8.jpg')" }}
    />

    {/* Content */}
    <div className="relative z-10 max-w-5xl mx-auto text-center p-6">
      <h1 className="text-5xl font-bold mb-6">The Performer</h1>
      <p className="mb-6 text-lg">
        Luis spent most of his adulthood locked in a room, practicing magic. Now, he presents the
        skills he acquired in that room in a highly entertaining and unique way, often playing the
        character of the person he wishes to be in real life.
      </p>
      <p className="mb-6 text-lg">
        Recognized as Nepal's finest sleight-of-hand artist, Luis quickly became the president of
        the Nepal Brotherhood of Magicians, the country's only organization dedicated to
        magicians. His passion for the craft has fostered a strong sense of responsibility toward
        shaping the future of magic and live performances in Nepal.
      </p>
    </div>

    {/* Video Section */}
    <VideoPlayer/>
    {/* Side Image */}
    <div className="absolute right-10  z-10">
      <Image src="/overlay.png" alt="Luis with Cards" width={500} height={500} />
    </div>
  </div>

  );
  // return (
  //   <div className="relative w-full bg-[#2b2b2b] text-white min-h-screen flex flex-col justify-center items-center md:m-20 ">
  //     {/* Background Image */}
  //     <div className="absolute inset-0 ">
  //       <Image
  //         src="/photos/image_8.jpg" // Replace with your image path
  //         alt="Background Image"
  //         layout="fill"
  //         objectFit="cover"
  //         className="opacity-60 rounded-2xl"
  //       />
  //     </div>

  //     {/* Content */}
  //     <div className="relative z-10 w-full max-w-5xl px-6 py-12  flex">
  //       {/* Title */}
  //       <div>
  //         <h1
  //           className="text-center text-4xl font-bold mb-8"
  //           style={{ fontFamily: "Chap-Bold" }}
  //         >
  //           THE PERFORMER
  //         </h1>

  //         {/* Text Content */}
  //         <p
  //           className="text-lg leading-7 mx-auto text-center"
  //           style={{
  //             fontFamily: "Chap-Regular",
  //             fontWeight: 400,
  //             lineHeight: "1.8",
  //           }}
  //         >
  //           My journey started by me writing things that could be performed to an
  //           audience. In that journey, I stumbled upon magic which I instantly
  //           fell in love with and knew it is something I wanted to do. Since then,
  //           magic is in my head 24/7, and the deck of cards never leaves my hand.
  //           <br />
  //           <br />
  //           Being called the finest sleight-of-hand artist of Nepal and given the
  //           responsibility to run Nepali Brotherhood of Magician (which is the
  //           only organization dedicated to magicians in Nepal) so quickly since I
  //           started magic, it gets me excited and also makes me feel responsible
  //           for the future of magic and live shows in Nepal.
  //         </p>
  //       </div>
  //       {/* Overlay Image */}


  //       {/* Video Section */}

  //     </div>
  //     <div className="flex justify-center mt-12">
  //       <VideoPlayer />
  //     </div>
  //   </div>
  // );
};

export default PageThree;
