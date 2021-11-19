import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from 'src/app/services/user.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin-user',
  templateUrl: './signin-user.component.html',
  styleUrls: ['./signin-user.component.css'],
})
export class SigninUserComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  user: User = {
    password: '',
    email: '',
    nombre: '',
    apellido: '',
    fecNacimient: undefined,
    edad: 0,
    direccion: '',
    telefono: 0,
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  saveUser(): void {
    const data = {
      email: this.user.email,
      password: this.user.password,
      nombre: this.user.nombre,
      apellido: this.user.apellido,
      fecNacimient: this.user.fecNacimient,
      edad: this.user.edad,
      direccion: this.user.direccion,
      telefono: this.user.telefono,
      _id: null,
    };

    this.userService.create(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('Error signin in add user \n', error);
      }
    );
  }
}
