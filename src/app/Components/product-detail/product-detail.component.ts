import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product!: IProduct;
  constructor(
    private productService: ProductService,
    private router: ActivatedRoute
  ) {
    this.router.params.subscribe(({ id }) => {
      this.productService.getOne(id).subscribe({
        next: (data) => (this.product = data),
        error: (err) => console.log(err),
      });
    });
  }
}
