import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  categories: any;
  productForm: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.minLength( 5 ) ] ],
    price: [ 0, [] ],
    quantity: [ 0, [] ],
    urlImage: [ '', [] ],
    description: [ '', [] ],
    category: [ '', [] ]
  });
  
  constructor( 
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService
  ) {}

  /** Este Ciclo vida ejecuta acciones cuando el componente se esta inicializando */
  ngOnInit() {
    this.categoriesService.getCategories().subscribe( data => {
      // console.log( data );
      /** data --> { ok: true, data: [...] } */
      this.categories = data.data;
    });
  }

  onSumbit() {
    if( this.productForm.valid ) {
      console.log( this.productForm.value );

    }
  }
}
