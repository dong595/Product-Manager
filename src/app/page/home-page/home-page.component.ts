import { Component } from '@angular/core';
import { ProductsComponent } from 'src/app/Components/products/products.component';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  faCoffee = faCoffee;
  faShoppingCart = faShoppingCart;
  faWineGlass = faWineGlass;
  products: IProduct[] = [];
  textSearch: string = '';
  currentProduct!: IProduct;
  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.log(err.message),
    });
  }
  editProduct(product: any) {
    this.currentProduct = product;
  }
  onRemove(id: any) {
    console.log(id);
  }
}
