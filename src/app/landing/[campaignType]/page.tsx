/* eslint-disable react/no-unescaped-entities */
import Header from '@/components/Header';
import React from 'react'
import Link from 'next/link';
import CTA from '@/components/Cta';
import Image from 'next/image';
import Footer from '@/components/Footer';

interface RaisingAwarenessProps {
    params: {
      campaignType: string
    }
  }

const RaisingAwareness: React.FC<RaisingAwarenessProps> = ({params}) => {
  
  if (params.campaignType !== 'new-way-to-raise-awareness') return null;
  
  return (
    <>
    <div className="flex flex-col min-h-screen font-inter text-gray-900">
      <Header />
      <section className="bg-[#0066dd] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Raising Awareness for a Better Future</h1>
          <p className="text-xl mb-8">
            Discover, share, and bring to life innovative ideas that raise awareness on crucial issues like climate change, education, and social justice. Join our community to create a lasting impact.
          </p>
          <ul className="list-none mb-8">
            <li className="text-lg mb-2">Inform the public about critical issues</li>
            <li className="text-lg mb-2">Inspire communities to take action</li>
            <li className="text-lg mb-2">Mobilize resources for impactful change</li>
          </ul>
          <CTA />
          {/* <div className="space-x-4">
            <button className="bg-white text-[#0066dd] px-6 py-3 rounded-md font-semibold hover:bg-gray-100">Get Involved</button>
            <button className="bg-[#004aad] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#003399]">Learn More</button>
          </div> */}
        </div>
      </section>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mt-8">Why Raising Awareness Matters</h2>
        <p className="mt-4">
          Raising awareness is the first step to bringing attention of the masses to many of the world's pressing problems. When people are informed about the challenges we face and its long term consequences, they are more likely to engage in such discussions. If awareness is fused with execution, you can influence public opinion, drive policy changes, and mobilize resources to tackle issues head-on.
        </p>
        <h2 className="text-2xl font-bold mt-8">Some Areas to Begin With:</h2>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Climate Change</h3>
          <p className="mt-2">
            Climate change is one of the most urgent issues of our time. Raising awareness about the causes, impacts, and solutions is crucial to mobilizing global action. Our community shares ideas that educate the public about climate science, promote sustainable practices, and advocate for policies that mitigate environmental damage. Not just that, the crowd at OAI is unlike other communities. Here, people are go-getters. We believe in executing ideas and seeing impact in one way or another. People here don't just read, upvote and comment. Instead, they participate and express their interest in executing the idea. So, if you believe that fossil fuels are just the tip of the iceberg and international bodies and citizens alike must do the needful with utmost urgency. This is the place for you. Engage with <a href='https://www.oasis-of-ideas.com/ideas/conceptualizing-and-implementing-a-climate-labelling-system'>exciting climate change ideas</a>
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Equal Job Opportunities</h3>
          <p className="mt-2">
            Equal job opportunities are essential for creating a fair and inclusive society. Start discussions surrounding unfair allocation of seats in colleges based on reservations and mere financial prowess. This can help in creating worthy talent and marketplace. Help combat discrimination and promote diversity. If you think, that job opportunities should be based on skills and talents, demonstrated abilities and not just mere certificates and brand colleges, then raise your voice for the sake of equal job opportunties. This is not only the answer to job opportunities but fills the skill gap which the marketplace is facing.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Better Education</h3>
          <p className="mt-2">
            <a href='https://www.oasis-of-ideas.com/ideas/the-education-interviews-fixing-the-misunderstandings-about-the-education-system'>Our education system is broken and outdated.</a> Quality education is a fundamental right that should be accessible to all. Join OAI and spark a discussion on why despite millions of colleges throughout the world, billions are jobless yet. Why are third-world countries, despite 5G connections, lag behind in jobs and better life. Why has there been no major inventions since the Internet? Why are our computer science students limited to building and maintaining products that serve only the top 5%? What have the lower strata done to not deserve high quality education?
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">New Forms of Governance</h3>
          <p className="mt-2">
            Blaming Governments and people who vote based on their ideologies and beliefs is not a wise way of approaching political crisis that the world is facing. Instead, we should question the fundamentals of what makes a society turn to a civilization. Spark discussions that takes not only leaders but also citizens accountable. Accountable for the way they think and make decisions. The Governance is not about getting ruled by someone or to vote for someone. It is about handing the civilization to the few wise who should accelarate the society from our tribal past to a global village. If you are a political scientist, social activist, game theorist, or a citizen striving for change, start discussions around new forms of governance, we encourage public participation and support for democratic reforms. Discuss ideas like participatory budgeting, e-governance, and community-led decision-making for a truly post-democratic and meta-modern society.
          </p>
        </div>
        <h2 className="text-2xl font-bold mt-8">Get Involved</h2>
        <p className="mt-4">
          Join our efforts to raise awareness and make a difference:
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>Share your ideas on our platform and inspire others to take action.</li>
          <li>Engage with the community by commenting on and upvoting ideas that resonate with you.</li>
          <li>Spread the word by sharing ideas and discussions on social media.</li>
          <li>Support our mission by donating or volunteering your time to help bring these ideas to life.</li>
        </ul>
      </div>
      <CTA />
      <Footer />
    </div>
    </>
  )
}

export default RaisingAwareness