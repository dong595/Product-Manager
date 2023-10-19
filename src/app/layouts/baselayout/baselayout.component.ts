import { Component } from '@angular/core';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faSearch,
  faSignInAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-baselayout',
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.css'],
})
export class BaselayoutComponent {
  textSearch: string = '';
  products: IProduct[] = [];

  faSearch = faSearch;
  faUserPlus = faUserPlus;
  faSignInAlt = faSignInAlt;
  faFacebook = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faEnvelope = faEnvelope;
  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.log(err.message),
    });
  }
}
