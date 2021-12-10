import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginUserComponent } from './components/login-user/login-user.component';
import { SigninUserComponent } from './components/signin-user/signin-user.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { HomeComponent } from './components/home/home.component';
import { TiqueteComponent } from './components/tiquete/tiquete.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { UserIndexComponent } from './components/user-index/user-index.component';
import { MantenimientoAvionComponent } from './components/mantenimiento-avion/mantenimiento-avion.component';
import { MantenimientoTiqueteComponent } from './components/mantenimiento-tiquete/mantenimiento-tiquete.component';
import { MantenimientoUsuarioComponent } from './components/mantenimiento-usuario/mantenimiento-usuario.component';
import { EditarRutaComponent } from './components/editar-ruta/editar-ruta.component';
import { FindRutaIDComponent } from './components/find-ruta-id/find-ruta-id.component';
import { CreateRutaComponent } from './components/create-ruta/create-ruta.component';
import { CreateTiqueteComponent } from './components/mantenimiento-tiquete/create-tiquete/create-tiquete.component';
import { MantenimientoFacturaComponent } from './components/mantenimiento-factura/mantenimiento-factura.component';
import { CrearAvionComponent } from './components/mantenimiento-avion/crear-avion/crear-avion.component';
import { CrearfacturaComponent } from './components/mantenimiento-factura/crear-factura/crearfactura.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { CrearUsuarioComponent } from './components/mantenimiento-usuario/crear-usuario/crear-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tiquete', component: TiqueteComponent },
  { path: 'signin', component: SigninUserComponent },
  { path: 'login', component: LoginUserComponent },
  { path: 'findRuta', component: FindRutaIDComponent },
  { path: 'createRuta', component: CreateRutaComponent },
  { path: 'createTiquete', component: CreateTiqueteComponent },
  { path: 'acercaDe', component: AcercaDeComponent },
  { path: 'editarRuta', component: EditarRutaComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'mantenimientoAvion', component: MantenimientoAvionComponent },
  { path: 'mantenimientoTiquete', component: MantenimientoTiqueteComponent },
  { path: 'mantenimientoUsuario', component: MantenimientoUsuarioComponent },
  { path: 'mantenimientoFactura', component: MantenimientoFacturaComponent },
  { path: 'crearfactura', component: CrearfacturaComponent },
  { path: 'crearAvion', component: CrearAvionComponent },
  { path: 'crearUsuario', component: CrearUsuarioComponent },

  { path: 'facturas', component: MantenimientoFacturaComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'detalleFactura', component: CrearfacturaComponent },
  { path: 'detalleFactura/:id', component: CrearfacturaComponent },

  { path: 'mantenimientoAvion', component: MantenimientoAvionComponent },
  { path: 'detalleAvion', component: CrearAvionComponent },
  { path: 'detalleAvion/:id', component: CrearAvionComponent },

  { path: 'mantenimientoTiqueteComponent', component: MantenimientoTiqueteComponent,},
  { path: 'detalleTiquete', component: CreateTiqueteComponent },
  { path: 'detalleTiquete/:id', component: CreateTiqueteComponent },

  { path: 'MantenimientoUsuario', component: MantenimientoUsuarioComponent,},
  { path: 'detalleUsuario', component: CrearUsuarioComponent },
  { path: 'detalleUsuario/:id', component: CrearUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
