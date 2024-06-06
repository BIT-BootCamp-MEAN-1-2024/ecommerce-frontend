import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../private/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  /** Atributos o propiedades (estas son las que se hacen publicas a nuestro HTML) */
  // products (nombre de nuestro atributo) : Tipo (any) = Lista vacia
  products!: any;

  /** Inyectar una dependencia (hacerla disponible) usando el constructor de la clase del componente */
  constructor( private productService: ProductsService ) {}


  ngOnInit() {
    /** Ejecuta el servicio disponible para obtener los datos */
    this.productService.getProducts().subscribe( data => {
      console.log( data );
      this.products = data.data;
    });
  }

  ngOnDestroy() {

  }

}
