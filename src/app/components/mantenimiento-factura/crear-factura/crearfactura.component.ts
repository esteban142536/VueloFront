import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { factura } from 'src/app/models/factura.model';
import { facturaServise } from 'src/app/services/factura.service';

@Component({
  selector: 'dreamOut-crearfactura',
  templateUrl: './crearfactura.component.html',
  styleUrls: ['./crearfactura.component.css'],
})
export class CrearfacturaComponent implements OnInit {
  //Atributos del compomente
  idFactura: number = 0;
  textPantalla: string = 'Crear factura';
  isInsertar: boolean = true;
  form: FormGroup;
  factura = new factura();

  //Se inyectan los objetos requerios y se crear el formulario
  constructor(
    private facturaService: facturaServise,
    private fb: FormBuilder,
    private router: Router,
    private _snackbar: MatSnackBar,
    private activeRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      ID_Tiquete: ['', Validators.required],
      ID_Usuario: ['', Validators.required],
      fecha: ['', Validators.required],
      IVA: ['', Validators.required],
      Total: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //Cuando se inicializa el compomente de consulta si el ID fue enviado por parametro
    this.activeRouter.params.subscribe((params: Params) => {
      console.log('id de factura', params);
      this.idFactura = params['id'];

      //se consultan los datos de la factura
      if (this.idFactura !== undefined) {
        this.isInsertar = false;
        this.textPantalla = 'Modificar factura';
        console.log('edit mode ');

        //se consultan los datos de la factura
        this.facturaService.get(this.idFactura).subscribe({
          next: (res: any) => {
            this.factura = res;
            this.form.setValue({
              ID_Tiquete: this.factura.ID_Tiquete,
              ID_Usuario: this.factura.ID_Usuario,
              fecha: this.factura.fecha,
              IVA: this.factura.IVA,
              Total: this.factura.Total,
            });

            console.log(this.factura);

            this._snackbar.open(
              'La factura fue cargada con exito, por favor verificar',
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
        console.log('_id factura' + this.idFactura);
      }
    });
  }

  //Método para modificar una factura
  modificarFactura(): void {
    const data = {
      _id: this.form.value._id,
      ID_Tiquete: this.form.value.ID_Tiquete,
      ID_Usuario: this.form.value.ID_Usuario,
      fecha: this.form.value.fecha,
      IVA: this.form.value.IVA,
      Total: this.form.value.Total,
    };
    this.activeRouter.params.subscribe((params: Params) => {
      data._id = params.id;
    });
    console.log('update data',data);

    this.facturaService.update(this.idFactura, data).subscribe({
      next: (res: any) => {
        console.log('this', res);
        this.form.reset;
        this.router.navigateByUrl('/mantenimientoFactura');

        this._snackbar.open(
          'La factura fue modificada con exito, por favor verificar',
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

  //Método para guardar una nueva factura
  saveFactura(): void {
    const data = {
      _id: null,
      ID_Tiquete: this.form.value.ID_Tiquete,
      ID_Usuario: this.form.value.ID_Usuario,
      fecha: this.form.value.fecha,
      IVA: this.form.value.IVA,
      Total: this.form.value.Total,
    };

    console.log('data in save factura', data);

    this.facturaService.create(data).subscribe({
      next: (res: any) => {
        this.form.reset;
        console.log(res);
        this.router.navigateByUrl('/mantenimientoFactura');

        this._snackbar.open(
          'La factura fue agregada con exito, por favor verificar',
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
