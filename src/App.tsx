import { useEffect, useState } from 'react';
import './App.css';
import InstrumentoList from './components/InstrumentoList';

interface Instrumento {
  id: string;
  instrumento: string;
  imagen: string;
  marca: string;
  precio: number;
  cantidadVendida: number;
  descripcion: string;
  modelo: string;
  costoEnvio: string; // Cambiado a string para coincidir con el JSON
}

function App() {
  const [filtro, setFiltro] = useState('');
  const [orden, setOrden] = useState('precio');
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

  useEffect(() => {
    // Cargar los datos del archivo JSON
    fetch('/instrumentos.json')
      .then((response) => response.json())
      .then((data: { instrumentos: Instrumento[] }) => setInstrumentos(data.instrumentos))
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []);

  // Filtrar instrumentos
  const instrumentosFiltrados = instrumentos.filter((inst) =>
    inst.instrumento.toLowerCase().includes(filtro.toLowerCase())
  );

  // Ordenar instrumentos
  const instrumentosOrdenados = [...instrumentosFiltrados].sort((a, b) => {
    if (orden === 'precio') return a.precio - b.precio;
    if (orden === 'vendidos') return b.cantidadVendida - a.cantidadVendida;
    return a.instrumento.localeCompare(b.instrumento);
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Catálogo de Instrumentos Musicales
      </h1>

      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar instrumento..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      {/* Selector de orden */}
      <select
        value={orden}
        onChange={(e) => setOrden(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4 w-full sm:w-auto"
      >
        <option value="precio">Precio</option>
        <option value="vendidos">Más vendidos</option>
        <option value="nombre">Nombre</option>
      </select>

      {/* Lista de instrumentos */}
      {instrumentosOrdenados.length > 0 ? (
        <InstrumentoList instrumentos={instrumentosOrdenados} />
      ) : (
        <p className="text-center text-gray-600">No se encontraron resultados.</p>
      )}
    </div>
  );
}

export default App;