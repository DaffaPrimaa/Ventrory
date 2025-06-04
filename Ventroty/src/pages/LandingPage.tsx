import  { useState } from "react";
import { Link } from "react-router-dom";

interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export const LandingPage = () => {
  // Data dummy untuk demo awal
  const [items, setItems] = useState<InventoryItem[]>([
    { id: "1", name: "Laptop ASUS", quantity: 10, price: 8500000 },
    { id: "2", name: "Mouse Logitech", quantity: 50, price: 150000 },
    { id: "3", name: "Keyboard Mechanical", quantity: 20, price: 700000 },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id: string) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus barang ini?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-8 rounded-lg shadow-md mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Daftar Barang Inventaris
      </h2>

      <div className="mb-6 flex justify-between items-center">
        <input
          type="text"
          placeholder="Cari barang..."
          className="p-2 border border-gray-300 rounded-md w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link
          to="/edit-item"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Tambah Barang Baru
        </Link>
      </div>

      {filteredItems.length === 0 ? (
        <p className="text-center text-gray-600">
          Tidak ada barang yang ditemukan.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Nama Barang</th>
                <th className="py-3 px-6 text-left">Jumlah</th>
                <th className="py-3 px-6 text-left">Harga</th>
                <th className="py-3 px-6 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {filteredItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="py-3 px-6 text-left">{item.quantity}</td>
                  <td className="py-3 px-6 text-left">
                    Rp{item.price.toLocaleString("id-ID")}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center space-x-2">
                      <Link
                        to={`/edit-item/${item.id}`}
                        className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-3 rounded-md text-xs"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded-md text-xs"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
