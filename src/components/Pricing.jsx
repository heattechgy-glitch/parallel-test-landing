import React from 'react';

const Pricing = () => {
    const plans = [
        {
            name: 'Free',
            price: '$0',
            features: [
                'Basic feature set',
                'Community support',
                '1 project',
            ]
        },
        {
            name: 'Pro',
            price: '$29',
            features: [
                'Advanced feature set',
                'Priority support',
                '10 projects',
            ]
        },
        {
            name: 'Power',
            price: '$99',
            features: [
                'Full feature set',
                '24/7 support',
                'Unlimited projects',
            ]
        }
    ];

    return (
        <div className="pricing">
            <h2>Our Pricing Plans</h2>
            <div className="pricing-plans">
                {plans.map((plan, index) => (
                    <div key={index} className="pricing-plan">
                        <h3>{plan.name}</h3>
                        <p className="pricing-price">{plan.price}</p>
                        <ul className="pricing-features">
                            {plan.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
