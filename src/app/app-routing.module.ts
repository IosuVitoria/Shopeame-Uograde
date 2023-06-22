import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DetalleComponent } from './pages/listado/detalle/detalle.component';
import { NuevoProductoComponent } from './pages/nuevo-producto/nuevo-producto.component';



const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"listado", component: ListadoComponent},
  {path:"contacto", component: ContactoComponent},
  {path:"listado/:id", component: DetalleComponent},
  {path: "nuevoproducto", component: NuevoProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
