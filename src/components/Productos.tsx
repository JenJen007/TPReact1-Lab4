import { useEffect, useState } from 'react';
import InstrumentoList from './InstrumentoList';
import { getInstrumentos } from '../services/instrumentoService';
import { Instrumento } from '../models/Instrumento';

function Productos() {
  const [filtro, setFiltro] = useState('');
  const [orden, setOrden] = useState('precio');
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

  // Cargar los datos desde la API
  useEffect(() => {
    getInstrumentos()
      .then(data => setInstrumentos(data))
      .catch(error => console.error('Error al cargar los datos:', error));
  }, []);

  // Filtrar instrumentos
  const instrumentosFiltrados = instrumentos.filter(inst =>
    inst.instrumento.toLowerCase().includes(filtro.toLowerCase())
  );

  // Ordenar instrumentos
  const instrumentosOrdenados = [...instrumentosFiltrados].sort((a, b) => {
    if (orden === 'precio') return a.precio - b.precio;
    if (orden === 'vendidos') return b.cantidadVendida - a.cantidadVendida;
    return a.instrumento.localeCompare(b.instrumento);
  });

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Productos</h1>

      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar instrumento..."
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      {/* Selector de orden */}
      <select
        value={orden}
        onChange={e => setOrden(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4 w-full sm:w-auto">
        <option value="precio">Precio</option>
        <option value="vendidos">Más vendidos</option>
        <option value="nombre">Nombre</option>
      </select>

      {/* Lista de instrumentos */}
      {instrumentosOrdenados.length > 0 ? (
        <InstrumentoList instrumentos={instrumentosOrdenados} />
      ) : (
        <p className="text-center text-gray-600">
          No se encontraron resultados.
        </p>
      )}
    </div>
  );
}

export default Productos;
