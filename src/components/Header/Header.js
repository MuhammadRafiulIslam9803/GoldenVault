import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-yellow-500 text-white shadow-lg w-full">
            <div className="text-2xl font-bold">Gold Shop</div>
            <nav className="flex space-x-4">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/login" className="hover:underline">Login</Link>
                <Link href="/dashboard" className="hover:underline">Dashboard</Link>
            </nav>
        </header>
    );
};

export default Header;
