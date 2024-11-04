import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white p-8 lg:px-40 py-12">
      <h2 className="text-3xl font-bold text-rose-600 bg-clip-text mb-8">
        Privacy Policy
      </h2>

      <p className="text-gray-700 mb-4">
        We value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our website and services.
      </p>

      <h3 className="text-2xl font-semibold text-rose-500 mt-6 mb-4">
        1. Data Collection
      </h3>
      <p className="text-gray-700 mb-4">
        We only collect personal information that you voluntarily provide to us, such as when you fill out forms, sign up for an account, or contact us directly.
      </p>

      <h3 className="text-2xl font-semibold text-rose-500 mt-6 mb-4">
        2. Use of Your Data
      </h3>
      <p className="text-gray-700 mb-4">
        We are committed to not using your personal data for any purposes other than those stated in this policy. Your data will only be used to improve our services and communicate with you when necessary. We do not sell, rent, or share your personal data with third parties.
      </p>

      <h3 className="text-2xl font-semibold text-rose-500 mt-6 mb-4">
        3. Data Security
      </h3>
      <p className="text-gray-700 mb-4">
        We implement reasonable security measures to protect your personal data from unauthorized access, use, or disclosure. However, please be aware that no method of data transmission or storage is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h3 className="text-2xl font-semibold text-rose-500 mt-6 mb-4">
        4. Your Rights
      </h3>
      <p className="text-gray-700 mb-4">
        You have the right to access, update, or delete your personal data at any time. If you wish to exercise these rights, please contact us through our website or email support team.
      </p>

      <h3 className="text-2xl font-semibold text-rose-500 mt-6 mb-4">
        5. Changes to this Policy
      </h3>
      <p className="text-gray-700 mb-4">
        We may update our Privacy Policy periodically. Any changes will be posted on this page, and we encourage you to review this page regularly to stay informed about how we protect your data.
      </p>

      <p className="text-gray-700 mt-6">
        By using our services, you agree to the terms outlined in this Privacy Policy. If you have any questions, please feel free to contact us for further clarification.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
