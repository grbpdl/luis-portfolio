import Image from "next/image";


const PageTwo = () => {

  return (
    <div className="w-full bg-[#2b2b2b] min-h-screen flex flex-col items-center relative p-8">
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
                className={`relative w-full pb-[100%] overflow-hidden rounded-lg `}
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
        
        </div>

       
      </div>
    </div>
  );
};

export default PageTwo;


