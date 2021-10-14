import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//component created my us
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninUserComponent } from './components/signin-user/signin-user.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninUserComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
