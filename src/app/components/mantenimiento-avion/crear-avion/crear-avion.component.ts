import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { tipoAvionServise } from 'src/app/services/tipoAvion.service';
import { tipoAvion } from 'src/app/models/tipoAvion.model';

@Component({
  selector: 'dreamOut-crear-avion',
  templateUrl: './crear-avion.component.html',
  styleUrls: ['./crear-avion.component.css'],
})

export class CrearAvionComponent implements OnInit {
  //Atributos del compomente
  idAvion: number = 0;
  textPantalla: string = 'Crear avión';
  isInsertar: boolean = true;
  form: FormGroup;
  avion = new tipoAvion();

  //Se inyectan los objetos requerios y se crear el formulario
  constructor(
    private tipoAvionServise: tipoAvionServise,
    private fb: FormBuilder,
    private router: Router,
    private _snackbar: MatSnackBar,
    private activeRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      cantidadFila: ['', Validators.required],
      cantidadAsientos: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //Cuando se inicializa el compomente de consulta si el ID fue enviado por parametro
    this.activeRouter.params.subscribe((params: Params) => {
      console.log(params);
      this.idAvion = params['id'];

      //Se consultan los datos del avion
      if (this.idAvion !== undefined) {
        this.isInsertar = false;
        this.textPantalla = 'Modificar avión';
        console.log('edit mode ');

        //Se consultan los datos del avion
        this.tipoAvionServise.get(this.idAvion).subscribe({
          next: (res: any) => {
            this.avion = res;
            this.form.setValue({
              //_id: this.avion._id,
              nombre: this.avion.nombre,
              cantidadFila: this.avion.cantidadFila,
              cantidadAsientos: this.avion.cantidadAsientos,
            });

            console.log(this.avion);

            this._snackbar.open('La factura fue cargada con exito, por favor verificar', '', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            });
          },
          error: (e: any) => console.error(e),
        });
        console.log('_id avion' + this.idAvion);
      }
    });
  }

  //Método para modificar un avion
  modificarAvion(): void {
    const data = {
      _id: null, //this.form.value._id,
      nombre: this.form.value.nombre,
      cantidadFila: this.form.value.cantidadFila,
      cantidadAsientos: this.form.value.cantidadAsientos,
    };

    console.log(data);

    this.tipoAvionServise.update(this.idAvion, data).subscribe({
      next: (res: any) => {
        this.form.reset;
        console.log(res);
        this.router.navigateByUrl('/mantenimientoAvion');

        this._snackbar.open('¡El avión fue modificada con exito!', '', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      },
      error: (e: any) => console.error(e),
    });
  }

  //Método para guardar una nuevo avion
  saveAvion(): void {
    const data = {
      _id: null,
      nombre: this.form.value.nombre,
      cantidadFila: this.form.value.cantidadFila,
      cantidadAsientos: this.form.value.cantidadAsientos,
    };

    console.log('data in save factura', data);

    this.tipoAvionServise.create(data).subscribe({
      next: (res: any) => {
        this.form.reset;
        console.log(res);
        this.router.navigateByUrl('/mantenimientoAvion');

        this._snackbar.open('¡El avión fue creada con exito!', '', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      },
      error: (e: any) => console.error(e),
    });
  }
}
