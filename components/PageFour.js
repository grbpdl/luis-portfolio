import React, { useState, useEffect } from 'react';
import ImageCarousel from './Carousel';
const PageFour = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Luis's show was absolutely mind-blowing! The audience was captivated from start to finish.",
      author: 'Gaurab Paudyal',
    },
    {
      id: 2,
      quote:
        "David’s mentalism was the highlight of our corporate event. Highly recommended!",
      author: 'Happy Club',
    },
    {
      id: 3,
      quote:
        "The interactive nature of the performance was something we had never seen before. Amazing!",
      author: 'The Karki JI',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="w-full bg-[#2b2b2b] min-h-screen flex flex-col items-center p-10 text-white">
      {/* Title */}
      <div className="w-full max-w-5xl text-center border-t border-b border-gray-500 py-6 mb-8">
        <h1 className="text-5xl font-extrabold font-chapFont">Performances</h1>
      </div>

      {/* Content */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Text Section */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold font-chapFont">Stage Show</h2>
          <p className="font-chapFont text-xl leading-relaxed">
            Luis&apos;s platform performances are for groups of 15 to 1,000 and can
            range from 10 to 70 minutes. David&apos;s program is predominantly
            mentalism — mindreading, influence, predictions — magic that
            appeals to the savvy modern audience. His program is highly
            interactive, with countless audience members participating from
            their seat and the stage.
          </p>
          <ImageCarousel img1={"/photos/image_17.jpg"} img2={"/photos/image_15.jpg"} img3={"/photos/image_16.jpg"}/>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold font-chapFont">Strolling & Close-Up Magic
          </h2>
          <p className="font-chapFont text-xl leading-relaxed">
          Luis&apos;s strolling magic is ideal for events that demand seamless entertainment, such as restaurants, corporate gatherings, and cocktail hours. He effortlessly captivates small groups with his impressive magic, creating a moment to remember. In more intimate settings, Luis can also present a close-up magic show, ensuring that every guest is fully engaged. As a master sleight-of-hand artist, Luis leaves a lasting impression, whether performing up close or mingling with the crowd, giving guests a moment to remember.

          </p>
          <ImageCarousel img1={"/photos/image_17.jpg"} img2={"/photos/image_15.jpg"} img3={"/photos/image_16.jpg"}/>
        </div>



      </div>

      {/* Testimonials Section */}
      <div className="w-full max-w-5xl mt-12">
        <div className="relative bg-[#1f2a38] text-white p-6 rounded-lg shadow-lg">
          {/* Testimonial Content */}
          <p className="text-xl italic text-center">
          &quot;{testimonials[currentTestimonial].quote}&quot;
          </p>
          <p className="text-lg font-semibold text-center mt-4">
            - {testimonials[currentTestimonial].author}
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default PageFour;
