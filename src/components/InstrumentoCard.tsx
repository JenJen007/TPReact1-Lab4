
interface Instrumento {
    imagen: string;
    instrumento: string;
    marca: string;
    modelo: string;
    precio: number;
    costoEnvio: string;
    cantidadVendida: number;
    descripcion: string;
  }

  function InstrumentoCard({ instrumento }: { readonly instrumento: Instrumento }) {
  const { imagen, instrumento: nombre, marca, modelo, precio, costoEnvio, cantidadVendida, descripcion } = instrumento;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 transition-transform duration-300 hover:scale-105">
      {/* Contenedor de la imagen */}
      <div className="relative h-60 overflow-hidden mb-4">
        <img
          src={`/img/${imagen}`}
          alt={nombre}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Información del instrumento */}
      <h2 className="text-xl font-semibold text-gray-800">{nombre}</h2>
      <p className="text-sm text-gray-600">Marca: {marca}</p>
      <p className="text-sm text-gray-600">Modelo: {modelo}</p>
      <p className="text-lg font-bold text-green-600 mt-2">${precio}</p>

      {/* Costo de envío */}
      <p className="text-sm text-gray-600">
        {costoEnvio === 'G' ? (
          <span className="text-green-600">Envío gratis a todo el país</span>
        ) : (
          <span className="text-orange-600">Costo de envío: $${costoEnvio}</span>
        )}
      </p>

      {/* Cantidad vendida */}
      <p className="text-sm text-gray-600">Vendidos: {cantidadVendida}</p>

      {/* Descripción */}
      <p className="text-sm text-gray-700 mt-2">{descripcion}</p>
    </div>
  );
}

export default InstrumentoCard;