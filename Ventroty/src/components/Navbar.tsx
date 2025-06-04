import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-[#1c3652] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/landing" className="text-2xl font-bold text-white tracking-wide">
          Ventrory
        </Link>

        {/* Navigasi */}
        <div className="space-x-4 flex items-center">
          <Link
            to="/landing"
            className="text-white px-3 py-2 rounded transition duration-300 hover:bg-white hover:text-[#1c3652]"
          >
            Home
          </Link>
          <Link
            to="/edit-item"
            className="text-white px-3 py-2 rounded transition duration-300 hover:bg-white hover:text-[#1c3652]"
          >
            Tambah Barang
          </Link>
          <Link
            to="/history"
            className="text-white px-3 py-2 rounded transition duration-300 hover:bg-white hover:text-[#1c3652]"
          >
            Riwayat
          </Link>

          {/* Tombol Logout */}
          <Link
            to="/"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};
