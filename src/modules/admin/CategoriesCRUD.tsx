import { useState } from "react";
import "./Crud.css";

const CategoriesCRUD = () => {
  const [categorias, setCategorias] = useState([
    { id: 1, nombre: "Carnes", habilitado: true },
    { id: 2, nombre: "Verduras", habilitado: false },
  ]);

//   const [instrumentos, setInstrumentos] = useState([
//     { id: 1, nombre: "Guitarra", categoria: "Cuerdas", habilitado: true },
//     { id: 2, nombre: "Batería", categoria: "Percusión", habilitado: false },
//   ]);

  const [mostrarModalCategoria, setMostrarModalCategoria] = useState(false);
  const [nuevaCategoria, setNuevaCategoria] = useState("");

  const handleAgregarCategoria = () => {
    if (!nuevaCategoria) return;
    setCategorias([
      ...categorias,
      { id: categorias.length + 1, nombre: nuevaCategoria, habilitado: true },
    ]);
    setNuevaCategoria("");
    setMostrarModalCategoria(false);
  };

  return (
    <div className="crud-container">
      <div className="crud-header">
        <div>
          <label htmlFor="filtroRubro"><strong>Filtrar por Categoría:</strong></label>
          <select id="filtroRubro">
            <option value="">Seleccione una categoría</option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.nombre}>{cat.nombre}</option>
            ))}
          </select>
        </div>
        <button onClick={() => setMostrarModalCategoria(true)}>AGREGAR CATEGORIA</button>
      </div>
<table>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Habilitado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((cat) => (
            <tr key={cat.id}>
              <td>{cat.nombre}</td>
              <td>
                {cat.habilitado ? (
                  <span className="enabled">👍</span>
                ) : (
                  <span className="disabled">👎</span>
                )}
              </td>
              <td>
                <span className="icon-btn">👁️</span>
                <span className="icon-btn">✏️</span>
                <span className="icon-btn">❌</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para agregar nueva categoría */}
      {mostrarModalCategoria && (
        <div className="modal">
          <div className="modal-content">
            <h3>Agregar Categoría</h3>
            <input
              type="text"
              value={nuevaCategoria}
              onChange={(e) => setNuevaCategoria(e.target.value)}
              placeholder="Nombre de categoría"
              style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
            />
            <div className="modal-actions">
              <button onClick={() => setMostrarModalCategoria(false)}>Cancelar</button>
              <button onClick={handleAgregarCategoria}>Agregar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesCRUD;
