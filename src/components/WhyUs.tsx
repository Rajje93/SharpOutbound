import './WhyUs.css';
import { FaTimes, FaCheck } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <h2 className="section-title">Why most lead gen agencies <em>suck</em></h2>
        
        <p className="intro-text">
          99% of agencies rely on broad targeting, targeting by "persona" or "spray and pray". But the problem is today:
          <br /><br />
          <strong>Buyers are overwhelmed with cold sales emails. Their inboxes are flooded with irrelevant junk.</strong>
          <br /><br />
          <strong>The idea is simple, yet most don't implement it:</strong> target prospects based on the specific business pains you can solve, rather than just their job title and company.
        </p>

        <div className="comparison-grid">
          <div className="comparison-column negative">
            <h3>What 99% of SDRs/lead gen agencies do</h3>
            <p className="approach">Let's target all CFOs at manufacturing companies with 1000+ employees.</p>
            <ul>
              <li>
                <FaTimes className="icon" />
                <p>Generic Outreach: Messaging is too broad and fails to resonate with prospect's unique pain points.</p>
              </li>
              <li>
                <FaTimes className="icon" />
                <p>Missed Opportunities: You might overlook potential clients who need your help but don't fit the usual criteria.</p>
              </li>
              <li>
                <FaTimes className="icon" />
                <p>Wasted Resources: Time and effort are spent on leads that aren't interested, leading to you losing money and time.</p>
              </li>
              <li>
                <FaTimes className="icon" />
                <p>Advertising Cost Spiral: When generic cold emails fail to convert, companies panic-pivot to paid ads, and spend way too much cash on pricey PPC campaigns.</p>
              </li>
              <li>
                <FaTimes className="icon" />
                <p>Opportunity Cost Creep: While your team wastes billable hours chasing unqualified prospects, your competitors are closing deals.</p>
              </li>
            </ul>
          </div>

          <div className="comparison-column positive">
            <h3>The SharpOutbound Way</h3>
            <p className="approach">Let's target companies struggling with cash flow management or looking to automate their financial reporting processes.</p>
            <ul>
              <li>
                <FaCheck className="icon" />
                <p>Personalized Messaging: We speak directly to the issues your prospects face, making them more relevant and timely.</p>
              </li>
              <li>
                <FaCheck className="icon" />
                <p>Better Conversion Rates: Prospects are more likely to buy from you when they see you providing solutions to their problems (simple math).</p>
              </li>
              <li>
                <FaCheck className="icon" />
                <p>No time wasted on prospection: We target leads that really need your services, making your outreach more effective.</p>
              </li>
              <li>
                <FaCheck className="icon" />
                <p>Build Trust: Showing you understand their challenges and can solve their problem helps build trust and get them on retainers.</p>
              </li>
              <li>
                <FaCheck className="icon" />
                <p>Faster Revenue Generation: By targeting only the most relevant prospects, the SharpOutbound Method shortens the sales cycle.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 