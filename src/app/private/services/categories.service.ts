import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseUrl = 'http://localhost:3000/api';

  constructor( private http: HttpClient ) { }

  getCategories() {

    return this.http.get<any>( `${ this.baseUrl }/categories` );
  }
}
