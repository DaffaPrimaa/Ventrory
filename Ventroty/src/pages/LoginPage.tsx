import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    navigate("/landing");
  };

  return (
    <motion.div
      className="flex items-center justify-center h-screen w-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-full max-w-5xl bg-white shadow-lg rounded-lg flex overflow-hidden h-[80%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Kiri - Login */}
        <div className="w-1/2 flex flex-col justify-center items-center px-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Sign in</h2>
          <form onSubmit={handleSubmit} className="w-full mt-6">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-100 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-[#1c3652]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-gray-100 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-[#1c3652]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end mb-4">
              <Link to="#" className="text-sm text-gray-500 hover:underline">
                Lupa kata sandi anda?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1c3652] text-white font-semibold py-3 rounded-full hover:bg-opacity-90 transition duration-300"
            >
              SIGN IN
            </button>
          </form>
        </div>

        {/* Kanan - Sign up invite */}
        <div className="w-1/2 bg-[#1c3652] text-white flex flex-col justify-center items-center px-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Halo, Teman!</h2>
          <p className="mb-8 text-lg">
            Daftarkan diri anda dan mulai gunakan layanan kami segera
          </p>
          <Link
            to="/register"
            className="border-2 border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-[#1c3652] transition duration-300"
          >
            SIGN UP
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};
