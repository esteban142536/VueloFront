import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin-user',
  templateUrl: './signin-user.component.html',
  styleUrls: ['./signin-user.component.css'],
})
export class SigninUserComponent implements OnInit {
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
