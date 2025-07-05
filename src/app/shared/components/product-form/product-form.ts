import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewProduct, Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.html',
  styleUrls: ['./product-form.scss']
})
export class ProductFormComponent {
  @Input() product!: Product | NewProduct;
  @Output() submitProduct = new EventEmitter<Product | NewProduct>();

  nichos = ['domotica', 'tecnologia', 'segunda-mano'];
  categorias = ['Aistentes', 'Aspiradora', 'TomaCorriente', 'Interruptor', 'Iluminacion', 'Pin', 'Rele', 'Reloj', 'Control_Remoto', 'Audifonos', 'Airpots', 'Adaptador', 'Mause', 'Otro'];

  submit() {
    this.submitProduct.emit(this.product);
  }

  addFeature() {
    this.product.caracteristicas.push('');
  }

  removeFeature(index: number) {
    this.product.caracteristicas.splice(index, 1);
  }

  addPackageItem() {
    this.product.paquete.push('');
  }

  removePackageItem(index: number) {
    this.product.paquete.splice(index, 1);
  }

  addImage() {
    this.product.imagenes.push('');
  }

  removeImage(index: number) {
    this.product.imagenes.splice(index, 1);
  }
}