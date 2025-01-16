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
    <div className="text-center mb-12">
      <Image
        src={images[currentIndex]} 
        alt="Gold Jewelry Collection"
        width={800}
        height={300}
        className="rounded-lg shadow-lg"
      />
      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={prevImage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Prev
        </button>
        <button
          onClick={nextImage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
