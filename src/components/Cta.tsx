import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTA: React.FC = () => {

return (
    <div className="space-x-4 text-center">
        <Link href='#' className="bg-white text-[#0066dd] px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
        Join OAI
        </Link>
        <Link href='#learnMore' className="bg-[#004aad] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#003399]">
        Learn More
        </Link>
    </div>
    );
}

export default CTA;