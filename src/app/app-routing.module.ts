import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninUserComponent } from './components/signin-user/signin-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'api', pathMatch: 'full' },
  { path: 'add', component: SigninUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
