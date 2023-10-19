import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(
      `https://6110f09bc38a0900171f0ed0.mockapi.io/product`
    );
  }
  getOne(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(
      `https://6110f09bc38a0900171f0ed0.mockapi.io/product/${id}`
    );
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(
      `https://6110f09bc38a0900171f0ed0.mockapi.io/product`,
      product
    );
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(
      `https://6110f09bc38a0900171f0ed0.mockapi.io/product/${product.id}`,
      product
    );
  }
}
