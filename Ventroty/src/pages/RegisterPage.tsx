import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const RegisterPage = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt:', { nama, email, password });
    alert('Registrasi berhasil (simulasi)! Silakan login.');
    navigate('/');
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
        {/* Kiri */}
        <div className="w-1/2" style={{ backgroundColor: '#1c3652' }}>
          <div className="flex flex-col justify-center items-center h-full px-10 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selamat Datang Kembali!</h2>
            <p className="mb-8 text-lg">
              Untuk tetap terhubung dengan kami, silakan masuk dengan akun anda
            </p>
            <Link
              to="/"
              className="border-2 border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-[#1c3652] transition duration-300"
            >
              SIGN IN
            </Link>
          </div>
        </div>

        {/* Kanan */}
        <div className="w-1/2 flex justify-center items-center px-10">
          <div className="w-full max-w-sm">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 text-[#1c3652]">
              Buat Akun
            </h2>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-full px-4 py-3 bg-gray-100 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-[#1c3652]"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                />
              </div>
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
              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-gray-100 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-[#1c3652]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1c3652] hover:bg-[#2a4c70] text-white font-semibold py-3 rounded-full transition duration-300"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
