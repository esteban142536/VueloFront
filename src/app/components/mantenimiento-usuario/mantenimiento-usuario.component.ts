import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'dreamOut-mantenimiento-usuario',
  templateUrl: './mantenimiento-usuario.component.html',
  styleUrls: ['./mantenimiento-usuario.component.css'],
})
export class MantenimientoUsuarioComponent implements OnInit {
  //Lista de facturas
  listaUser: User[] = [];

  //Configuración de la tabla
  displayedColumns: string[] = [
    '_id',
    'nombre',
    'apellido',
    'tipoUsuario',
    'email',
    'fecNacimiento',
    'edad',
    'direccion',
    'telefono',
    'acciones',
  ];
  dataSource!: MatTableDataSource<any>;

  //Para la paginación
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UserService,
    private _snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.consultarUser();
  }

  ngAfterViewInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  consultarUser(): void {
    this.userService.getAll().subscribe({
      next: (data) => {
        this.listaUser = data;
        this.dataSource = new MatTableDataSource(this.listaUser);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(data);
      },
      error: (e: any) => console.error(e),
    });
  }

  eliminarUser(element: any) {
    swal
      .fire({
        title: `¿Desea eliminar el usuario #${element._id} a nombre de ${element.nombre} ${element.apellido}?`,
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
          this.userService.delete(element._id).subscribe({
            next: (data) => {
              this.consultarUser();
              console.log(data);

              this._snackbar.open(
                'El usuario fue eliminada correctamente',
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
      });
  } // fin del médoto de eliminar

  modificarUser(element: any) {
    swal
      .fire({
        title: `¿Desea modificar el usuario #${element._id} a nombre de ${element.nombre} ${element.apellido}?`,
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
          this.router.navigateByUrl(`dashboard/detalleUser/${element._id}`);
        }
      });
  } // fin del método modificar
}
