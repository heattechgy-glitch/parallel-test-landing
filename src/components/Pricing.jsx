import React from 'react';

const Pricing = () => {
  const tiers = [
    {
      name: 'Free',
      price: 0,
      description: 'Perfect for getting started',
      features: [
        'Up to 3 projects',
        '100 test runs per month',
        'Basic analytics',
        'Community support',
        'Email notifications'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Pro',
      price: 29,
      description: 'Best for growing teams',
      features: [
        'Unlimited projects',
        '5,000 test runs per month',
        'Advanced analytics',
        'Priority support',
        'Slack integration',
        'Custom test configurations',
        'Team collaboration'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Power',
      price: 99,
      description: 'For enterprise scale',
      features: [
        'Everything in Pro',
        'Unlimited test runs',
        'Dedicated infrastructure',
        '24/7 phone support',
        'SSO & SAML',
        'Custom integrations',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Simple, Transparent Pricing</h2>
          <p className="pricing-subtitle">
            Choose the plan that fits your needs. Scale as you grow.
          </p>
        </div>

        <div className="pricing-grid">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card ${tier.highlighted ? 'pricing-card-highlighted' : ''}`}
            >
              {tier.highlighted && (
                <div className="pricing-badge">Most Popular</div>
              )}
              
              <div className="pricing-card-header">
                <h3 className="tier-name">{tier.name}</h3>
                <div className="tier-price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">{tier.price}</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="tier-description">{tier.description}</p>
              </div>

              <ul className="tier-features">
                {tier.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <svg
                      className="feature-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`pricing-cta ${tier.highlighted ? 'pricing-cta-primary' : 'pricing-cta-secondary'}`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p>All plans include a 14-day free trial. No credit card required.</p>
        </div>
      </div>

      <style jsx>{`
        .pricing-section {
          padding: 80px 20px;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }

        .pricing-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .pricing-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 16px;
        }

        .pricing-subtitle {
          font-size: 1.125rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          align-items: stretch;
        }

        .pricing-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          position: relative;
          border: 2px solid transparent;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .pricing-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .pricing-card-highlighted {
          border-color: #6366f1;
          transform: scale(1.02);
        }

        .pricing-card-highlighted:hover {
          transform: scale(1.02) translateY(-4px);
        }

        .pricing-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          padding: 6px 20px;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .pricing-card-header {
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 24px;
        }

        .tier-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 16px;
        }

        .tier-price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 2px;
          margin-bottom: 12px;
        }

        .price-currency {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a202c;
        }

        .price-amount {
          font-size: 3.5rem;
          font-weight: 800;
          color: #1a202c;
          line-height: 1;
        }

        .price-period {
          font-size: 1rem;
          color: #64748b;
          margin-left: 4px;
        }

        .tier-description {
          color: #64748b;
          font-size: 0.95rem;
        }

        .tier-features {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
          flex-grow: 1;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          color: #475569;
          font-size: 0.95rem;
        }

        .feature-icon {
          width: 20px;
          height: 20px;
          color: #10b981;
          flex-shrink: 0;
        }

        .pricing-cta {
          width: 100%;
          padding: 14px 24px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }

        .pricing-cta-primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
        }

        .pricing-cta-primary:hover {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          transform: translateY(-2px);
        }

        .pricing-cta-secondary {
          background: #f1f5f9;
          color: #1a202c;
          border: 2px solid #e2e8f0;
        }

        .pricing-cta-secondary:hover {
          background: #e2e8f0;
          border-color: #cbd5e1;
        }

        .pricing-footer {
          text-align: center;
          margin-top: 48px;
          color: #64748b;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .pricing-section {
            padding: 60px 16px;
          }

          .pricing-title {
            font-size: 2rem;
          }

          .pricing-card-highlighted {
            transform: none;
          }

          .pricing-card-highlighted:hover {
            transform: translateY(-4px);
          }

          .price-amount {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;