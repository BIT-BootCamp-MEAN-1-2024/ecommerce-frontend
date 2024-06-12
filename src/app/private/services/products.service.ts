import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'http://localhost:3000/api';

  constructor( private http: HttpClient ) { }

  getProducts() {

    return this.http.get<any>( `${ this.baseUrl }/products` );
  }

  insertProduct( newProduct: any ) {

    return this.http.post<any>( `${ this.baseUrl }/products`, newProduct );
  }

}
