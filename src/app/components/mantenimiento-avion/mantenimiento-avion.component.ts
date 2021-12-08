import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { tipoAvionServise } from 'src/app/services/tipoAvion.service';
import { tipoAvion } from 'src/app/models/tipoAvion.model';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'dreamOut-mantenimiento-avion',
  templateUrl: './mantenimiento-avion.component.html',
  styleUrls: ['./mantenimiento-avion.component.css'],
})

export class MantenimientoAvionComponent implements OnInit {
  //Lista de facturas
  listaAvion: tipoAvion[] = [];

  //Configuración de la tabla
  displayedColumns: string[] = [
    '_id',
    'nombre',
    'cantidadFila',
    'cantidadAsientos',
  ];
  dataSource!: MatTableDataSource<any>;

  //Para la paginación
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private tipoAvionServise: tipoAvionServise,
    private _snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.consultarAvion();
  }

  ngAfterViewInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  consultarAvion(): void {
    this.tipoAvionServise.getAll().subscribe({
      next: (data) => {
        this.listaAvion = data;
        this.dataSource = new MatTableDataSource(this.listaAvion);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(data);
      },
      error: (e: any) => console.error(e),
    });
  }

  eliminarAvion(element: any) {
    swal
      .fire({
        title: `¿Desea eliminar el avión #${element._id} la a nombre de ${element.nombre}?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar',
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log(element._id);
          this.tipoAvionServise.delete(element._id).subscribe({
            next: (data) => {
              this.consultarAvion();
              console.log(data);

              this._snackbar.open('El avión eliminada correctamente', '', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
              });
            },
            error: (e: any) => console.error(e),
          });
        }
      });
  } // fin del médoto de eliminar

  modificarAvion(element: any) {
    swal
      .fire({
        title: `¿Desea eliminar el avión #${element._id} la a nombre de ${element.nombre}?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, modificar',
        cancelButtonText: 'Cancelar',
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log(element._id);
          this.router.navigateByUrl(`dashboard/detalleAvion/${element._id}`);
        }
      });
  } // fin del método modificar
}
