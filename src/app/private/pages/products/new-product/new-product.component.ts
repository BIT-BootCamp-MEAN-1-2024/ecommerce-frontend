import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  productForm: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.minLength( 5 ) ] ],
    price: [ 0, [] ],
    quantity: [ 0, [] ],
    urlImage: [ '', [] ],
    description: [ '', [] ],
    category: [ '', [] ]
  });
  
  constructor( private formBuilder: FormBuilder ) {}

  onSumbit() {
    if( this.productForm.valid ) {
      console.log( this.productForm.value );

    }
  }
}
