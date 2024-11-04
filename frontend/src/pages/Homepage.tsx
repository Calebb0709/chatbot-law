import image_robot from "../assets/image_robot.webp";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-8 lg:px-20 py-10 bg-white">
      {/* Left Section: Text Content */}
      <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left bg-[url('src/assets/shape-50.png')] pl-20 pr-10" >
        <h1 className="text-xl lg:text-7xl font-bold text-gray-900">
          AI-Powered <span className="text-transparent bg-gradient-to-r from-rose-400 to-rose-950 bg-clip-text">
          Legal Chatbot
        </span> at Your Fingertips
        </h1>
        <p className="text-lg text-gray-700 mt-4 mb-8">
          Navigate complex legal landscapes with ease using our cutting-edge AI Lawyer chatbot.
        </p>
        <Link to="/chat">
          <button className="bg-rose-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-rose-600">
            Get Started
          </button>
        </Link>
      </div>

      {/* Right Section: Image */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end ">
        <img
          className="w-full max-w-md rounded-lg shadow-lg"
          src={image_robot}
          alt="Robot offering legal Chatbot"
        />
      </div>
    </div>
  );
}

export default HomePage;
