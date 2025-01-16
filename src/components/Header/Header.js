import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-2 bg-yellow-500 text-black shadow-lg w-full">
            <div className="text-3xl font-extrabold tracking-widest px-6 py-3 rounded-lg bg-[#FFD700] shadow-lg transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r from-[#FFD700] to-[#FFA500] relative overflow-hidden group">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-black group-hover:text-black transition-all duration-500 ease-in-out">
                    AR <span className="font-light">Jewelers</span>
                </span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] opacity-50 blur-xl transform scale-150 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-in-out"></span>
            </div>



            <nav className="flex space-x-6 text-lg font-semibold">
                <Link
                    href="/"
                    className="relative hover:text-[#FFD700] transition duration-300 ease-in-out group "
                >
                    Home
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#FFD700] to-[#FFA500] group-hover:w-full transition-all duration-500 ease-in-out"></span>
                </Link>
                <Link
                    href="/login"
                    className="relative hover:text-[#FFD700] transition duration-300 ease-in-out group"
                >
                    Login
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#FFD700] to-[#FFA500] group-hover:w-full transition-all duration-500 ease-in-out"></span>
                </Link>
                <Link
                    href="/dashboard"
                    className="relative hover:text-[#FFD700] transition duration-300 ease-in-out group"
                >
                    Dashboard
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#FFD700] to-[#FFA500] group-hover:w-full transition-all duration-500 ease-in-out"></span>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
