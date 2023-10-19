import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  productForm!: FormGroup;
  product!: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      imageUrl: ['', Validators.required],
      code: [''],
      releaseDate: ['', Validators.required],
    });

    const { id } = this.route.snapshot.params;
    if (id) {
      this.getProduct(id);
    }
  }

  async getProduct(id: string) {
    try {
      this.product = await firstValueFrom(this.productService.getOne(id));
      this.productForm.patchValue(this.product);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async onHandleSubmit() {
    if (this.productForm.invalid) return;

    try {
      const product: IProduct = {
        id: this.product.id,
        ...this.productForm.value,
      };
      await firstValueFrom(this.productService.updateProduct(product));
      alert('Update product successfully!');
    } catch (error: any) {
      await firstValueFrom(
        this.productService.addProduct(this.productForm.value)
      );
      alert('Create product successfully!');
    }
  }
}
