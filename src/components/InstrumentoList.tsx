// src/InstrumentoList.jsx

import InstrumentoCard from './InstrumentoCard';

interface Instrumento {
    id: string; // Added 'id' property
    imagen: string;
    instrumento: string;
    marca: string;
    modelo: string;
    precio: number;
    costoEnvio: string;
    cantidadVendida: number;
    descripcion: string;
  }
function InstrumentoList({ instrumentos }: { readonly instrumentos: readonly Instrumento[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {instrumentos.map((instrumento) => (
        <InstrumentoCard key={instrumento.id} instrumento={instrumento} />
      ))}
    </div>
  );
}

export default InstrumentoList;