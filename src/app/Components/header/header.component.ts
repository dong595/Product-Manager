import { Component } from '@angular/core';
import {
  faSearch,
  faUserPlus,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  textSearch: string = '';
  products: IProduct[] = [];

  faSearch = faSearch;
  faUserPlus = faUserPlus;
  faSignInAlt = faSignInAlt;
  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.log(err.message),
    });
  }
}
