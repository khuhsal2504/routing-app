import { Outlet } from "react-router-dom";
import Navbar from "./Components/navbarComponent/Navbar";
import Footer from "./Components/Footer";
import { CartProvider } from "./context/CartContext";
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
