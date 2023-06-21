import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceComponent } from 'src/app/service/service.component'; 

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})

export class DetalleComponent {
  id!: number;
  product!: any;

  constructor(
    private servicio: ServiceComponent,
    private activatedRoute: ActivatedRoute
  ){}

    ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      // console.log(params);
      this.id = Number(params.get('id'));
    });

    this.servicio.getProductsById(this.id).subscribe((data:any)=>{
      // console.log(data);
    this.product = data
    })
  }
}



