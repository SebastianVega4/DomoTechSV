import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from '../../shared/components/product-form/product-form';
import { ProductService } from '../../core/services/product';
import { AuthService } from '../../core/services/auth';
import { Product, NewProduct } from '../../core/models/product.model';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductFormComponent],
  templateUrl: './admin-panel.html',
  styleUrls: ['./admin-panel.scss']
})
export class AdminPanelComponent {
  newProduct: NewProduct = this.getEmptyProduct();
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedProductId: string | null = null;
  showAddForm = false;
  searchTerm = '';

  constructor(
    public authService: AuthService,
    private productService: ProductService
  ) {
    this.loadProducts();
  }

  getEmptyProduct(): NewProduct {
    return {
      nombre: '',
      descripcion: '',
      caracteristicas: [],
      paquete: [],
      descuento: 0,
      precio: 0,
      estado: 'nuevo',
      nicho: 'domotica',
      categoria: 'kits',
      stock: 0,
      imagenes: [],
      marca: '',
      modelo: '',
      fecha_publicacion: new Date(),
      destacado: false,
      link: ''
    };
  }

  async loadProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = [...products];
    });
  }

  async addProduct(productData: NewProduct) {
    try {
      await this.productService.addProduct(productData);
      this.newProduct = this.getEmptyProduct();
      this.loadProducts();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  }

  async updateProduct(productData: Product | NewProduct) {
    if ('id' in productData) {
      try {
        await this.productService.updateProduct(productData.id, productData);
        this.loadProducts();
      } catch (error) {
        console.error('Error updating product:', error);
      }
    }
  }

  async deleteProduct(productId: string) {
    try {
      await this.productService.deleteProduct(productId);
      this.loadProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }

  filterProducts() {
    if (!this.searchTerm) {
      this.filteredProducts = [...this.products];
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(p =>
      p.nombre.toLowerCase().includes(term) ||
      p.categoria.toLowerCase().includes(term) ||
      p.descripcion.toLowerCase().includes(term)
    );
  }

  toggleProductDetail(productId: string) {
    // Si ya está seleccionado, no hagas nada (para evitar cerrarlo al hacer clic en el formulario)
    if (this.selectedProductId === productId) return;

    this.selectedProductId = productId;
  }

  logout() {
    this.authService.logout();
  }
}