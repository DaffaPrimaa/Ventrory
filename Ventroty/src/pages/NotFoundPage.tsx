import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600 mb-4">Halaman Tidak Ditemukan</p>
      <p className="text-lg text-gray-500 mb-8">
        Maaf, halaman yang Anda cari tidak ada.
      </p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Kembali ke Halaman Utama
      </Link>
    </div>
  );
};
