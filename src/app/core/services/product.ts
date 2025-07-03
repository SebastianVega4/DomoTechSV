import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private firestore: AngularFirestore) {}

  getProducts(nicho?: string, categoria?: string, searchTerm?: string): Observable<Product[]> {
    let query = this.firestore.collection<Product>('productos', ref => {
      let queryRef: any = ref;
      if (nicho) {
        queryRef = queryRef.where('nicho', '==', nicho);
      }
      if (categoria) {
        queryRef = queryRef.where('categoria', '==', categoria);
      }
      return queryRef;
    });

    return query.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Product;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.firestore.collection<Product>('productos', ref => 
      ref.where('destacado', '==', true).limit(6)
    ).valueChanges({ idField: 'id' });
  }

  getProductById(id: string): Observable<Product> {
    return this.firestore.collection('productos').doc<Product>(id).valueChanges().pipe(
      map(product => {
        if (product) {
          return { ...product, id } as Product;
        }
        throw new Error('Product not found');
      })
    );
  }
}