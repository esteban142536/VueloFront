import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { vuelo } from 'src/app/models/vuelo.model';
import { vueloServise } from 'src/app/services/vuelo.service';

@Component({
  selector: 'app-create-tiquete',
  templateUrl: './create-tiquete.component.html',
  styleUrls: ['./create-tiquete.component.css'],
})
export class CreateTiqueteComponent implements OnInit {
  //Atributos del compomente
  idVuelo: number = 0;
  textPantalla: string = 'Crear vuelo';
  isInsertar: boolean = true;
  form: FormGroup;
  vuelo = new vuelo();

  //Se inyectan los objetos requerios y se crear el formulario
  constructor(
    private vueloServise: vueloServise,
    private fb: FormBuilder,
    private router: Router,
    private _snackbar: MatSnackBar,
    private activeRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      _id: ['', Validators.required],
      numeroVuelo: ['', Validators.required],
      fechaIda: ['', Validators.required],
      ID_TipoAvion: ['', Validators.required],
      ID_Ruta: ['', Validators.required],
      marca: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //Cuando se inicializa el compomente de consulta si el ID fue enviado por parametro
    this.activeRouter.params.subscribe((params: Params) => {
      console.log(params);
      this.idVuelo = params['_id'];

      //se consultan los datos del vuelo
      if (this.idVuelo !== undefined) {
        this.isInsertar = false;
        this.textPantalla = 'Modificar vuelo';

        //se consultan los datos de la factura
        this.vueloServise.get(this.idVuelo).subscribe({
          next: (res: any) => {
            this.vuelo = res;
            this.form.setValue({
              _id: this.vuelo._id,
              numeroVuelo: this.vuelo.numeroVuelo,
              fechaIda: this.vuelo.fechaIda,
              ID_TipoAvion: this.vuelo.ID_TipoAvion,
              ID_Ruta: this.vuelo.ID_Ruta,
              marca: this.vuelo.marca,
            });

            console.log(this.vuelo);

            this._snackbar.open(
              'El vuelo fue cargada con exito, por favor verificar',
              '',
              {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
              }
            );
          },
          error: (e: any) => console.error(e),
        });
        console.log('_id vuelo' + this.idVuelo);
      }
    });
  }

  //Método para modificar vuelo
  modificarVuelo(): void {
    const data = {
      _id: this.vuelo._id,
      numeroVuelo: this.vuelo.numeroVuelo,
      fechaIda: this.vuelo.fechaIda,
      ID_TipoAvion: this.vuelo.ID_TipoAvion,
      ID_Ruta: this.vuelo.ID_Ruta,
      marca: this.vuelo.marca,
    };

    console.log(data);

    this.vueloServise.update(this.idVuelo, data).subscribe({
      next: (res: any) => {
        this.form.reset;
        console.log(res);
        this.router.navigateByUrl('/dashboard/mantenimientoFactura');

        this._snackbar.open(
          'El vuelo fue modificada con exito, por favor verificar',
          '',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          }
        );
      },
      error: (e: any) => console.error(e),
    });
  }

  //Método para guardar un nueva vuelo
  saveVuelo(): void {
    const data = {
      _id: this.vuelo._id,
      numeroVuelo: this.vuelo.numeroVuelo,
      fechaIda: this.vuelo.fechaIda,
      ID_TipoAvion: this.vuelo.ID_TipoAvion,
      ID_Ruta: this.vuelo.ID_Ruta,
      marca: this.vuelo.marca,
    };

    console.log('data in save vuelo', data);

    this.vueloServise.create(data).subscribe({
      next: (res: any) => {
        this.form.reset;
        console.log(res);
        this.router.navigateByUrl('/dashboard/mantenimientoVuelo');

        this._snackbar.open(
          'El vuelo fue agregada con exito, por favor verificar',
          '',
          {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          }
        );
      },
      error: (e: any) => console.error(e),
    });
  }
}
