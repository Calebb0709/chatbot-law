import React, { useState, useEffect } from "react";
import { Card, Avatar, Button, Form, Input, Tabs } from "antd";
import { EditOutlined } from "@ant-design/icons";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  country: string;
  city: string;
  postalCode: string;
  taxId: string;
  avatar: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch("http://localhost:8080/api/v1/users/profile");
      const data = await response.json();
      setUser(data);
    };
    fetchUserData();
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleFormSubmit = async (values: User) => {
    await fetch("http://localhost:8080/api/v1/users/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    setIsEditing(false);
    setUser(values);
  };

  return (
    <div className="flex max-w-5xl mx-auto p-6 space-x-6 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
        <Tabs tabPosition="left" className="space-y-4">
          <Tabs.TabPane tab="My Profile" key="1" />
          <Tabs.TabPane tab="Security" key="2" />
          <Tabs.TabPane tab="Teams" key="3" />
          <Tabs.TabPane tab="Team Member" key="4" />
          <Tabs.TabPane tab="Notification" key="5" />
          <Tabs.TabPane tab="Billing" key="6" />
          <Tabs.TabPane tab="Data Export" key="7" />
          <Tabs.TabPane tab="Delete Account" key="8" />
        </Tabs>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6">
        {/* User Info */}
        <Card className="rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <Avatar size={80} src={user?.avatar || "https://via.placeholder.com/80"} />
            <div>
              <h2 className="text-xl font-semibold">{`${user?.firstName} ${user?.lastName}`}</h2>
              <p className="text-gray-600">{user?.bio}</p>
              <p className="text-gray-500">{`${user?.city}, ${user?.country}`}</p>
            </div>
            <Button icon={<EditOutlined />} onClick={handleEditToggle} className="ml-auto">
              Edit
            </Button>
          </div>
        </Card>

        {/* Personal Information */}
        <Card title="Personal Information" className="rounded-lg shadow-md" extra={<Button icon={<EditOutlined />} onClick={handleEditToggle}>Edit</Button>}>
          {isEditing ? (
            <Form layout="vertical" initialValues={user} onFinish={handleFormSubmit} className="grid grid-cols-2 gap-4">
              <Form.Item label="First Name" name="firstName" className="col-span-1">
                <Input />
              </Form.Item>
              <Form.Item label="Last Name" name="lastName" className="col-span-1">
                <Input />
              </Form.Item>
              <Form.Item label="Email address" name="email" className="col-span-2">
                <Input disabled />
              </Form.Item>
              <Form.Item label="Phone" name="phone" className="col-span-2">
                <Input />
              </Form.Item>
              <Form.Item label="Bio" name="bio" className="col-span-2">
                <Input.TextArea />
              </Form.Item>
              <Button type="primary" htmlType="submit" className="col-span-2 mt-4">
                Save
              </Button>
            </Form>
          ) : (
            <div className="text-gray-600">
              <p><strong>First Name:</strong> {user?.firstName}</p>
              <p><strong>Last Name:</strong> {user?.lastName}</p>
              <p><strong>Email address:</strong> {user?.email}</p>
              <p><strong>Phone:</strong> {user?.phone}</p>
              <p><strong>Bio:</strong> {user?.bio}</p>
            </div>
          )}
        </Card>

        {/* Address */}
        <Card title="Address" className="rounded-lg shadow-md" extra={<Button icon={<EditOutlined />} onClick={handleEditToggle}>Edit</Button>}>
          {isEditing ? (
            <Form layout="vertical" initialValues={user} onFinish={handleFormSubmit} className="grid grid-cols-2 gap-4">
              <Form.Item label="Country" name="country" className="col-span-1">
                <Input />
              </Form.Item>
              <Form.Item label="City/State" name="city" className="col-span-1">
                <Input />
              </Form.Item>
              <Form.Item label="Postal Code" name="postalCode" className="col-span-1">
                <Input />
              </Form.Item>
              <Form.Item label="TAX ID" name="taxId" className="col-span-1">
                <Input />
              </Form.Item>
              <Button type="primary" htmlType="submit" className="col-span-2 mt-4">
                Save
              </Button>
            </Form>
          ) : (
            <div className="text-gray-600">
              <p><strong>Country:</strong> {user?.country}</p>
              <p><strong>City/State:</strong> {user?.city}</p>
              <p><strong>Postal Code:</strong> {user?.postalCode}</p>
              <p><strong>TAX ID:</strong> {user?.taxId}</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
