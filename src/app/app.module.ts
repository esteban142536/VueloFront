import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//component created my us
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninUserComponent } from './components/signin-user/signin-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { UserIndexComponent } from './components/user-index/user-index.component';
import { AddTipoAvionComponent } from './components/add-tipo-avion/add-tipo-avion.component';
import { FindRutaIDComponent } from './components/find-ruta-id/find-ruta-id.component';
import { CreateRutaComponent } from './components/create-ruta/create-ruta.component';
import { CreateVueloComponent } from './components/create-vuelo/create-vuelo.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EditarRutaComponent } from './components/editar-ruta/editar-ruta.component';
import { EditarVueloComponent } from './components/editar-vuelo/editar-vuelo.component';
import { EditarTipoAvionComponent } from './components/editar-tipo-avion/editar-tipo-avion.component';
import { HomeComponent } from './components/home/home.component';
import { TiqueteComponent } from './components/tiquete/tiquete.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { MatFormFieldModule } from '@angular/material/form-field';

//Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { EditarTiqueteComponent } from './components/editar-tiquete/editar-tiquete.component';
import { CreateTiqueteComponent } from './components/create-tiquete/create-tiquete.component';
import { MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    SigninUserComponent,
    LoginUserComponent,
    UserIndexComponent,
    AddTipoAvionComponent,
    FindRutaIDComponent,
    CreateRutaComponent,
    CreateVueloComponent,
    AcercaDeComponent,
    EditarRutaComponent,
    EditarVueloComponent,
    EditarTipoAvionComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    EditarTiqueteComponent,
    CreateTiqueteComponent,
    TiqueteComponent,
    HistoriaComponent,
    ReporteComponent,
    ContactenosComponent,
  ],
  imports: [
    AppRoutingModule, 
    BrowserModule, FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    CarouselModule,
    MatMenuModule,
    MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
