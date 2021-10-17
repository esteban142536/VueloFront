import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { SigninUserComponent } from './components/signin-user/signin-user.component';
import { UserIndexComponent } from './components/user-index/user-index.component';

const routes: Routes = [
  { path: '', redirectTo: 'api', pathMatch: 'full' }, //index
  { path: 'signin', component: SigninUserComponent },
  { path: 'login', component: LoginUserComponent },
  { path: 'index', component: UserIndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
