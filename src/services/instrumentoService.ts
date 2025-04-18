// Centraliza los llamados a la API de instrumentos
import { Instrumento } from '../models/Instrumento';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function getInstrumentos(): Promise<Instrumento[]> {
  const res = await fetch(`${API_URL}/api/instrumentos`);
  if (!res.ok) throw new Error('Error al obtener instrumentos');
  const data = await res.json();
  return data.map((item: any) => new Instrumento(item));
}

export async function getInstrumentoById(id: string): Promise<Instrumento> {
  const res = await fetch(`${API_URL}/api/instrumentos/${id}`);
  if (!res.ok) throw new Error('Instrumento no encontrado');
  const data = await res.json();
  return new Instrumento(data);
}
