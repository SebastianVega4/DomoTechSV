import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product, NewProduct } from '../models/product.model';
import { query, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private firestore: Firestore) { }

  getProducts(nicho?: string, categoria?: string): Observable<Product[]> {
    const productsRef = collection(this.firestore, 'productos');
    let q = query(productsRef);

    if (nicho) {
      q = query(productsRef, where('nicho', '==', nicho));
    }
    if (categoria) {
      q = query(productsRef, where('categoria', '==', categoria));
    }

    return collectionData(q, { idField: 'id' }) as Observable<Product[]>;
  }

  getFeaturedProducts(): Observable<Product[]> {
    const productsRef = collection(this.firestore, 'productos');
    const q = query(productsRef, where('destacado', '==', true));
    return collectionData(q, { idField: 'id' }) as Observable<Product[]>;
  }

  getProductById(id: string): Observable<Product> {
    const productRef = doc(this.firestore, `productos/${id}`);
    return docData(productRef, { idField: 'id' }) as Observable<Product>;
  }

  async addProduct(productData: NewProduct): Promise<Product> {
    const productsRef = collection(this.firestore, 'productos');
    const docRef = await addDoc(productsRef, productData);
    return { id: docRef.id, ...productData };
  }

  async updateProduct(id: string, productData: Partial<Product>): Promise<void> {
    const productRef = doc(this.firestore, `productos/${id}`);
    await updateDoc(productRef, productData);
  }

  async deleteProduct(id: string): Promise<void> {
    const productRef = doc(this.firestore, `productos/${id}`);
    await deleteDoc(productRef);
  }
}