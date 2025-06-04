import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/landing" className="text-2xl font-bold">
          Ventroty
        </Link>
        <div className="space-x-4">
          <Link to="/landing" className="hover:text-blue-200">
            Home
          </Link>
          <Link to="/edit-item" className="hover:text-blue-200">
            Tambah Barang
          </Link>
          <Link to="/history" className="hover:text-blue-200">
            Riwayat
          </Link>
          <Link
            to="/"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};
