import React, { useState } from "react";
import {
  ExclamationCircleOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
  WechatOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu, Drawer, Avatar, Dropdown } from "antd";
import { Link, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const NavBar: React.FC = () => {
  const [current, setCurrent] = useState<string>("home");
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [user, setUser] = useState({
    name: "John Doe",
    avatar: "../assets/avatar.jpg",
  });
  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      label: (
        <Button
          type="link"
          icon={<HomeOutlined className="!text-rose-600" />}
          className={`${
            current === "home" ? "uppercase border-b-2 border-rose-600" : ""
          } text-black hover:font-bold`}
        >
          Trang chủ
        </Button>
      ),
      key: "home",
    },
    {
      label: (
        <Button
          type="link"
          icon={<WechatOutlined className="!text-rose-600" />}
          className={`${
            current === "chat" ? "uppercase border-b-2 border-rose-600" : ""
          } text-black hover:font-bold`}
        >
          Trò chuyện
        </Button>
      ),
      key: "chat",
    },
    {
      label: (
        <Button
          type="link"
          icon={<QuestionCircleOutlined className="!text-rose-600" />}
          className={`${
            current === "faqs" ? "uppercase border-b-2 border-rose-600" : ""
          } text-black hover:font-bold`}
        >
          FAQs
        </Button>
      ),
      key: "faqs",
    },
    {
      label: (
        <Button
          type="link"
          icon={<ExclamationCircleOutlined className="!text-rose-600" />}
          className={`${
            current === "issue" ? "uppercase border-b-2 border-rose-600" : ""
          } text-black hover:font-bold`}
        >
          Báo lỗi/Góp ý
        </Button>
      ),
      key: "issue",
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate(`/${e.key}`);
    setDrawerVisible(false);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

  return (
    <header className="bg-white border-b border-gray-200 lg:px-20">
      <div className="flex justify-between items-center p-2">
        <Link
          to="/"
          className="text-transparent bg-gradient-to-r from-rose-400 to-rose-950 bg-clip-text font-bold text-2xl hover:scale-105 focus:outline-none hover:text-transparent"
        >
          Legal Chatbot
        </Link>

        <div className="hidden lg:flex justify-center">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            className="p-2 bg-white border-0"
          />
        </div>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item onClick={() => navigate("/profile")}>
                    Profile
                  </Menu.Item>
                  <Menu.Item
                    onClick={() => {
                      setIsLoggedIn(false);
                    }}
                  >
                    Logout
                  </Menu.Item>
                </Menu>
              }
            >
              <div className="flex items-center space-x-2 cursor-pointer">
                <Avatar src={user.avatar} />
                <span>{user.name}</span>
              </div>
            </Dropdown>
          ) : (
            <Button
              type="primary"
              className="bg-rose-600 border-rose-600"
              onClick={() => navigate("/auth/login")}
            >
              Đăng nhập
            </Button>
          )}

          <div className="lg:hidden">
            <Button icon={<MenuOutlined />} onClick={showDrawer} />
          </div>
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        visible={drawerVisible}
        className="lg:hidden"
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="vertical"
          items={items}
        />
      </Drawer>
    </header>
  );
};

export default NavBar;
