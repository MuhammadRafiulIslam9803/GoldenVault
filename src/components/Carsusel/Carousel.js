"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { GrNext, GrPrevious } from "react-icons/gr";


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
                    className="px-4 py-2 rounded-lg hover:bg-yellow-700"
                >
                    <GrPrevious
                        size={30}
                        className='text-amber-700 hover:text-white' />
                </button>
                <button
                    onClick={nextImage}
                    className="px-4 py-2 rounded-lg hover:bg-yellow-700"
                >
                    <GrNext
                        size={30}
                        className='text-amber-700 hover:text-white' />
                </button>
            </div>
            <div className="absolute top-1/2 left-0 right-0 px-6 py-4 z-10 text-center">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-600 leading-tight tracking-wide mb-6 drop-shadow-lg">
                    Explore our premium collection of exquisite gold jewelry,
                    <br />
                    crafted to perfection for every occasion. Discover timeless elegance and unmatched quality.
                </h1>
                <p className="text-2xl text-white font-semibold opacity-90 drop-shadow-md max-w-3xl mx-auto">
                    Embellish your moments with luxury that lasts a lifetime.
                </p>
            </div>


            <Image
                src={images[currentIndex]}
                alt="Gold Jewelry Collection"
                width={1400}
                height={800}
                className="w-full h-[600px] rounded-lg shadow-lg"
            />
        </div>
    );
};

export default Carousel;
