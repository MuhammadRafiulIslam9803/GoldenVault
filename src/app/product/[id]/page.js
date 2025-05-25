'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';

const products = [
  { id: 1, name: 'Gold Royal Necklace', price: '$1200', image: '/images/necklace/necklace-1.jpeg', description: 'Elegant and classic royal necklace.' },
  { id: 2, name: 'Gold Classic Necklace', price: '$1800', image: '/images/necklace/necklace-2.jpeg', description: 'Timeless beauty with modern touch.' },
  { id: 4, name: 'Gold Luxury Necklace', price: '$2700', image: '/images/necklace/necklace-3.jpeg', description: 'Pure gold with a luxurious finish.' },
  { id: 9, name: 'Gold Mega Necklace', price: '$800', image: '/images/necklace/necklace-4.jpeg', description: 'Affordable elegance in every shine.' },
  { id: 5, name: 'Gold Elite Combo Pack', price: '$2799', image: '/images/combo/combo-1.jpeg', description: 'Combo with necklace, earrings, and more.' },
  { id: 6, name: 'Gold Elite Combo Pack', price: '$2899', image: '/images/combo/combo-2.jpeg', description: 'Exclusive combo with designer elements.' },
  { id: 7, name: 'Gold Elite Combo Pack', price: '$2999', image: '/images/combo/combo-3.jpeg', description: 'High-end combo with pure gold pieces.' },
  { id: 8, name: 'Gold Elite Combo Pack', price: '$3599', image: '/images/combo/combo-4.jpeg', description: 'Best seller with royal combo items.' },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const imageRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleWheel = (e) => {
      if (imageRef.current && imageRef.current.contains(e.target)) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        setScale(prev => {
          let newScale = prev + delta;
          if (newScale < 1) newScale = 1;
          if (newScale > 3) newScale = 3;
          return newScale;
        });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  if (!product) {
    return <div className="p-6 text-center text-red-600">Product not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div
          ref={imageRef}
          className="w-full h-[400px] overflow-hidden flex justify-center items-center bg-black"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={600}
            style={{
              transform: `scale(${scale})`,
              transition: 'transform 0.2s ease-in-out',
            }}
            className="object-contain max-h-full"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-2">{product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
