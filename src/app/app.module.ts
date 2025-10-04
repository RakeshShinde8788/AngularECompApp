import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryHomeComponent } from './category-home/category-home.component';
import { ProductComponent } from './product/product.component';
import { DiscountPipe } from './pipes/discount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryHomeComponent,
    ProductComponent,
    DiscountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
