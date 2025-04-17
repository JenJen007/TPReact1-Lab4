import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetalleInstrumento() {
  const { id } = useParams();
  interface Instrumento {
    instrumento: string;
    imagen: string;
    marca: string;
    modelo: string;
    precio: number;
    costoEnvio: string;
    cantidadVendida: number;
    descripcion: string;
  }

  const [instrumento, setInstrumento] = useState<Instrumento | null>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/instrumentos/${id}`)
      .then((response) => response.json())
      .then((data) => setInstrumento(data))
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, [id]);

  if (!instrumento) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{instrumento.instrumento}</h1>
      <img src={`/img/${instrumento.imagen}`} alt={instrumento.instrumento} className="w-full h-64 object-cover mb-4" />
      <p className="text-sm text-gray-600">Marca: {instrumento.marca}</p>
      <p className="text-sm text-gray-600">Modelo: {instrumento.modelo}</p>
      <p className="text-lg font-bold text-green-600">${instrumento.precio}</p>
      <p className="text-sm text-gray-600">
        {instrumento.costoEnvio === 'G' ? 'Envío gratis a todo el país' : `Costo de envío: $${instrumento.costoEnvio}`}
      </p>
      <p className="text-sm text-gray-600">Vendidos: {instrumento.cantidadVendida}</p>
      <p className="text-sm text-gray-700 mt-2">{instrumento.descripcion}</p>
    </div>
  );
}

export default DetalleInstrumento;