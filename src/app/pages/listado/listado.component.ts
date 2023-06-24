import { Component } from '@angular/core';
import { ServiceComponent } from 'src/app/service/service.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent {
  productList: any[] = [];
  nombreFilter: string = '';
  marcaFilter: string = '';

  constructor(private servicio: ServiceComponent) {}

  ngOnInit(): void {
    this.getProducts();
  }

  deleteProduct(productId: any): void {
    this.servicio.deleteProductById(productId).subscribe(() => {
      this.getProducts();
    });
  }

  applyFilters(): void {
    this.getProducts();
  }

  clearFilters(): void {
    this.nombreFilter = '';
    this.marcaFilter = '';
    this.getProducts();
  }

  private getProducts(): void {
    this.servicio.getProducts().subscribe((data: any) => {
      console.log(data);
      this.productList = [...data];
      if (this.nombreFilter) {
        this.productList = this.productList.filter(
          (product) =>
            product.nombre &&
            product.nombre.toLowerCase().indexOf(this.nombreFilter.toLowerCase()) !== -1
        );
      }
      if (this.marcaFilter) {
        this.productList = this.productList.filter(
          (product) =>
            product.marca &&
            product.marca.toLowerCase().indexOf(this.marcaFilter.toLowerCase()) !== -1
        );
      }
    });
  }
}
