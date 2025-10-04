import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryHomeComponent } from './category-home/category-home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: CategoryHomeComponent },
  {path : 'category/:id', component : ProductListComponent},
  {path : 'product/:id', component : ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
