import React from "react";

const dataFAQs = [
  [
    "Chatbot hoạt động như thế nào?",
    "Chatbot hoạt động bằng cách từ câu hỏi của người dùng, sử dụng kỹ thuật tìm văn bản liên quan đến câu hỏi trong bộ dữ liệu đã được vector hóa (text similarity) và lưu trữ thông qua vector database. Giúp lấy ra những đoạn văn bản có liên quan sau đó dùng mô hình ngôn ngữ lớn (LLM) Vietcuna để sinh câu trả lời.",
  ],
  [
    "Cách sử dụng chatbot để tra cứu thông tin",
    "Để sử dụng chatbot một cách hiệu quả nhất bạn nên đặt câu hỏi một cách rõ ràng đầy đủ để mô hình có thể đưa ra câu trả lời chính xác. Tuy nhiên, ở một số trường hợp câu trả lời có thể không chính xác nên bạn phải kiểm chứng thông tin hoặc liên hệ hỗ trợ nếu cần thiết nhé.",
  ],
  [
    "Thông tin từ chatbot có đáng tin cậy không?",
    "Vì là một mô hình xác xuất nên thông tin chatbot đưa ra có thể không chính xác ở một số trường hợp, bạn nên kiểm chứng thông tin hoặc liên hệ hỗ trợ nếu cần thiết nhé",
  ],
  [
    "Tôi có thể liên hệ hỗ trợ như thế nào?",
    "Vào phần Góp ý/báo lỗi hoặc phòng công tác sinh viên của trường.",
  ],
];

const FAQPage: React.FC = () => {
  return (
    <div className="flex justify-center min-h-[100vh] h-auto bg-gradient-to-br from-blue-100 to-purple-100 px-4 py-8">
      <div className="md:w-[50%] w-full">
        <h1 className="text-3xl text-center font-bold p-5 text-transparent bg-gradient-to-r from-purple-700 via-pink-600 to-red-400 bg-clip-text">
          Những câu hỏi thường gặp (FAQs)
        </h1>
        {dataFAQs.map((item, i) => (
          <div
            key={i}
            className="mt-4 collapse collapse-plus shadow-md rounded-xl bg-white"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-lg font-semibold text-gray-800 peer-checked:text-purple-700">
              {item[0]}
            </div>
            <div className="collapse-content px-4 py-2 text-gray-700">
              <p>{item[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
