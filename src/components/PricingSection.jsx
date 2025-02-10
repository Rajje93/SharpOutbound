const PricingSection = () => {
  return (
    <div className="pricing-cards">
      {/* Standard Plan */}
      <div className="pricing-card">
        <h3>Standard</h3>
        {/* ... other plan details */}
        <a 
          href="https://buy.stripe.com/aEU00O2YYdgYc80144"
          className="buy-button"
          target="_self"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </div>

      {/* Premium Plan */}
      <div className="pricing-card">
        <h3>Premium</h3>
        {/* ... other plan details */}
        <a 
          href="https://buy.stripe.com/dR68xkczygta5JC9AB"
          className="buy-button"
          target="_self"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}; 