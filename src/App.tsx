import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Productos from './components/Productos';
import DetalleInstrumento from './components/DetalleInstrumento';
import DondeEstamos from './components/DondeEstamos';
import { CategoriesCRUD } from './modules/admin/CategoriesCRUD';
import { InstrumentosCRUD } from './modules/admin/InstrumentosCRUD';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/productos"
            element={<Productos />}
          />
          <Route
            path="/detalle/:id"
            element={<DetalleInstrumento />}
          />
          <Route
            path="/donde-estamos"
            element={<DondeEstamos />}
          />
            <Route
              path="/categorias"
              element={<CategoriesCRUD />}
            />
            <Route
              path="/instrumentos"
              element={<InstrumentosCRUD />}
            />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
