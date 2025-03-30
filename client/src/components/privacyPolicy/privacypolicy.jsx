import "./privacypolicy.css";

const LegalPage = () => {
  return (
    <div className="legal-container">
      <div className="legal-header">
        <h1>LEGAL POLICY</h1>
        <p>Review our Terms & Conditions, Privacy Policy, and Cancellation & Refund Policy.</p>
      </div>

      <div className="legal-content">
        {/* Terms & Conditions */}
        <section className="legal-section">
          <h2>Terms & Conditions</h2>
          
          <div className="legal-card">
            <h3>1. Introduction</h3>
            <p>
              Welcome to Ernestwell Business Solution. By accessing our website and services, you agree to comply with these Terms & Conditions. 
            </p>
          </div>

          <div className="legal-card">
            <h3>2. Services Provided</h3>
            <p>
              Ernestwell specializes in business development, strategic collaborations, operational optimization, and tailored business solutions. Services are provided based on agreed terms and conditions. 
            </p>
          </div>

          <div className="legal-card">
            <h3>3. User Responsibilities</h3>
            <ul>
              <li>Users must provide accurate and up-to-date information when using our services.</li>
              <li>Unauthorized reproduction of our intellectual property is strictly prohibited.</li>
              <li>We reserve the right to modify, suspend, or discontinue services at any time.</li>
            </ul>
          </div>
          <div className="legal-card">
            <h3>4. Payment Terms </h3>
            <ul>
              <li>Payments must be made as per the agreed contract terms. </li>
              <li>Late payments may result in service suspension or additional fees. </li>
              <li>Accepted payment methods will be specified in the invoice</li>
            </ul>
          </div>
          <div className="legal-card">
            <h3>5. Intellectual Property Rights </h3>
            <ul>
              <li>All work created by Ernestwell remains the company’s intellectual property until full payment is made. </li>
              <li>Clients are granted usage rights only after the completion of payment and agreement. </li>
              <li>Unauthorized use, resale, or reproduction of our work is strictly prohibited. </li>
            </ul>
          </div>
          <div className="legal-card">
            <h3>6. Service Modifications & Delays </h3>
            <ul>
              <li>Project timelines are estimated and may be subject to change due to unforeseen circumstances. </li>
              <li>Ernestwell will notify clients of any delays and work towards timely completion. </li>
              <li>Clients requesting modifications beyond the agreed scope may be subject to additional charges. </li>
            </ul>
          </div>
          <div className="legal-card">
            <h3>7. Limitation of Liability </h3>
            <ul>
              <li>Ernestwell is not responsible for any indirect, incidental, or consequential damages arising from service use. </li>
              <li>We do not guarantee uninterrupted or error-free service due to external factors beyond our control. </li>
            </ul>
          </div>
          <div className="legal-card">
            <h3>8. Governing Law</h3>
            <p>
              These Terms & Conditions shall be governed and interpreted according to the laws of the applicable jurisdiction where Ernestwell operates. 
            </p>
          </div>
        </section>

        {/* Privacy Policy */}
        <section className="legal-section">
          <h2>Privacy Policy</h2>

          <div className="legal-card">
            <h3>1. Information We Collect</h3>
            <ul>
              <li><strong>Personal Information:</strong> Name, email, phone number.</li>
              <li><strong>Business Details:</strong> Company name, industry type, and service preferences.</li>
              <li><strong>Technical Data:</strong> Cookies, IP addresses, and website usage analytics.</li>
            </ul>
          </div>

          <div className="legal-card">
            <h3>2. Data Protection</h3>
            <p>We implement strict security measures and do not sell or share personal data unless required by law.</p>
          </div>
        </section>

        {/* Cancellation & Refund Policy */}
        <section className="legal-section">
          <h2>Cancellation & Refund Policy</h2>

          <div className="legal-card">
            <h3>1. Cancellation Policy</h3>
            <ul>
              <li><strong>One-time services:</strong> Can be canceled within 7 days of signing the contract.</li>
              <li><strong>Subscriptions:</strong> Cancellation requests must be made before the next billing cycle.</li>
            </ul>
          </div>

          <div className="legal-card">
            <h3>2. Refund Policy</h3>
            <ul>
              <li><strong>Full Refund:</strong> If services have not commenced.</li>
              <li><strong>Partial Refund:</strong> If the project is in progress but not beyond 50% completion.</li>
              <li><strong>No Refund:</strong> If major project milestones have been delivered.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LegalPage;
