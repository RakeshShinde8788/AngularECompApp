import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  categoryId! : number;
  products : any[] = [];


constructor(private route : ActivatedRoute, private productService: ProductService){}
ngOnInit(): void {
    // Watch for category id changes from route
    this.route.paramMap.subscribe(params => {
      this.categoryId = Number(params.get('id'));

      this.productService.getProducts().subscribe(allProducts => {
        if (this.categoryId) {
          // Filter by category
          this.products = allProducts.filter(p => p.categoryId === this.categoryId);
        } else {
          // No category → show all
          this.products = allProducts;
        }
      });
    });
  }

}
