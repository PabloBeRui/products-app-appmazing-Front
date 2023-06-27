import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.scss"],
})
export class NewProductComponent implements OnInit {
  name: string;
  stock: number;
  price: number;
  active: boolean;
  date_added: Date;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {}

  newProduct() {
    const product = {
      name: this.name,
      stock: this.stock,
      price: this.price,
      active: this.active,
      date_added: this.date_added,
    };
    this.productService.newProduct(product);
    this.router.navigate(["/"]);
  }
}
