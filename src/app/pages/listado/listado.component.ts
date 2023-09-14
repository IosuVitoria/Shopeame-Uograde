import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from 'src/app/service/service.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  productList: any[] = [];
  nombreFilter: string = '';
  marcaFilter: string = '';

  // Variables para la paginación
  currentPage: number = 1;
  itemsPerPage: number = 6;

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
    this.servicio
      .getProducts(this.currentPage, this.itemsPerPage)
      .subscribe((data: any) => {
        console.log(data);
        this.productList = [...data];
        if (this.nombreFilter) {
          this.productList = this.productList.filter(
            (product) =>
              product.nombre &&
              product.nombre.toLowerCase().includes(this.nombreFilter.toLowerCase())
          );
        }
        if (this.marcaFilter) {
          this.productList = this.productList.filter(
            (product) =>
              product.marca &&
              product.marca.toLowerCase().includes(this.marcaFilter.toLowerCase())
          );
        }
      });
  }

  // Función para cambiar de página
  pageChanged(event: any): void {
    this.currentPage = event;
    this.getProducts(); // Llama a getProducts nuevamente al cambiar de página
  }

  // Función para mostrar todos los productos
  showAllProducts(): void {
    // Establece un valor grande para itemsPerPage para mostrar todos los productos
    this.itemsPerPage = 10000; // Puedes ajustar esto según la cantidad de productos que tengas
    this.currentPage = 1; // Vuelve a la primera página
    this.getProducts(); // Vuelve a cargar los productos para mostrar todos
  }
}
