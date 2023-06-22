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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    NuevoProductoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
