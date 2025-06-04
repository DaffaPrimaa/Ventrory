import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const EditItemPage = () => {
  const { id } = useParams<{ id: string }>(); // Dapatkan ID jika dalam mode edit
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number | "">("");
  const [price, setPrice] = useState<number | "">("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    // Simulasi pengambilan data jika mode edit
    if (id) {
      console.log(`Mengambil data untuk item ID: ${id}`);
      // Di sini Anda akan mengambil data dari API backend
      // Untuk demo, kita akan mengisi dengan data dummy
      setName("Contoh Barang");
      setQuantity(5);
      setPrice(100000);
    } else {
      setName("");
      setQuantity("");
      setPrice("");
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      console.log("Menyimpan perubahan untuk item:", {
        id,
        name,
        quantity,
        price,
      });
      setSuccessMessage("Barang berhasil diperbarui!");
    } else {
      console.log("Menambahkan barang baru:", { name, quantity, price });
      setSuccessMessage("Barang berhasil ditambahkan!");
      // Reset form setelah tambah barang baru
      setName("");
      setQuantity("");
      setPrice("");
    }
    setTimeout(() => {
      setSuccessMessage("");
      navigate("/landing"); // Kembali ke landing page setelah submit
    }, 1500);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md mt-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        {id ? "Edit Barang" : "Tambah Barang Baru"}
      </h2>
      {successMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nama Barang
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="quantity"
          >
            Jumlah
          </label>
          <input
            type="number"
            id="quantity"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="0"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Harga (Rp)
          </label>
          <input
            type="number"
            id="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            min="0"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {id ? "Simpan Perubahan" : "Tambahkan Barang"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/landing")}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};
