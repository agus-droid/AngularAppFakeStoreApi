import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/class/product';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  error = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.error = false;
    this.productService.getProducts().subscribe(
      (data: any) => {
        console.log(data);
        this.loading = false;
        this.products = data;
        this.toastr.success('Hello world!', 'Toastr fun!');
      },
      (error: any) => {
        console.log(error);
        this.loading = false;
        this.error = true;
        this.toastr.error('Ha ocurrido un error', 'Error');
      }
    );
  }

  showProduct(product: Product) {
    this.router.navigate(['/product', product.id]);
  }
}
