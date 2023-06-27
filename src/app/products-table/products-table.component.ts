import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { DialogConfirmationComponent } from "../dialog-confirmation/dialog-confirmation.component";

@Component({
  selector: "app-products-table",
  templateUrl: "./products-table.component.html",
  styleUrls: ["./products-table.component.scss"],
})
export class ProductsTableComponent implements OnInit {
  products: any = [];
  productDetail: any;
  selectedProduct: any;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  viewProductDetail(product: any) {
    this.productDetail = product;
    this.productsService.selectedProduct = this.productDetail;
    this.router.navigate(["/product", this.productDetail.id]);
  }

  openConfirmationDialog(productId: string) {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: { productId: productId },
    });
  }
}
