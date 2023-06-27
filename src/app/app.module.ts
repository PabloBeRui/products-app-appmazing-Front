import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProductsTableComponent } from "./products-table/products-table.component";
import { HttpClientModule } from "@angular/common/http";
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatTableModule,
  MatToolbarModule,
} from "@angular/material";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { FormsModule } from "@angular/forms";
import { NewProductComponent } from "./new-product/new-product.component";
import { DialogConfirmationComponent } from "./dialog-confirmation/dialog-confirmation.component";
import { ProductsChartsComponent } from "./products-charts/products-charts.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  declarations: [
    AppComponent,
    ProductsTableComponent,
    ProductDetailComponent,
    EditProductComponent,
    NewProductComponent,
    DialogConfirmationComponent,
    ProductsChartsComponent,
  ],
  entryComponents: [DialogConfirmationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    MatDialogModule,
    NgxChartsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
