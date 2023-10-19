import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: IProduct[] = [];
  currentProduct!: IProduct;
  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.log(err.message),
    });
  }
  textSearch: string = '';
  onHandleRemove(id?: number | string) {
    const confirm = window.confirm(
      'Are you sure you want to remove this item?'
    );
    if (!confirm) return;
    console.log(id);
    this.products = this.products.filter((item) => {
      console.log(item.id);

      return item.id !== id;
    });
  }
  editProduct(product: any) {
    this.currentProduct = product;
  }
  onRemove(id: any) {
    console.log(id);
  }
}
