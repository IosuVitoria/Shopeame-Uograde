import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})

export class ServiceComponent {

  db_url: string = "http://localhost:3000/productos";

  constructor (private http: HttpClient) {}

  getProducts(page: number, itemsPerPage: number) {
    const startIndex = (page - 1) * itemsPerPage;
    return this.http.get(`${this.db_url}?_start=${startIndex}&_limit=${itemsPerPage}`);
  }

  
  getAllProducts() {
    return this.http.get(this.db_url); }

  getProductsById(id: number){
    return this.http.get(`${this.db_url}/${id}`)
  }

  deleteProductById(id: number){
    return this.http.delete(`${this.db_url}/${id}`)
  }

  postProduct(product: any){
    return this.http.post(this.db_url, product)
  }

}
