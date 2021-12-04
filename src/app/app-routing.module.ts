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
import { EditarRutaComponent } from './components/editar-ruta/editar-ruta.component';
import { EditarVueloComponent } from './components/editar-vuelo/editar-vuelo.component';
import { EditarTipoAvionComponent } from './components/editar-tipo-avion/editar-tipo-avion.component';
import { AddTipoAvionComponent } from './components/add-tipo-avion/add-tipo-avion.component';
import { FindRutaIDComponent } from './components/find-ruta-id/find-ruta-id.component';
import { CreateRutaComponent } from './components/create-ruta/create-ruta.component';
import { CreateVueloComponent } from './components/create-vuelo/create-vuelo.component';
import { CreateTiqueteComponent } from './components/create-tiquete/create-tiquete.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tiquete', component: TiqueteComponent },
  { path: 'signin', component: SigninUserComponent },
  { path: 'login', component: LoginUserComponent },
  { path: 'addTipoAvion', component: AddTipoAvionComponent },
  { path: 'findRuta', component: FindRutaIDComponent },
  { path: 'createRuta', component: CreateRutaComponent },
  { path: 'createVuelo', component: CreateVueloComponent },
  { path: 'createTiquete', component: CreateTiqueteComponent },
  { path: 'acercaDe', component: AcercaDeComponent },
  { path: 'editarRuta', component: EditarRutaComponent },
  { path: 'editarVuelo', component: EditarVueloComponent },
  { path: 'editarVuelo', component: EditarVueloComponent },
  { path: 'editarTipoAvion', component: EditarTipoAvionComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'contactenos', component: ContactenosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
