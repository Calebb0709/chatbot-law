import React from "react";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
  const plans = [
    {
      title: "Basic",
      price: "$19",
      features: [
        "Single user",
        "Unlimited access to Legal Answers",
        "Unlimited access to Legal Database",
        "Unlimited Legal Document drafting",
      ],
    },
    {
      title: "Premium",
      price: "$29",
      features: [
        "Full access to Legal Answers",
        "Full access to Legal Database",
        "Unlimited Legal Document drafting",
        "Voice Recording feature",
        "Email and phone support",
      ],
    },
    {
      title: "Elite",
      price: "$49",
      features: [
        "Up to 5 users",
        "Includes all Premium Plan features",
        "Exclusive access to Legal Mock Trials",
        "Enhanced Technical Support",
      ],
    },
  ];

  return (
    <div className="bg-white py-16 vh-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-rose-600">AI Pricing Plan</h2>
        <p className="text-gray-500">Get the best services for Best AI Legal Software</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-8 px-4 lg:px-20">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className="shadow-md rounded-lg hover:shadow-xl transition-all max-w-xs lg:max-w-md text-center border border-rose-500"
            bordered={false}
            style={{ backgroundColor: "#fff" }}
          >
            <h3 className="text-lg font-semibold text-gray-500">{plan.title}</h3>
            <h1 className="text-4xl font-bold text-black mb-2">{plan.price}</h1>
            <p className="text-gray-500 mb-6">Per Month</p>
            <Link to="/checkout">
              <Button type="default" className="border-rose-600 text-rose-600 mb-6">
                Subscribe
              </Button>
            </Link>
            <ul className="text-gray-700 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex justify-center items-center">
                  <span className="text-rose-600 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
