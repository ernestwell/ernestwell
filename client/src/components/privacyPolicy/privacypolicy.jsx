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
              Welcome to ErnestWell Business Solution, in collaboration with UniBritInd Global. 
              By accessing our website and services, you agree to comply with these Terms & Conditions.
            </p>
          </div>

          <div className="legal-card">
            <h3>2. Services Provided</h3>
            <p>
              ErnestWell specializes in business development, strategic collaborations, operational optimization, 
              and tailored business solutions. Services are provided based on agreed terms and conditions.
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
