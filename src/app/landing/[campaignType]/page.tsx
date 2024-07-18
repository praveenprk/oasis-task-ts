/* eslint-disable react/no-unescaped-entities */
import Header from '@/components/Header';
import React from 'react'
import Link from 'next/link';
import CTA from '@/components/Cta';
import Image from 'next/image';
import Footer from '@/components/Footer';
import AwarenessArticle from '@/components/campaignContent/AwarenessArticle';

interface RaisingAwarenessProps {
    params: {
      campaignType: string
    }
  }

const RaisingAwareness: React.FC<RaisingAwarenessProps> = ({params}) => {
  
  // if (params.campaignType !== 'new-way-to-raise-awareness') return null;

  switch (params.campaignType) {
    case 'new-way-to-raise-awareness':
      return <AwarenessArticle />
      break;
  
    default:
      break;
  }
}

export default RaisingAwareness