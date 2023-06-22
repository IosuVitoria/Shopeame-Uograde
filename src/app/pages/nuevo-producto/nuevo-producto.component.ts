import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceComponent } from 'src/app/service/service.component';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})

export class NuevoProductoComponent {
  productForm: FormGroup;

  constructor(private service: ServiceComponent, private router: Router, private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      nombre: '',
      marca: '',
      tipo: '',
      precio: null,
      enlace_amazon: '',
      imagen: '',
      descripcion: ''
    });
  }
  

  submitForm(){
    this.service.postProduct(this.productForm.value).subscribe(() => {
      this.router.navigate(["/listado"]);
    });
  }
}