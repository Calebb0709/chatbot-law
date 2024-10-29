import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Simulate a successful login response
    try {
      await new Promise((resolve) =>
        setTimeout(() => resolve({ token: "mock-token" }), 1000)
      );

      // Simulate storing the token
      localStorage.setItem("accessToken", "mock-token");
      console.log("Login successful: mock-token");

      // Redirect to dashboard
      navigate("/home");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Failed to login. This is a mock error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 py-8"
      style={{
        background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 30%, #fad0c4 70%, #fbc2eb 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Login</h2>

        {/* Error Message */}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-rose-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-rose-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/auth/signup" className="text-rose-500 hover:underline">
              Sign Up
            </Link>
          </p>
          <p className="text-gray-600 mt-2">
            <Link to="/auth/forgot-password" className="text-rose-500 hover:underline">
              Forgot Password?
            </Link>
          </p>
          <p className="text-gray-600 mt-2">
            <Link to="/" className="text-rose-500 hover:underline">
              Return
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
