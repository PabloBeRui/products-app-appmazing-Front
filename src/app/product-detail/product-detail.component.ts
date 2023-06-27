import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.product = this.productsService.selectedProduct;
  }
  goToUpdateProduct() {
    this.router.navigate(["/edit-product", this.product.id]);
  }
}
