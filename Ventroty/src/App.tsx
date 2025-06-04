import { Routes, Route, useLocation } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LandingPage } from "./pages/LandingPage";
import { EditItemPage } from "./pages/EditItemPage";
import { HistoryPage } from "./pages/HistoryPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Navbar } from "./components/Navbar";

function App() {
  const location = useLocation(); // Dapatkan path lokasi saat ini
  const isAuthPage =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <div className="min-h-screen bg-gray-100">
      {" "}
      {/* Ini bisa dihapus jika body sudah full screen */}
      {/* Navbar hanya ditampilkan jika bukan halaman Auth */}
      {!isAuthPage && <Navbar />}
      {/* Konten halaman */}
      {/* Conditional rendering untuk padding container */}
      {isAuthPage ? (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />{" "}
          {/* NotFound juga full screen jika di Auth route */}
        </Routes>
      ) : (
        <div className="container mx-auto p-4">
          {" "}
          {/* Padding untuk halaman setelah login */}
          <Routes>
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/edit-item" element={<EditItemPage />} />
            <Route path="/edit-item/:id" element={<EditItemPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="*" element={<NotFoundPage />} />{" "}
            {/* NotFound dengan padding jika di route lain */}
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
