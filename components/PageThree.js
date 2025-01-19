import Image from "next/image";
import VideoPlayer from "./VideoPlayer";

const PageThree = () => {

  return (
  <div className="bg-[#2b2b2b] h-screen mx-auto w-full max-w-screen-xl px-2.5 md:px-20 mt-[30px] relative">
  <div className="relative h-[80%] w-full">
  <div className="absolute inset-0 rounded-xl">
   <Image src="/photos/image_8.jpg" alt="image" fill className="object-cover aspect-auto opacity-50 z-0 rounded-3xl"/>
   </div>
  </div>
  <div className="absolute inset-0 px-6 md:px-10 w-[80%] mx-auto lg:mx-0 lg:w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2">
     <div className="flex flex-col items-start lg:ml-[80px] gap-3">
     <div className="text-white font-bold text-[30px] md:text-[50px] font-chapFont ">The Performer</div>
     <div className="text-white">
     <p className="mb-6 text-[15px] md:text-[20px] font-chapFont">
     Luis spent most of his adulthood locked in a room, practicing magic. Now, he presents the skills he acquired in that room in a highly entertaining and unique way, often playing the character of the person he wishes to be in real life.
    
      </p>

     <p className="text-[15px] md:text-[20px] font-chapFont">
     Recognized as Nepal&apos;s finest sleight of hand artist, Luis quickly became the president of the Nepali Brotherhood of Magicians, the country&apos;s only organization dedicated to magicians.His passion for the craft has fostered a strong sense of responsibility toward shaping the future of magic and live performances in Nepal.
      </p>
     </div>
     </div>
     <div className="lg:ml-[80px]">
      <VideoPlayer/>
     </div>
      <div className="row-span-2 col-start-2 row-start-1 hidden lg:block">
        <div className="flex items-center justify-center">
        <Image src="/overlay.png" alt="image" width={450} height={450}/>
        </div>
      </div>
    </div>
   </div>
  </div>
  )
 
};

export default PageThree;
