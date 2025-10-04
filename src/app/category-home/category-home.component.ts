import { Component } from '@angular/core';
import { ICategory } from 'src/models/category';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent {
categories : ICategory[] = [
    {id : 1, name : 'electronics'},
    {id : 2, name : 'home appliances'},
    {id : 3, name : 'clothing'},
    {id : 4, name : 'footwear'},
    {id : 5, name : 'Beauty'}
  ]
}
