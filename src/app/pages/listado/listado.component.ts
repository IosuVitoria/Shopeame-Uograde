import { Component } from '@angular/core';
import { ServiceComponent } from 'src/app/service/service.component';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})


export class ListadoComponent {

  productList: any[] = [];

  constructor (private servicio:ServiceComponent){}

  ngOnInit():void {
    this.servicio.getProducts().subscribe((data:any) => {
      console.log(data);
      this.productList=[...data];
    })
  }

  deleteProduct(productId: any):void {
    this.servicio.deleteProductById(productId).subscribe(() => {
      this.productList = this.productList.filter(product => product.id!== productId);
    })
  }

}
