import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../shared/components/product-card/product-card';
import { ProductService } from '../core/services/product';
import { Product } from '../core/models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  featuredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getFeaturedProducts().subscribe(products => {
      this.featuredProducts = products;
    });
  }
  getParticleStyle() {
  const size = Math.random() * 10 + 5;
  return `
    width: ${size}px;
    height: ${size}px;
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    opacity: ${Math.random() * 0.5 + 0.3};
    animation: float ${Math.random() * 10 + 5}s infinite ease-in-out ${Math.random() * 5}s;
  `;
}
}