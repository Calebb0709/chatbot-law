import React, { useState } from "react";
import { Input, Button, Layout, Modal, Radio, Typography, List, Avatar, Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import robot_img from "../assets/robot_image.png";

const { Sider, Content } = Layout;
const { Text, Title } = Typography;

const ChatBotContent: React.FC = () => {
  const [promptInput, setPromptInput] = useState<string>("");
  const [sourceData, setSourceData] = useState<string>("nttu");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const commonQuestions = [
    "Điều kiện nhận học bổng?",
    "Bao nhiêu điểm thì học lực Xuất sắc?",
    "Điều kiện thực tập tốt nghiệp là gì?",
    "Lệ phí cấp bảng điểm là bao nhiêu?",
  ];

  const chatHistory = ["Câu hỏi mẫu 1", "Câu hỏi mẫu 2", "Câu hỏi mẫu 3"];

  return (
    <Layout className="h-[85vh] bg-gradient-to-r from-blue-50 to-purple-100">
      <Sider width={200} className="bg-white shadow-lg p-4">
        <Title level={5}>Lịch sử trò chuyện</Title>
        <List
          size="small"
          dataSource={chatHistory}
          renderItem={(item) => (
            <List.Item>
              <FontAwesomeIcon icon={faMessage} /> {item}
            </List.Item>
          )}
        />
      </Sider>

      <Layout>
        <div className="flex justify-between p-4 bg-gray-50">
          <Title level={5}>Nguồn tham khảo</Title>
          <Radio.Group
            onChange={(e) => setSourceData(e.target.value)}
            value={sourceData}
            className="space-x-4"
          >
            <Radio value="wiki">Wikipedia</Radio>
            <Radio value="nttu">Đại học Nguyễn Tất Thành</Radio>
          </Radio.Group>
        </div>

        <Content className="p-4 overflow-y-auto h-full bg-white">
          <div className="chat chat-start mb-3">
            <Avatar src={robot_img} className="mr-2" />
            <div className="chat-bubble p-3 rounded-lg border bg-gray-100">
              <Text>Tin nhắn từ bot hiển thị tại đây</Text>
              <Divider />
              <Text type="secondary">Tham khảo: </Text>
              <Button type="link" onClick={() => setModalVisible(true)}>
                Nguồn tham khảo
              </Button>
            </div>
          </div>

          <div className="chat chat-end mb-3">
            <div className="chat-bubble p-3 rounded-lg border bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              <Text>Tin nhắn từ người dùng hiển thị tại đây</Text>
            </div>
          </div>

          <div className="fixed bottom-4 w-full flex justify-center">
            <Input
              placeholder="Nhập câu hỏi tại đây..."
              className="mr-2 shadow-lg"
              onChange={(e) => setPromptInput(e.target.value)}
              value={promptInput}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<FontAwesomeIcon icon={faMessage} />}
            />
          </div>
        </Content>
      </Layout>

      <Modal
        title="Nguồn tham khảo"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <Text>Nội dung nguồn tham khảo hiển thị ở đây...</Text>
        <br />
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          https://example.com
        </a>
      </Modal>
    </Layout>
  );
};

const Chatpage: React.FC = () => {
  return (
    <Layout className="min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-md p-4">
        <Title level={3} className="text-center">Chatbot Hỗ Trợ Sinh Viên</Title>
      </div>

      {/* Main Content with ChatBot */}
      <Content className="p-4 bg-gray-100">
        <ChatBotContent />
      </Content>

      {/* Footer */}
      <div className="bg-white shadow-md p-4 text-center">
        <Text type="secondary">© 2023 Đại học Nguyễn Tất Thành - Chatbot hỗ trợ sinh viên</Text>
      </div>
    </Layout>
  );
};

export default Chatpage;
