import { useState } from 'react';

export const InstrumentosCRUD = () => {
  const [instrumentos, setInstrumentos] = useState([
    {
      nombre: 'Guitarra',
      categoria: 'Cuerdas',
      habilitado: true,
    },
    {
      nombre: 'Batería',
      categoria: 'Percusión',
      habilitado: false,
    },
  ]);

  const [filtro, setFiltro] = useState('');

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-6xl mx-auto mt-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="font-semibold mr-2">Filtrar por Categoría:</label>
          <select
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
            className="border border-red-500 rounded px-2 py-1">
            <option value="">Todas</option>
            <option value="Cuerdas">Cuerdas</option>
            <option value="Viento">Viento</option>
            <option value="Percusión">Percusión</option>
          </select>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded font-bold hover:bg-red-600">
          AGREGAR INSTRUMENTO
        </button>
      </div>
      
      {/* Tabla */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-red-100 text-gray-700">
            <th className="p-3 text-left">Instrumento</th>
            <th className="p-3 text-left">Categoría</th>
            <th className="p-3">Habilitado</th>
            <th className="p-3 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {instrumentos
            .filter(inst => !filtro || inst.categoria === filtro)
            .map((inst, idx) => (
              <tr
                key={idx}
                className="border-b hover:bg-gray-50">
                <td className="p-3">{inst.nombre}</td>
                <td className="p-3">{inst.categoria}</td>
                <td className="p-3 text-center">
                  {inst.habilitado ? (
                    <span className="bg-green-100 text-green-700 rounded-full px-2 py-1 text-sm">
                      👍
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-600 rounded-full px-2 py-1 text-sm">
                      👎
                    </span>
                  )}
                </td>
                <td className="p-3 text-center space-x-2">
                  <button className="hover:text-blue-500 text-lg">👁️</button>
                  <button className="hover:text-yellow-500 text-lg">✏️</button>
                  <button className="hover:text-red-500 text-lg">❌</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
