// src/app/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'src/components/Carsusel/Carousel'; 

const products = [
  { id: 1, name: 'Gold Necklace', price: '$1200', image: '/images/necklace.jpg' },
  { id: 2, name: 'Gold Ring', price: '$800', image: '/images/ring.jpg' }
];

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Carousel Section */}
        <Carousel/>

      {/* Product Grid Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{product.price}</p>
              <Link
                href={`/product/${product.id}`}
                className="inline-block px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
