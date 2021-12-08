import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { HomeComponent } from './components/home/home.component';
import { SigninUserComponent } from './components/signin-user/signin-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';

import { UserIndexComponent } from './components/user-index/user-index.component';
import { MantenimientoUsuarioComponent } from './components/mantenimiento-usuario/mantenimiento-usuario.component';

import { AddTipoAvionComponent } from './components/add-tipo-avion/add-tipo-avion.component';
import { EditarVueloComponent } from './components/editar-vuelo/editar-vuelo.component';
import { EditarTipoAvionComponent } from './components/editar-tipo-avion/editar-tipo-avion.component';
import { MantenimientoAvionComponent } from './components/mantenimiento-avion/mantenimiento-avion.component';

import { TiqueteComponent } from './components/tiquete/tiquete.component';
import { CreateTiqueteComponent } from './components/mantenimiento-tiquete/create-tiquete/create-tiquete.component';
import { EditarTiqueteComponent } from './components/editar-tiquete/editar-tiquete.component';
import { MantenimientoTiqueteComponent } from './components/mantenimiento-tiquete/mantenimiento-tiquete.component';

import { FindRutaIDComponent } from './components/find-ruta-id/find-ruta-id.component';
import { CreateRutaComponent } from './components/create-ruta/create-ruta.component';
import { CreateVueloComponent } from './components/create-vuelo/create-vuelo.component';
import { EditarRutaComponent } from './components/editar-ruta/editar-ruta.component';

import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { FooterComponent } from './components/footer/footer.component'
import { CrearfacturaComponent } from './components/mantenimiento-factura/crear-factura/crearfactura.component';
import { ReportesComponent } from './components/reportes/reportes.component';

//Angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselSliderComponent } from './components/carousel-slider/carousel-slider.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCarouselModule } from 'ng-mat-carousel';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule} from '@angular/forms';
import { MantenimientoFacturaComponent } from './components/mantenimiento-factura/mantenimiento-factura.component';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashborahComponent } from './components/dashborah/dashborah.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { CrearAvionComponent } from './components/mantenimiento-avion/crear-avion/crear-avion.component';
import { CrearUsuarioComponent } from './components/mantenimiento-usuario/crear-usuario/crear-usuario.component';
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
    ContactenosComponent,
    CarouselSliderComponent,
    MantenimientoTiqueteComponent,
    MantenimientoUsuarioComponent,
    MantenimientoAvionComponent,
    MantenimientoFacturaComponent,
    CrearfacturaComponent,
    DashborahComponent,
    ReportesComponent,
    CrearAvionComponent,
    CrearUsuarioComponent,
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
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot(),
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTabsModule,
    MatListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
