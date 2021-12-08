import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { vuelo } from 'src/app/models/vuelo.model';
import { vueloServise } from 'src/app/services/vuelo.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'dreamOut-mantenimiento-tiquete',
  templateUrl: './mantenimiento-tiquete.component.html',
  styleUrls: ['./mantenimiento-tiquete.component.css'],
})

export class MantenimientoTiqueteComponent implements OnInit {
  //Lista de tiquetes
  listaVuelo: vuelo[] = [];

  //Configuración de la tabla
  displayedColumns: string[] = [
    '_id',
    'marca',
    'numeroVuelo',
    'ID_TipoAvion',
    'fechaIda',
    'ID_Ruta'
  ];

  dataSource!: MatTableDataSource<any>;

  //Para la paginación
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private vueloServise: vueloServise,
    private _snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.consultarVuelo();
  }

  ngAfterViewInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  consultarVuelo(): void {
    this.vueloServise.getAll().subscribe({
      next: (data) => {
        this.listaVuelo = data;
        this.dataSource = new MatTableDataSource(this.listaVuelo);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(data);
      },
      error: (e: any) => console.error(e),
    });
  }

  eliminarVuelo(element: any) {
    swal
      .fire({
        title: `¿Desea eliminar el vuelo #${element._id} con el número de vuelo ${element.numeroVuelo}?`,
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
          this.vueloServise.delete(element._id).subscribe({
            next: (data) => {
              this.consultarVuelo();
              console.log(data);

              this._snackbar.open('El vuelo fue eliminada correctamente', '', {
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

  modificarVuelo(element: any) {
    swal
      .fire({
        title: `¿Desea eliminar el vuelo #${element._id} con el número de vuelo ${element.numeroVuelo}?`,
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
          this.router.navigateByUrl(`dashboard/detalleTiquete/${element._id}`);
        }
      });
  } // fin del método modificar
}
