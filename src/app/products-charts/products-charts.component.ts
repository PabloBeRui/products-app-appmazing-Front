import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-products-charts",
  templateUrl: "./products-charts.component.html",
  styleUrls: ["./products-charts.component.scss"],
})
export class ProductsChartsComponent implements OnInit {
  activeData = [];
  priceData = [];
  dateAddData = [];
  colorScheme = {
    domain: ["#69F0AE", "rgb(195, 30, 210)"],
  };
  loadG1 = false;
  loadG2 = false;
  loadG3 = false;

  constructor(private productsService: ProductsService) {
    setTimeout(() => (this.loadG1 = true), 1000);
    setTimeout(() => (this.loadG2 = true), 2000);
    setTimeout(() => (this.loadG3 = true), 3000);
  }

  ngOnInit() {
    this.productsService.getProducts().subscribe((products: any[]) => {
      const activeProducts = products.filter(
        (product) => product.active == true
      );
      const inactiveProducts = products.filter(
        (product) => product.active == false
      );
      this.activeData = [
        {
          name: "Disponibles",
          value: activeProducts.length,
        },
        {
          name: "No disponibles",
          value: inactiveProducts.length,
        },
      ];
      const priceUnderFive = products.filter((products) => {
        return products.price < 5;
      });
      const priceOverFive = products.filter((products) => {
        return products.price >= 5;
      });

      this.priceData = [
        { name: "Menos de 5", value: priceUnderFive.length },
        { name: "Más de 5", value: priceOverFive.length },
      ];

      const now = new Date();
      const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );

      if (now.getMonth() === 0) {
        // El mes actual es enero, establecer el mes anterior a diciembre
        oneMonthAgo.setMonth(11);
        oneMonthAgo.setFullYear(now.getFullYear() - 1);
      } else {
        // Restar 1 al mes actual para obtener el mes anterior
        oneMonthAgo.setMonth(now.getMonth() - 1);
      }

      const recentProducts = products.filter((product) => {
        const productDate = new Date(product.date_added);
        return productDate >= oneMonthAgo;
      });

      const olderProducts = products.filter((product) => {
        const productDate = new Date(product.date_added);
        return productDate < oneMonthAgo;
      });

      this.dateAddData = [
        { name: "Menos de un mes", value: recentProducts.length },
        { name: "Más de un mes", value: olderProducts.length },
      ];

      console.log(olderProducts);
      console.log(recentProducts);
      console.log(this.dateAddData);
    });
  }
}
