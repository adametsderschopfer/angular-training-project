import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  title = 'angular_training_project';
  // products: IProduct[] = [];
  loading = true;
  term = "";

  constructor(public productService: ProductService, public modalService: ModalService) {
  }

  ngOnInit(): void {
    this.loading = true;

    this.productService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
