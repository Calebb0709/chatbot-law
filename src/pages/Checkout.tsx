import React, { useState } from "react";
import { Form, Input, Button, Select, Card } from "antd";

const { Option } = Select;

const Checkout: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<"basic" | "premium" | "elite">("basic");
  const plans = {
    basic: 19,
    premium: 29,
    elite: 49,
  };

  const handlePlanChange = (value: "basic" | "premium" | "elite") => {
    setSelectedPlan(value);
  };

  const onFinish = (values: any) => {
    console.log("Payment Details:", values);
    alert("Payment successful!");
  };

  return (
    <div className="bg-white py-16 px-4 lg:px-40">
      <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-gradient-to-r from-rose-400 to-rose-950 bg-clip-text">
        Checkout
      </h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Payment Form */}
        <Card className="w-full lg:w-2/3 p-8 shadow-md rounded-lg">
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Full Name" name="name" rules={[{ required: true, message: "Please enter your name" }]}>
              <Input placeholder="John Doe" />
            </Form.Item>

            <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please enter your email" }, { type: "email", message: "Please enter a valid email" }]}>
              <Input placeholder="email@example.com" />
            </Form.Item>

            <Form.Item label="Credit Card Number" name="cardNumber" rules={[{ required: true, message: "Please enter your credit card number" }]}>
              <Input placeholder="1234 5678 9012 3456" maxLength={16} />
            </Form.Item>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item label="Expiration Date" name="expiryDate" rules={[{ required: true, message: "Please enter the expiration date" }]}>
                <Input placeholder="MM/YY" maxLength={5} />
              </Form.Item>

              <Form.Item label="CVV" name="cvv" rules={[{ required: true, message: "Please enter your CVV" }]}>
                <Input placeholder="123" maxLength={3} />
              </Form.Item>
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full bg-rose-600 border-rose-600">
                Complete Payment
              </Button>
            </Form.Item>
          </Form>
        </Card>

        {/* Order Summary */}
        <Card className="w-full lg:w-1/3 p-8 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h3>
          <Form.Item label="Select Plan">
            <Select defaultValue={selectedPlan} onChange={handlePlanChange}>
              {Object.keys(plans).map((plan) => (
                <Option key={plan} value={plan}>
                  {plan.charAt(0).toUpperCase() + plan.slice(1)} - ${plans[plan as keyof typeof plans]} / month
                </Option>
              ))}
            </Select>
          </Form.Item>
          <div className="flex justify-between text-gray-700 mt-4">
            <span>Plan:</span>
            <span>{selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Price:</span>
            <span>${plans[selectedPlan]}</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-semibold text-gray-800">
            <span>Total:</span>
            <span>${plans[selectedPlan]}</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
