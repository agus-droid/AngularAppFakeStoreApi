import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/class/product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product = new Product()

  @Output() onProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.onProduct.emit(this.product);
  }

}
