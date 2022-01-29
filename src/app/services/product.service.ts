import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../class/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = 'https://fakestoreapi.com/products/'
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }

  getOne(id: number): Observable<Product> {
    return this.http.get<Product>(this.API_URL + id);
  }

  add(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API_URL, product);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(this.API_URL + product.id, product);
  }

  remove(id: number): Observable<Product> {
    return this.http.delete<Product>(this.API_URL + id);
  }
}
