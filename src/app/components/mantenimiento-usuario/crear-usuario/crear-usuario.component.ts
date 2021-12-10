import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'dreamOut-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
})
export class CrearUsuarioComponent implements OnInit {
  //Atributos del compomente
  idUser: number = 0;
  textPantalla: string = 'Crear Usuario';
  isInsertar: boolean = true;
  form: FormGroup;
  user = new User();

  //Se inyectan los objetos requerios y se crear el formulario
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private _snackbar: MatSnackBar,
    private activeRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      tipoUsuario: ['', Validators.required],
      email: ['', Validators.required],
      fecNacimiento: ['', Validators.required],
      edad: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //Cuando se inicializa el compomente de consulta si el ID fue enviado por parametro
    this.activeRouter.params.subscribe((params: Params) => {
      console.log(params);
      this.idUser = params['id'];

      //Se consultan los datos del user
      if (this.idUser !== undefined) {
        this.isInsertar = false;
        this.textPantalla = 'Modificar usuario';
        console.log('edit mode ');

        //Se consultan los datos del user
        this.userService.get(this.idUser).subscribe({
          next: (res: any) => {
            this.user = res;
            this.form.setValue({
              _id: this.user._id,
              nombre: this.user.nombre,
              apellido: this.user.apellido,
              tipoUsuario: this.user.tipoUsuario,
              email: this.user.email,
              fecNacimiento: this.user.fecNacimiento,
              edad: this.user.edad,
              direccion: this.user.direccion,
              telefono: this.user.telefono,
            });

            console.log(this.user);

            this._snackbar.open('El usuario fue cargada con exito', '', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            });
          },
          error: (e: any) => console.error(e),
        });
        console.log('_id user' + this.idUser);
      }
    });
  }

  //Método para modificar un user
  modificarUsuario(): void {
    const data = {
      _id: this.form.value._id,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      tipoUsuario: this.form.value.tipoUsuario,
      email: this.form.value.email,
      fecNacimiento: this.form.value.fecNacimiento,
      edad: this.form.value.edad,
      direccion: this.form.value.direccion,
      telefono: this.form.value.telefono,
    };

    console.log(data);

    this.userService.update(this.idUser, data).subscribe({
      next: (res: any) => {
        this.form.reset;
        console.log(res);
        this.router.navigateByUrl('/mantenimientoUsuario');

        this._snackbar.open('¡El usuario fue modificada con exito!', '', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      },
      error: (e: any) => console.error(e),
    });
  }

  //Método para guardar una nuevo user
  saveUsuario(): void {
    const data = {
      _id: null,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      tipoUsuario: this.form.value.tipoUsuario,
      email: this.form.value.email,
      fecNacimiento: this.form.value.fecNacimiento,
      edad: this.form.value.edad,
      direccion: this.form.value.direccion,
      telefono: this.form.value.telefono,
    };

    console.log('data in save user', data);

    this.userService.create(data).subscribe({
      next: (res: any) => {
        this.form.reset;
        console.log(res);
        this.router.navigateByUrl('/mantenimientoUsuario');

        this._snackbar.open('¡El usuario fue creada con exito!', '', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      },
      error: (e: any) => console.error(e),
    });
  }
}
