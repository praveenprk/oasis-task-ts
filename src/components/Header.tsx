import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.webp" alt="Oasis of Ideas Logo" width={40} height={40} />
          <Link href="/">
            <span>Oasis of Ideas</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="#">
            <span className="text-blue-500 border border-blue-500 px-3 py-1 rounded hover:bg-blue-500 hover:text-white">Join Us</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
