import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavComponent } from './core/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DetalleComponent } from './pages/listado/detalle/detalle.component';
import { NuevoProductoComponent } from './pages/nuevo-producto/nuevo-producto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModificarProductoComponent } from './pages/modificarproducto/modificarproducto.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ListadoComponent,
    ContactoComponent,
    DetalleComponent,
    NuevoProductoComponent,
    ModificarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    NuevoProductoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
