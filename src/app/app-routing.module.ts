import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { SigninUserComponent } from './components/signin-user/signin-user.component';
import { UserIndexComponent } from './components/user-index/user-index.component';
import { AddTipoAvionComponent } from './components/add-tipo-avion/add-tipo-avion.component';
import { FindRutaIDComponent } from './components/find-ruta-id/find-ruta-id.component';
import { CreateRutaComponent } from './components/create-ruta/create-ruta.component';
import { CreateAsientoComponent } from './components/create-asiento/create-asiento.component';

const routes: Routes = [
  { path: '', redirectTo: 'api', pathMatch: 'full' }, //index
  { path: 'signin', component: SigninUserComponent },
  { path: 'login', component: LoginUserComponent },
  { path: 'index', component: UserIndexComponent },
  { path: 'addTipoAvion', component: AddTipoAvionComponent },
  { path: 'findRuta', component: FindRutaIDComponent }, //buscar al ruta por el id
  { path: 'createRuta', component: CreateRutaComponent },
  { path: 'createAsiento', component: CreateAsientoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
