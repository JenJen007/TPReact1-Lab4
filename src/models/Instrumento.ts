import { Categoria } from './Categoria';

export class Instrumento {
  id: number;
  nombre: string;
  tipo: string;
  precio: number;
  marca: string;
  modelo: string;
  imagen: string;
  costoEnvio: string;
  cantidadVendida: string;
  descripcion: string;
  categoria: Categoria | null;

  constructor(data: any) {
    this.id = data.id;
    this.nombre = data.nombre;
    this.tipo = data.tipo;
    this.precio = data.precio;
    this.marca = data.marca;
    this.modelo = data.modelo;
    this.imagen = data.imagen;
    this.costoEnvio = data.costoEnvio;
    this.cantidadVendida = data.cantidadVendida;
    this.descripcion = data.descripcion;
    this.categoria = data.categoria ? new Categoria(data.categoria) : null;
  }
}
