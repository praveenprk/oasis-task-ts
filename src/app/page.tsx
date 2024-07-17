export default function Home() {
  return (
      <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Task for Senior Product Engineer @ Oasis of Ideas</h1>
          <p className="text-lg mb-4">For the next few weeks, a major priority for our company is to bring in organic traffic via search engines. To understand your suitability for this endeavor, we would like you to do a short task.</p>
          
          <h2 className="text-2xl font-bold mb-2">Task Overview</h2>
          <p>We would like you to build a strong landing page for us that will rank highly on search engines. We are envisioning the following flow:</p>
          <ul className="list-disc pl-6 mb-4">
              <li>User searches for something related to our product on Google.</li>
              <li>Your landing page (which is search engine optimized) ranks highly.</li>
              <li>User clicks on the landing page and is brought to our website.</li>
              <li>The landing page encourages users to explore the product.</li>
              <li>The user finds the product helpful and converts (i.e. signs up).</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-2">Task Details</h2>
          <ul className="list-disc pl-6 mb-4">
              <li><strong>Step 1:</strong> Start by improving your understanding of SEO. There are plenty of good quality resources online to help you with this. (Estimated 2-3 hours)</li>
              <li><strong>Step 2:</strong> Choose a specific keyword or search term related to our product. The keyword should ideally be something that a lot of people are searching for, and something that we can potentially rank highly for. (Estimated 30 minutes)</li>
              <li><strong>Step 3:</strong> Come up with content for the landing page that would help the page rank highly. (Estimated 2-3 hours)</li>
              <li><strong>Step 4:</strong> Design and code the landing page (Estimated 3-4 hours). You can use Figma or other design tools to help yourself conceptualize the design of this page, but this is not strictly required.</li>
              <li><strong>Step 5:</strong> Deploy it on Vercel (Estimated 30 minutes).</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-2">Compensation</h2>
          <p>If your work demonstrates sincere effort, we will compensate you for this time by paying you 2500 INR – irrespective of whether you are selected.</p>
          
          <h2 className="text-2xl font-bold mb-2">Further Details</h2>
          <ul className="list-disc pl-6 mb-4">
              <li>Feel free to use ChatGPT, Claude or other AI tools if it improves your workflow. However, from our own personal experience, we would like to warn you about such tools – if you try to use them to do the entire sections of this task, you will waste more time than you will save, and ultimately end up with a poor quality output.</li>
              <li>The landing page should be coded in NextJS using the app router system. Feel free to use either Tailwind CSS or vanilla CSS. Use TypeScript. It should employ server-side rendering.</li>
              <li>The page should blend in seamlessly with the rest of our web app (use a minimalistic yet practical style and a similar color scheme). The blue we are using is #0066dd and the font we use is Inter.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-2">Expected Submission</h2>
          <p>Please share a GitHub repository with us containing your code. The README of this repository should contain the following:</p>
          <ul className="list-disc pl-6 mb-4">
              <li>The link to the live web app (as deployed on Vercel).</li>
              <li>Your chosen keyword / search term.</li>
              <li>A brief explanation of the key features of your work that you would like us to notice.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-2">Assessment Criteria</h2>
          <ul className="list-disc pl-6 mb-4">
              <li>Understanding of our existing product and target audience.</li>
              <li>Understanding of SEO.</li>
              <li>Aesthetic and design sense.</li>
              <li>Code quality.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-2">Questions / Clarifications</h2>
          <p>For any questions or clarifications regarding this task, please don’t hesitate to write to us at oasis.repository@gmail.com</p>
      </div>
  );
}
