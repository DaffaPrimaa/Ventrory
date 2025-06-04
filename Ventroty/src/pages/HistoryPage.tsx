export const HistoryPage = () => {
  // Data dummy untuk demo awal
  const historyRecords = [
    {
      id: "h1",
      timestamp: "2025-06-01 10:00",
      item: "Laptop ASUS",
      action: "Ditambahkan",
      details: "Jumlah: 10, Harga: 8.5jt",
    },
    {
      id: "h2",
      timestamp: "2025-06-02 14:30",
      item: "Mouse Logitech",
      action: "Diperbarui",
      details: "Jumlah dari 40 menjadi 50",
    },
    {
      id: "h3",
      timestamp: "2025-06-03 09:15",
      item: "Keyboard Mechanical",
      action: "Dihapus",
      details: "",
    },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Riwayat Perubahan Inventaris
      </h2>
      {historyRecords.length === 0 ? (
        <p className="text-center text-gray-600">
          Tidak ada riwayat perubahan.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Waktu</th>
                <th className="py-3 px-6 text-left">Barang</th>
                <th className="py-3 px-6 text-left">Aksi</th>
                <th className="py-3 px-6 text-left">Detail</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {historyRecords.map((record) => (
                <tr
                  key={record.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">{record.timestamp}</td>
                  <td className="py-3 px-6 text-left">{record.item}</td>
                  <td className="py-3 px-6 text-left">{record.action}</td>
                  <td className="py-3 px-6 text-left">{record.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
