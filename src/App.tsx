
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Productos from './components/Productos';
import DetalleInstrumento from './components/DetalleInstrumento';
import DondeEstamos from './components/DondeEstamos';

function App() {
  return (
    <Router>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/detalle/:id" element={<DetalleInstrumento />} />
        <Route path="/donde-estamos" element={<DondeEstamos />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;