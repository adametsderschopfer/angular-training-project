import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {IProduct} from "../../models/product";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  constructor(private productService: ProductService, private modalService: ModalService) {
  }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  });

  get title(): FormControl {
    return this.form.controls.title;
  }

  submit() {
    this.productService.create({
      title: this.form.value.title as string,
      price: 13.5,
      rating: {
        rate: 42,
        count: 1
      },
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
    }).subscribe(() => {
      this.modalService.close();
    });
  }
}
