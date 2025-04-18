import { Instrumento } from '../models/Instrumento';
import InstrumentoCard from './InstrumentoCard';

function InstrumentoList({ instrumentos }: { instrumentos: Instrumento[] }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {instrumentos.map(instrumento => (
        <InstrumentoCard
          key={instrumento.id}
          instrumento={instrumento}
        />
      ))}
    </div>
  );
}

export default InstrumentoList;
