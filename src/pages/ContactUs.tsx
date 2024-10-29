import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";

const ContactUs: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: { name: string; email: string; subject: string; message: string }) => {
    setLoading(true);
    // Simulate sending data to a backend
    setTimeout(() => {
      setLoading(false);
      message.success("Your message has been sent successfully!");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center bg-white p-8 lg:px-40 py-12">
      <h2 className="text-3xl font-bold text-rose-600 bg-clip-text mb-8">
        Contact Us
      </h2>

      <Form
        name="contact-form"
        layout="vertical"
        onFinish={onFinish}
        className="w-full max-w-lg bg-white p-6 border border-gray-200 rounded-lg shadow-md"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Your Name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email address" },
          ]}
        >
          <Input placeholder="Your Email" />
        </Form.Item>

        <Form.Item
          label="Subject"
          name="subject"
          rules={[{ required: true, message: "Please enter a subject" }]}
        >
          <Input placeholder="Subject" />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please enter your message" }]}
        >
          <Input.TextArea rows={4} placeholder="Your Message" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full bg-rose-600 border-rose-600 hover:bg-rose-700"
          >
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactUs;
