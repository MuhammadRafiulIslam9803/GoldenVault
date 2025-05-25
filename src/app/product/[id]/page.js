'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const products = [
    {
        id: 1,
        name: 'Gold Royal Necklace',
        price: '$1200',
        image: '/images/necklace/necklace-1.jpeg',
        description: 'Elegant and classic royal necklace.',
        details: {
            caret: '22K',
            weight: '18 grams',
            mainDescription: 'Designed for queens, this royal necklace speaks of elegance and grandeur, perfect for weddings or formal occasions.',
            whyBest: 'Timeless royal design with premium polish that lasts for years.',
            occasions: ['Wedding', 'Anniversary', 'Cultural Events'],
            authenticity: 'BIS Hallmarked',
            craftsmanship: 'Handcrafted by expert artisans with precision.',
            returnPolicy: '7-day easy return policy',
        },
    },
    {
        id: 2,
        name: 'Gold Classic Necklace',
        price: '$1800',
        image: '/images/necklace/necklace-2.jpeg',
        description: 'Timeless beauty with modern touch.',
        details: {
            caret: '22K',
            weight: '21 grams',
            mainDescription: 'Perfect blend of modern elegance and traditional curves, ideal for daily wear or festive occasions.',
            whyBest: 'Lightweight yet rich look with unmatched comfort.',
            occasions: ['Festivals', 'Parties', 'Gifting'],
            authenticity: 'BIS Hallmarked',
            craftsmanship: 'Polished with mirror-shine finish, made with love.',
            returnPolicy: '7-day return or exchange guarantee',
        },
    },
    {
        id: 4,
        name: 'Gold Luxury Necklace',
        price: '$2700',
        image: '/images/necklace/necklace-3.jpeg',
        description: 'Pure gold with a luxurious finish.',
        details: {
            caret: '24K',
            weight: '25 grams',
            mainDescription: 'Crafted with pure 24K gold, this necklace offers unmatched shine and a premium luxurious feel.',
            whyBest: 'Made from the purest form of gold for ultra-rich appeal.',
            occasions: ['Engagement', 'Luxury Gifting'],
            authenticity: 'Certified 24K by national gold standards',
            craftsmanship: 'Detailed filigree work by royal craftsmen.',
            returnPolicy: 'Return within 10 days with original packaging',
        },
    },
    {
        id: 9,
        name: 'Gold Mega Necklace',
        price: '$800',
        image: '/images/necklace/necklace-4.jpeg',
        description: 'Affordable elegance in every shine.',
        details: {
            caret: '18K',
            weight: '14 grams',
            mainDescription: 'Budget-friendly necklace that brings golden sparkle without heavy cost.',
            whyBest: 'Most affordable yet classy in its category.',
            occasions: ['Birthday', 'College Farewell', 'Daily Office Wear'],
            authenticity: '18K Hallmarked',
            craftsmanship: 'Machine-polished with minimalistic patterns.',
            returnPolicy: 'Exchange only within 5 days',
        },
    },
    {
        id: 5,
        name: 'Gold Elite Combo Pack',
        price: '$2799',
        image: '/images/combo/combo-1.jpeg',
        description: 'Combo with necklace, earrings, and more.',
        details: {
            caret: '22K',
            weight: '32 grams total',
            mainDescription: 'An elite combo set designed to match every occasion with necklace, earrings, bangles, and nose ring.',
            whyBest: 'Complete solution for bridal or festival look.',
            includedItems: ['Necklace', 'Earrings', 'Bangles', 'Nose Ring'],
            occasions: ['Bridal Wear', 'Festivals'],
            authenticity: 'Full Set BIS Certified',
            craftsmanship: 'Traditional carvings blended with sparkle stones.',
            returnPolicy: '15-day combo return guarantee',
        },
    },
    {
        id: 6,
        name: 'Gold Elite Combo Pack',
        price: '$2899',
        image: '/images/combo/combo-2.jpeg',
        description: 'Exclusive combo with designer elements.',
        details: {
            caret: '22K',
            weight: '34 grams total',
            mainDescription: 'Exclusive combo with unique designer touches to stand out in any crowd.',
            whyBest: 'Designer edition with limited stock.',
            includedItems: ['Necklace', 'Bracelet', 'Drop Earrings'],
            occasions: ['Engagements', 'Gifting'],
            authenticity: 'BIS Hallmarked Components',
            craftsmanship: 'Fusion of modern and classical artistry.',
            returnPolicy: '7-day free return and pickup',
        },
    },
    {
        id: 7,
        name: 'Gold Elite Combo Pack',
        price: '$2999',
        image: '/images/combo/combo-3.jpeg',
        description: 'High-end combo with pure gold pieces.',
        details: {
            caret: '24K',
            weight: '36 grams total',
            mainDescription: 'Pure gold high-end combo for those who settle for nothing but the best.',
            whyBest: 'All pieces made from pure 24K — luxurious and radiant.',
            includedItems: ['Necklace', 'Earrings', 'Maang Tikka'],
            occasions: ['Bridal Events', 'Photoshoots'],
            authenticity: 'Certified Pure Gold Combo',
            craftsmanship: 'Pure handmade with intricate detailing.',
            returnPolicy: 'Return available within 5 days',
        },
    },
    {
        id: 8,
        name: 'Gold Elite Combo Pack',
        price: '$3599',
        image: '/images/combo/combo-4.jpeg',
        description: 'Best seller with royal combo items.',
        details: {
            caret: '22K',
            weight: '40 grams total',
            mainDescription: 'Best-selling combo designed with regal patterns to deliver maximum charm.',
            whyBest: 'Customer-favorite with glowing testimonials.',
            includedItems: ['Necklace', 'Jhumka', 'Bracelet', 'Ring'],
            occasions: ['Weddings', 'Engagement', 'Anniversary'],
            authenticity: 'Authentic and Certified Gold Items',
            craftsmanship: 'Polished with antique matte and gold dust layering.',
            returnPolicy: 'No-questions return within 10 days',
        },
    },
];


export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    const [scale, setScale] = useState(1);
    const [transformOrigin, setTransformOrigin] = useState('center center');

    useEffect(() => {
        const handleWheel = (e) => {
            if (containerRef.current && containerRef.current.contains(e.target)) {
                e.preventDefault();

                const rect = containerRef.current.getBoundingClientRect();
                const offsetX = e.clientX - rect.left;
                const offsetY = e.clientY - rect.top;

                // Mouse position (% based) inside the image container
                const originX = (offsetX / rect.width) * 100;
                const originY = (offsetY / rect.height) * 100;
                setTransformOrigin(`${originX}% ${originY}%`);

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
                    ref={containerRef}
                    className="w-full h-[400px] overflow-hidden bg-black flex items-center justify-center"
                >
                    <Image
                        ref={imageRef}
                        src={product.image}
                        alt={product.name}
                        width={800}
                        height={600}
                        style={{
                            transform: `scale(${scale})`,
                            transformOrigin: transformOrigin,
                            transition: 'transform 0.2s ease-out',
                        }}
                        className="object-contain max-h-full"
                    />
                </div>
                <div className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-1">{product.name}</h1>
                    <p className="text-xl text-amber-600 font-semibold mb-1">{product.price}</p>
                    <p className="text-gray-600 mb-4">{product.description}</p>

                    {product.details && (
                        <div className="divide-y divide-gray-200">
                            {product.details.mainDescription && (
                                <div className="py-2">
                                    <p><span className="font-semibold text-gray-800">About:</span> {product.details.mainDescription}</p>
                                </div>
                            )}
                            {product.details.caret && (
                                <div className="py-2">
                                    <p><span className="font-semibold text-gray-800">Gold Quality:</span> {product.details.caret}</p>
                                </div>
                            )}
                            {product.details.weight && (
                                <div className="py-2">
                                    <p><span className="font-semibold text-gray-800">Weight:</span> {product.details.weight}</p>
                                </div>
                            )}
                            {product.details.whyBest && (
                                <div className="py-2">
                                    <p><span className="font-semibold text-gray-800">Why it’s best:</span> {product.details.whyBest}</p>
                                </div>
                            )}
                            {product.details.occasions?.length > 0 && (
                                <div className="py-2">
                                    <p><span className="font-semibold text-gray-800">Perfect For:</span> {product.details.occasions.join(', ')}</p>
                                </div>
                            )}
                            {product.details.includedItems?.length > 0 && (
                                <div className="py-2">
                                    <p><span className="font-semibold text-gray-800">Included Items:</span> {product.details.includedItems.join(', ')}</p>
                                </div>
                            )}
                            {product.details.authenticity && (
                                <div className="py-2">
                                    <p><span className="font-semibold text-gray-800">Authenticity:</span> {product.details.authenticity}</p>
                                </div>
                            )}
                            {product.details.craftsmanship && (
                                <div className="py-2">
                                    <p><span className="font-semibold text-gray-800">Craftsmanship:</span> {product.details.craftsmanship}</p>
                                </div>
                            )}
                            {product.details.returnPolicy && (
                                <div className="py-2">
                                    <p><span className="font-semibold text-gray-800">Return Policy:</span> {product.details.returnPolicy}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                    

            </div>
        </div>
    );
}
