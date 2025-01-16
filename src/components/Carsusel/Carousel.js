"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const images = [
    '/images/beauty-1.jpeg',
    '/images/beauty-2.jpeg',
    '/images/beauty-3.jpeg',
    '/images/beauty-4.jpeg'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative text-center mb-12">
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 py-2 z-10">
        <button
          onClick={prevImage}
          className="bg-gray-100 text-amber-700 px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Prev
        </button>
        <button
          onClick={nextImage}
          className="bg-gray-100 text-amber-700 px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Next
        </button>
      </div>
      
      {/* Image */}
      <Image
        src={images[currentIndex]} 
        alt="Gold Jewelry Collection"
        width={1350}
        height={50}
        className="w-full  rounded-lg shadow-lg" 
      />
    </div>
  );
};

export default Carousel;
