import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  /** Atributos */
  products: any;

  constructor( private productService: ProductsService ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe( data => {
      console.log( data );
      this.products = data.data;
    });
  }
}
