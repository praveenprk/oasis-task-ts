import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0066dd] text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <Link href="mailto:oasis.repository@gmail.com" className="mx-4 hover:underline">
          Contact Us
        </Link>
        <Link href="https://www.oasis-of-ideas.com/legal/privacy-policy" className="mx-4 hover:underline">
          Privacy Policy
        </Link>
        <Link href="https://www.oasis-of-ideas.com/legal/terms-of-use" className="mx-4 hover:underline">
          Terms of Use
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
