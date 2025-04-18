import { useState } from "react";

export const CategoriesCRUD = () => {
  const [categorias, setCategorias] = useState([
    { nombre: "Carnes", habilitado: true },
    { nombre: "Verduras", habilitado: false },
  ]);
  const [nuevaCategoria, setNuevaCategoria] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [filtro, setFiltro] = useState("");

  const handleAgregar = () => {
    if (!nuevaCategoria.trim()) return;

    const yaExiste = categorias.some(cat => cat.nombre === nuevaCategoria);
    if (yaExiste) return;

    setCategorias([...categorias, { nombre: nuevaCategoria, habilitado: true }]);
    setNuevaCategoria("");
    setModalOpen(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <label className="font-semibold mr-2">Filtrar por categoría:</label>
            <select
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              className="border border-red-500 rounded px-2 py-1"
            >
              <option value="">Todas</option>
              {[...new Set(categorias.map(c => c.nombre))].map((nombre, idx) => (
                <option key={idx} value={nombre}>{nombre}</option>
              ))}
            </select>
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded font-bold hover:bg-red-600"
            onClick={() => setModalOpen(true)}
          >
            AGREGAR CATEGORÍA
          </button>
        </div>

        {/* Tabla */}
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-red-100 text-gray-700">
              <th className="p-3 text-left">Categoría</th>
              <th className="p-3">Habilitado</th>
              <th className="p-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias
              .filter(cat => !filtro || cat.nombre === filtro)
              .map((cat, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="p-3">{cat.nombre}</td>
                  <td className="p-3 text-center">
                    {cat.habilitado ? (
                      <span className="bg-green-100 text-green-700 rounded-full px-2 py-1 text-sm">👍</span>
                    ) : (
                      <span className="bg-red-100 text-red-600 rounded-full px-2 py-1 text-sm">👎</span>
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

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-xl font-semibold mb-4">Agregar Categoría</h2>
            <input
              type="text"
              placeholder="Nombre de la categoría"
              value={nuevaCategoria}
              onChange={(e) => setNuevaCategoria(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
                onClick={() => setModalOpen(false)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={handleAgregar}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
