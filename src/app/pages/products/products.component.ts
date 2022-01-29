import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/class/product';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  error = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getAll();
    this.getUserLogged();
  }

  getAll() {
    this.loading = true;
    this.error = false;
    this.productService.getAll().subscribe({
      next: (products: Product[]) => {
        this.products = products;
        this.loading = false;
        this.toastr.success('Hello world!', 'Toastr fun!');
      },
      error: () => {
        this.error = true;
        this.loading = false;
        this.toastr.error('Error loading products');
      }
    });
  };

  showProduct(product: Product) {
    this.router.navigate(['/product', product.id]);
  }

  getUserLogged() {
    this.userService.getUserLogged().subscribe({
      next: (user: any) => {
        console.log(user);
      },
      error: () => {
        console.log('Error');
      }
    });
  }
}
