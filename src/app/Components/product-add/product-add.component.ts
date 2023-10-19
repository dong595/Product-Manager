import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    price: [0, [Validators.required, Validators.min(0)]],
    imageUrl: ['', [Validators.required]],
    releaseDate: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  onHandleSubmit() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const product: IProduct = {
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      imageUrl: this.productForm.value.imageUrl || '',
      releaseDate: this.productForm.value.releaseDate || '',
    };

    this.productService.addProduct(product).subscribe({
      next: () => {
        alert('Product added successfully');
      },
    });
  }
}
