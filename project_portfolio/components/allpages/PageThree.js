import React from 'react'

const PageThree = () => {
  return (
    <div className="w-full bg-[#2b2b2b] min-h-screen flex flex-col gap-5">
    <p
      className="text-white text-center px-4 py-4  mx-auto"
      style={{
        fontFamily: "Chap-Regular",
        fontWeight: 500,
        fontSize: "2rem", // Make the text larger, adjust as needed
        lineHeight: "1.4", // Adjust line height for better readability
        display: "-webkit-box", // Flexbox style to manage the lines
        WebkitBoxOrient: "vertical", // Ensure it's oriented vertically
        textAlign: "center", // Center text alignment
      }}
    >
      Luis's signature style blends masterful sleight of hand, magic,
      mentalism, improv comedy, and dynamic audience interaction into a
      captivating theatrical experience. His performances are
      unpredictable,funny and packed with hard hitting moments.
    </p>

    <div className="w-full bg-[#2b2b2b] py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
        {/* Top row of images */}
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="relative h-60">
            <Image
              src={`/image_${idx + 1}.jpg`} // Update with your image names
              alt={`Gallery image ${idx + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Bottom row of images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-4 mt-8">
        {[...Array(5)].map((_, idx) => (
          <div key={idx + 5} className="relative h-60">
            <Image
              src={`/image_${idx + 6}.jpg`} // Update with your image names
              alt={`Gallery image ${idx + 6}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default PageThree
