import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/class/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product();
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id'] > 20 || params['id'] < 1 || isNaN(params['id'])) {
        this.router.navigate(['/404']);
      }
      this.getProduct(params['id'])
    })
  }

  getProduct(id: number): void {
    this.loading = true;
    this.productService.getOne(id).subscribe({
      next: (product: Product) => {
        this.product = product;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastr.error('Error loading product');
      }
    })
  }
}
