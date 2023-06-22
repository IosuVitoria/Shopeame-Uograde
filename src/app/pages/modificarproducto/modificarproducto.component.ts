import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modificarproducto',
  templateUrl: './modificarproducto.component.html',
  styleUrls: ['./modificarproducto.component.scss']
})
export class ModificarProductoComponent implements OnInit {
  product: any;
  modifiedProductForm: FormGroup;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.modifiedProductForm = new FormGroup({
      nombre: new FormControl(),
      marca: new FormControl(),
      tipo: new FormControl(),
      precio: new FormControl(),
      imagen: new FormControl(),
      descripcion: new FormControl()
    });
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.getProductById(productId).subscribe((product: any) => {
        this.product = product;
        this.populateForm();
      });
    }
  }

  getProductById(id: string) {
    return this.http.get(`http://localhost:3000/productos/${id}`);
  }

  populateForm() {
    this.modifiedProductForm.patchValue({
      nombre: this.product.nombre,
      marca: this.product.marca,
      tipo: this.product.tipo,
      precio: this.product.precio,
      imagen: this.product.imagen,
      descripcion: this.product.descripcion
    });
  }

  submitForm() {
    const modifiedProduct = this.modifiedProductForm.value;
    this.updateProduct(modifiedProduct).subscribe(() => {
      console.log('Producto actualizado correctamente');
      // Aquí puedes agregar alguna redirección o lógica adicional después de la actualización exitosa.
    });
  }

  updateProduct(modifiedProduct: any) {
    return this.http.put(`http://localhost:3000/productos/${this.product.id}`, modifiedProduct);
  }
}
