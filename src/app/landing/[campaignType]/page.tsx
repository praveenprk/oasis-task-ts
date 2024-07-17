import Header from '@/components/Header';
import React from 'react'
import Link from 'next/link';
import CTA from '@/components/Cta';

interface RaisingAwarenessProps {
    params: {
      campaignType: string
    }
  }

const RaisingAwareness: React.FC<RaisingAwarenessProps> = ({params}) => {
  
  if (params.campaignType !== 'new-way-to-raise-awareness') return null;
  
  return (
    <div className="font-inter text-gray-900">
      <Header />
      <div className="bg-[#0066dd] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Raising Awareness for a Better Future</h1>
          <p className="mt-4 text-xl">
            Discover how raising awareness on critical issues like climate change, education, and equal job opportunities can make a difference. Join our efforts to create a better world.
          </p>
          &nbsp;
          <h3 className='font-semibold'>Are you someone who:</h3>
          <ul className="list-none mb-8">
            <li className="text-lg">• Wants to Inform public about critical issues</li>
            <li className="text-lg">• Willing to connect and share with people focusing on similar social initiatives as you</li>
            <li className="text-lg">• Believes in more than talk and instead execute ideas and stay in loop</li>
          </ul>
        </div>
        <CTA />
      </div>
      <div className="container mx-auto px-4 py-8" id="learnMore">
        <h2 className="text-2xl font-bold mt-8">Why Raising Awareness Matters</h2>
        <p className="mt-4">
          Raising awareness is the first step towards solving many of the world's most pressing problems. When people are informed about the challenges we face, they are more likely to support and advocate for solutions. Awareness campaigns can influence public opinion, drive policy changes, and mobilize resources to tackle issues head-on.
        </p>
        <h2 className="text-2xl font-bold mt-8">Some Areas of Focus to Begin With...</h2>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Climate Change</h3>
          <p className="mt-2">
            Climate change is one of the most urgent issues of our time. Raising awareness about the causes, impacts, and solutions is crucial to mobilizing global action. Our campaigns focus on educating the public about climate science, promoting sustainable practices, and advocating for policies that mitigate environmental damage.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Equal Job Opportunities</h3>
          <p className="mt-2">
            Equal job opportunities are essential for creating a fair and inclusive society. Awareness campaigns can help combat workplace discrimination and promote diversity. We highlight the importance of equal opportunities and work to ensure that everyone, regardless of their background, has access to fair employment prospects.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Better Education</h3>
          <p className="mt-2">
            Quality education is a fundamental right that should be accessible to all. Raising awareness about the disparities in education can lead to significant reforms. Our initiatives focus on improving access to education for underprivileged communities, enhancing educational resources, and advocating for policies that support educational equity.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">New Forms of Governance</h3>
          <p className="mt-2">
            Innovative governance models can lead to more transparent, accountable, and effective leadership. By raising awareness about new forms of governance, we encourage public participation and support for democratic reforms. Our campaigns promote ideas such as participatory budgeting, e-governance, and community-led decision-making.
          </p>
        </div>
        <h2 className="text-2xl font-bold mt-8">Success Stories</h2>
        <p className="mt-4">
          <strong>Climate Change Awareness Campaign</strong>: Our campaign on climate change reached over a million people worldwide, resulting in increased public support for renewable energy policies.
        </p>
        <p className="mt-4">
          <strong>Equal Job Opportunities Initiative</strong>: A collaboration with major corporations to promote workplace diversity led to the implementation of new hiring practices that prioritize inclusivity.
        </p>
        <p className="mt-4">
          <strong>Education Reform Advocacy</strong>: Through our efforts, several local governments have committed to increasing funding for schools in underserved areas.
        </p>
        <p className="mt-4">
          <strong>Governance Innovation Project</strong>: Our awareness campaign on participatory budgeting empowered communities to have a direct say in how public funds are allocated.
        </p>
        <h2 className="text-2xl font-bold mt-8">Get Involved</h2>
        <p className="mt-4">
          <strong>Participate</strong>: Join our awareness campaigns and help spread the word about critical issues.
        </p>
        <p className="mt-4">
          <strong>Share</strong>: Use your social media platforms to share information and raise awareness among your network.
        </p>
        <p className="mt-4">
          <strong>Support</strong>: Contribute to our cause by donating or volunteering your time to support our initiatives.
        </p>
        <p className="mt-8 text-center">
          Together, we can create a more informed, engaged, and proactive society. Join Oasis of Ideas in our mission to raise awareness and drive change.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mt-8">Multimedia Elements</h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Images</h3>
            <div className="mt-2">[Placeholder for engaging images depicting each key area]</div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Videos</h3>
            <div className="mt-2">[Placeholder for embedded videos featuring expert talks, campaign highlights, and testimonials]</div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Infographics</h3>
            <div className="mt-2">[Placeholder for visually appealing infographics that represent data and the impact of our awareness campaigns]</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RaisingAwareness