import Image from 'next/image';

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Gold Necklace',
      price: '$1200',
      description: 'Elegant gold necklace with a modern design.',
      rating: 4.5,
      image: '/images/necklace.jpg'
    },
    {
      id: 2,
      name: 'Gold Ring',
      price: '$800',
      description: 'Beautiful gold ring with a classic finish.',
      rating: 4.7,
      image: '/images/ring.jpg'
    },
    {
      id: 3,
      name: 'Gold Bracelet',
      price: '$950',
      description: 'Stylish gold bracelet with intricate details.',
      rating: 4.3,
      image: '/images/bracelet.jpg'
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Available Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', padding: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '15px', textAlign: 'center' }}>
            <Image src={product.image} alt={product.name} width={300} height={300} style={{ borderRadius: '10px' }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>{product.price}</strong></p>
            <p>Rating: ⭐{product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
