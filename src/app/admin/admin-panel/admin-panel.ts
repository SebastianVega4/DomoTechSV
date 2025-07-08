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
  notificationMessage: string = '';
  showNotification: boolean = false;
  notificationTimeout: any;

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
      this.showNotificationMessage('Producto añadido correctamente');
      this.showAddForm = false;
    } catch (error) {
      console.error('Error adding product:', error);
      this.showNotificationMessage('Error al añadir el producto');
    }
  }

  async updateProduct(productData: Product | NewProduct) {
    if ('id' in productData) {
      try {
        await this.productService.updateProduct(productData.id, productData);
        this.loadProducts();
        this.showNotificationMessage('Producto actualizado correctamente');
      } catch (error) {
        console.error('Error updating product:', error);
        this.showNotificationMessage('Error al actualizar el producto');
      }
    }
  }

  async deleteProduct(productId: string) {
    try {
      await this.productService.deleteProduct(productId);
      this.loadProducts();
      this.selectedProductId = null;
      this.showNotificationMessage('Producto eliminado correctamente');
    } catch (error) {
      console.error('Error deleting product:', error);
      this.showNotificationMessage('Error al eliminar el producto');
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
  private showNotificationMessage(message: string) {
    if (this.notificationTimeout) {
      clearTimeout(this.notificationTimeout);
    }

    this.notificationMessage = message;
    this.showNotification = true;

    this.notificationTimeout = setTimeout(() => {
      this.showNotification = false;
    }, 3000);
  }
}