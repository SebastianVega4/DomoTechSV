import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  products: Product[] = [];
  categoryName: string = '';
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const nicho = params['nicho'];
      this.categoryName = this.getCategoryName(nicho);
      
      this.productService.getProducts(nicho).subscribe(products => {
        this.products = products;
        this.isLoading = false;
      });
    });
  }

  private getCategoryName(nicho: string): string {
    switch(nicho) {
      case 'domotica': return 'Productos Domóticos';
      case 'tecnologia': return 'Productos Tecnológicos';
      case 'segunda-mano': return 'Productos de Segunda Mano';
      default: return 'Productos';
    }
  }
}