import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private allProducts: Product[] = [
    { id: 1, name: 'Smartphone', price: 25000, discount: 10, imgPath: 'assets/img/smartphone.jpg', categoryId: 1 },
    { id: 2, name: 'Laptop', price: 60000, discount: 15, imgPath: 'assets/img/laptop.jpg', categoryId: 1 },
    { id: 3, name: 'Washing Machine', price: 20000, discount: 5, imgPath: 'assets/img/washingmachine.jpg', categoryId: 2 },
    { id: 4, name: 'Refrigerator', price: 30000, discount: 12, imgPath: 'assets/img/fridge.jpg', categoryId: 2 },
    { id: 5, name: 'T-Shirt', price: 800, discount: 20, imgPath: 'assets/img/tshirt.jpg', categoryId: 3 },
    { id: 6, name: 'Jeans', price: 2000, discount: 10, imgPath: 'assets/img/jeans.jpg', categoryId: 3 },
    { id: 7, name: 'Sneakers', price: 2500, discount: 5, imgPath: 'assets/img/sneakers.jpg', categoryId: 4 },
    { id: 8, name: 'Formal Shoes', price: 3500, discount: 8, imgPath: 'assets/img/formalshoes.jpg', categoryId: 4 },
    { id: 9, name: 'Lipstick', price: 1200, discount: 18, imgPath: 'assets/img/lipstick.jpg', categoryId: 5 },
    { id: 10, name: 'Perfume', price: 3000, discount: 15, imgPath: 'assets/img/perfume.jpg', categoryId: 5 }
  ];
  constructor() { }
   getProducts(): Observable<Product[]> {
    return of(this.allProducts);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.allProducts.find(p => p.id === id));
  }
}
