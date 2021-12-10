import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from 'src/app/services/user.service';
import {FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin-user',
  templateUrl: './signin-user.component.html',
  styleUrls: ['./signin-user.component.css'],
})
export class SigninUserComponent implements OnInit {
  hide = true;
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
    fecNacimiento: undefined,
    edad: 0,
    direccion: '',
    telefono: 0,
  };

  constructor(
    private userService: UserService, 
    private router: Router, 
    private activeRouter: ActivatedRoute,
    private _snackbar: MatSnackBar,) {}

  ngOnInit(): void {}

  saveUser(): void {
    const data = {
      email: this.user.email,
      password: this.user.password,
      nombre: this.user.nombre,
      apellido: this.user.apellido,
      fecNacimient: this.user.fecNacimiento,
      edad: this.user.edad,
      direccion: this.user.direccion,
      telefono: this.user.telefono,
      _id: null,
    };

    this.userService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.router.navigateByUrl('/home');

        this._snackbar.open('¡El usuario fue creada con exito!', '', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      },
      (error) => {
        console.log('Error signin in add user \n', error);
      }
    );
  }
}
