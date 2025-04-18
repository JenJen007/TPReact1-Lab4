export class Instrumento {
  id: string;
  instrumento: string;
  imagen: string;
  marca: string;
  modelo: string;
  precio: number;
  costoEnvio: string;
  cantidadVendida: number;
  descripcion: string;

  constructor(data: any) {
    this.id = data.id;
    this.instrumento = data.instrumento;
    this.imagen = data.imagen;
    this.marca = data.marca;
    this.modelo = data.modelo;
    this.precio = Number(data.precio);
    this.costoEnvio = data.costoEnvio;
    this.cantidadVendida = Number(data.cantidadVendida);
    this.descripcion = data.descripcion;
  }
}
