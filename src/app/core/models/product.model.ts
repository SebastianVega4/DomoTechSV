export interface Product {
  id?: string;
  nombre: string;
  descripcion: string;
  caracteristicas: string[];
  paquete: string[];
  descuento: number;
  precio: number;
  estado: string;
  nicho: string;
  categoria: string;
  stock: number;
  imagenes: string[];
  marca: string;
  modelo: string;
  url_video_review?: string;
  fecha_publicacion: any;
  destacado: boolean;
  link: string;
}