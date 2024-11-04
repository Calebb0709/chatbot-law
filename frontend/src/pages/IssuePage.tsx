// import emailjs from "@emailjs/browser";
import React, { useState } from "react";

const IssuePage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSent, setIsSent] = useState<boolean>(false);

//   const templateParams = {
//     from_name: email,
//     message: message,
//   };

//   const sendMail = () => {
//     emailjs
//       .send(
//         "YOUR_SERVICE_ID", // Replace with your actual service ID
//         "template_azmnoyw",
//         templateParams,
//         "YOUR_USER_ID" // Replace with your actual user ID
//       )
//       .then(
//         (response) => {
//           console.log("SUCCESS!", response.status, response.text);
//           setIsSent(true); // Show success modal
//         },
//         (error) => {
//           console.log("FAILED...", error);
//         }
//       );
//   };

  return (
    <div className="flex justify-center h-[85vh] bg-gradient-to-br from-blue-100 to-purple-100 px-4 py-8">
      {/* Modal for Success Message */}
      {isSent && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Gửi thành công 🥳</h3>
            <p className="py-4">
              Cảm ơn bạn đã gửi góp ý / báo lỗi 🤗. Chúng tôi sẽ xem xét những ý
              kiến của người dùng để ngày càng hoàn thiện sản phẩm hơn nhé!
            </p>
            <div className="modal-action">
              <button
                onClick={() => setIsSent(false)}
                className="btn btn-success"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Issue Form */}
      <div className="md:w-[50%] w-full">
        <h1 className="text-3xl text-center font-bold p-5 text-transparent bg-gradient-to-r from-purple-700 via-pink-600 to-red-400 bg-clip-text">
          Báo lỗi hoặc góp ý
        </h1>
        <p className="text-justify font-semibold text-sm px-4">
          Sự đóng góp ý kiến từ các bạn sẽ là sự hỗ trợ đắc lực giúp chúng tôi
          ngày càng hoàn thiện sản phẩm hơn.
        </p>

        <textarea
          placeholder="Nhập phản hồi của bạn tại đây!"
          className="mt-5 mb-3 h-40 textarea textarea-bordered w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <input
          type="email"
          placeholder="Email của bạn"
          className="input w-full max-w-xs mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
        //   onClick={sendMail}
          disabled={!email || !message}
          className="w-full btn btn-primary bg-gradient-to-tl from-transparent via-blue-600 to-indigo-500"
        >
          Gửi ý kiến
        </button>
      </div>
    </div>
  );
};

export default IssuePage;
